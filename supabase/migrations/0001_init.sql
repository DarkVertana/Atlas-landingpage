-- Atlas Screening — admin/database schema
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query) once.
-- It is idempotent-ish: safe to re-run on a fresh project.

-- ─────────────────────────────────────────────────────────────
-- Blog posts
-- ─────────────────────────────────────────────────────────────
create table if not exists public.posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text not null default '',
  category     text not null default 'Guides',
  author       text not null default 'Atlas Team',
  read_time    text not null default '5 min read',
  image        text not null default '',
  image_alt    text not null default '',
  body         text[] not null default '{}',      -- one entry per paragraph
  published    boolean not null default true,
  published_at timestamptz not null default now(),  -- the date shown on the post
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists posts_published_idx on public.posts (published, published_at desc);

-- ─────────────────────────────────────────────────────────────
-- Contact form submissions (leads)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.contact_submissions (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  company    text,
  message    text not null,
  status     text not null default 'new',   -- new | read | archived
  created_at timestamptz not null default now()
);

create index if not exists contact_created_idx on public.contact_submissions (created_at desc);

-- ─────────────────────────────────────────────────────────────
-- Newsletter signups
-- ─────────────────────────────────────────────────────────────
create table if not exists public.newsletter_signups (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  source     text not null default 'blog',
  created_at timestamptz not null default now()
);

create index if not exists newsletter_created_idx on public.newsletter_signups (created_at desc);

-- ─────────────────────────────────────────────────────────────
-- Keep updated_at fresh on posts
-- ─────────────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Row Level Security
-- Public site reads published posts and can submit leads/signups.
-- Any signed-in (admin) user has full access.
-- ─────────────────────────────────────────────────────────────
alter table public.posts               enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.newsletter_signups  enable row level security;

-- Posts: anyone can read published posts; admins do everything.
drop policy if exists "posts public read" on public.posts;
create policy "posts public read" on public.posts
  for select using (published = true);

drop policy if exists "posts admin all" on public.posts;
create policy "posts admin all" on public.posts
  for all to authenticated using (true) with check (true);

-- Contact submissions: anyone can insert (from the contact form); admins manage.
drop policy if exists "contact public insert" on public.contact_submissions;
create policy "contact public insert" on public.contact_submissions
  for insert to anon, authenticated with check (true);

drop policy if exists "contact admin manage" on public.contact_submissions;
create policy "contact admin manage" on public.contact_submissions
  for all to authenticated using (true) with check (true);

-- Newsletter: anyone can insert; admins read/delete.
drop policy if exists "newsletter public insert" on public.newsletter_signups;
create policy "newsletter public insert" on public.newsletter_signups
  for insert to anon, authenticated with check (true);

drop policy if exists "newsletter admin manage" on public.newsletter_signups;
create policy "newsletter admin manage" on public.newsletter_signups
  for all to authenticated using (true) with check (true);
