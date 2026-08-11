# Atlas Admin Panel — Setup

The admin panel lives at **`/admin`** and manages three things stored in Supabase:

- **Blog posts** — full create / edit / delete, drafts vs. published (the public `/blog` reads from here)
- **Contact leads** — every contact-form submission, with status (new / read / archived)
- **Newsletter subscribers** — emails captured from the blog signup form

Until you complete the steps below, the site keeps working: the blog falls back to the
9 built-in starter articles, and the contact/newsletter forms accept input without erroring.

---

## 1. Create a Supabase project

1. Go to <https://supabase.com> → **New project**. Pick a name, a strong database password, and a region close to your users.
2. Wait ~2 minutes for it to provision.

## 2. Create the database schema

1. In the project, open **SQL Editor → New query**.
2. Paste the entire contents of [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) and click **Run**.
   - This creates the `posts`, `contact_submissions`, and `newsletter_signups` tables and their Row-Level-Security policies (public can read published posts + submit forms; only signed-in admins can manage data).

## 3. Add your API keys

1. In Supabase go to **Project Settings → API**.
2. Copy the **Project URL** and the **`anon` public** key.
3. In the project root, copy `.env.local.example` to `.env.local` and fill it in:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```

4. Restart the dev server (`npm run dev`) so the new env vars load.

## 4. Create your admin login

Supabase Auth (email + password) gates the panel. Create your admin user:

1. Supabase → **Authentication → Users → Add user**.
2. Enter your email + a password, and tick **Auto Confirm User** (so you can log in immediately).
3. (Recommended) Turn off public sign-ups: **Authentication → Providers → Email** → disable "Enable Sign-ups". Only users you add by hand can then get in.

## 5. Log in and seed content

1. Visit **`/admin`** → you'll be redirected to `/admin/login`.
2. Sign in with the user you just created.
3. On the **Dashboard**, click **Import starter posts** to load the original 9 articles into Supabase (only works while the table is empty). From then on, manage everything under **Blog posts**.

---

## Deploying (Vercel)

Add the same two environment variables in **Vercel → Project → Settings → Environment Variables**
(`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) for Production/Preview, then redeploy.

## Notes

- The public blog is cached and revalidates every 60s; edits show up within a minute (or instantly on the exact post you saved, via `revalidatePath`).
- Cover images use paths under `/public` (e.g. `/assets/images/…`). Drop new images there and reference the path in the editor. (A Supabase Storage uploader can be added later.)
- All data access is protected by RLS, so the browser-exposed `anon` key is safe to ship.
