-- Atlas Screening — Support & Dispute portal
-- Run this in the Supabase SQL editor after 0001_init.sql.
-- Adds the ticket store backing the on-page Support & Dispute portal.

-- ─────────────────────────────────────────────────────────────
-- Support / dispute tickets
-- category:  support  (help with an account, order, or the platform)
--            dispute  (FCRA reinvestigation of a completed report)
-- status:    new | in_review | resolved | archived
-- ─────────────────────────────────────────────────────────────
create table if not exists public.support_tickets (
  id            uuid primary key default gen_random_uuid(),
  ticket_number text unique not null,          -- human-facing ref, e.g. ATL-20260913-7Q4K
  category      text not null default 'support',
  name          text not null,
  email         text not null,
  reference     text,                           -- account/order ID or report reference
  message       text not null,
  status        text not null default 'new',
  created_at    timestamptz not null default now()
);

create index if not exists tickets_created_idx on public.support_tickets (created_at desc);
create index if not exists tickets_status_idx  on public.support_tickets (status);

-- ─────────────────────────────────────────────────────────────
-- Row Level Security — mirrors contact_submissions:
-- anyone can open a ticket from the public portal; admins manage them.
-- ─────────────────────────────────────────────────────────────
alter table public.support_tickets enable row level security;

drop policy if exists "tickets public insert" on public.support_tickets;
create policy "tickets public insert" on public.support_tickets
  for insert to anon, authenticated with check (true);

drop policy if exists "tickets admin manage" on public.support_tickets;
create policy "tickets admin manage" on public.support_tickets
  for all to authenticated using (true) with check (true);
