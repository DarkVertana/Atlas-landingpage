# Changelog — 2026-09-13

## Support & Dispute portal (on `/dispute-resolution`)

Added an internal Support & Dispute portal to the dispute-resolution page. Users
can open a **support request** or a **dispute**, receive a ticket number on
submission, and admin/tech are alerted by email.

### User-visible

- Removed the "Last updated · April 1, 2026" line from `/dispute-resolution`.
- New on-page portal (first section, "Support & Dispute portal") with a
  Support / Dispute toggle, validated fields, and a success state that shows the
  generated ticket number. Dispute mode keeps the FCRA rights footnote and the
  `compliance@atlasscreening.com` path.
- New admin view **`/admin/tickets`** (sidebar + dashboard stat + quick link) to
  triage tickets: status (new → in_review → resolved → archived), reply by
  email, delete.

### Ticket flow

- Ticket numbers: `ATL-YYYYMMDD-XXXX` (date + random suffix, unique-constrained
  with a one-retry fallback on collision).
- Stored in a new Supabase table `support_tickets` (see
  `supabase/migrations/0002_support_tickets.sql`) with RLS mirroring
  `contact_submissions`: public insert, admin manage.
- Admin alert email sent via the Resend REST API (no SDK dependency). It is
  best-effort and no-ops gracefully when unconfigured — the ticket is always
  stored regardless.

### Files

- `supabase/migrations/0002_support_tickets.sql` — new table + RLS (run once in Supabase).
- `app/lib/actions.ts` — `submitSupportTicket`, ticket-number gen, Resend alert.
- `app/components/SupportDisputePortal.tsx` — public portal (client).
- `app/dispute-resolution/page.tsx` — embeds the portal + TOC entry.
- `app/admin/(panel)/tickets/page.tsx`, `app/admin/_components/TicketRow.tsx` — admin view.
- `app/admin/actions.ts` — `updateTicketStatus`, `deleteTicket`.
- `app/admin/_components/{Sidebar,ui}.tsx`, `app/admin/(panel)/page.tsx` — nav, badge, dashboard.
- `.env.local.example` — `RESEND_API_KEY`, `TICKET_ALERT_TO`, `TICKET_ALERT_FROM`.

### Setup required

1. Run `supabase/migrations/0002_support_tickets.sql` in the Supabase SQL editor.
2. Set `RESEND_API_KEY` + `TICKET_ALERT_TO` (and optionally `TICKET_ALERT_FROM`)
   to enable email alerts. Without them, tickets still store and appear in
   `/admin/tickets`.

### Verification

- `npm run build` passes; `/dispute-resolution` and `/admin/tickets` compile.
- `npm run lint` — 0 errors (2 pre-existing warnings in `PostsTable.tsx`).

### FCRA note

Portal copy keeps Atlas positioned as a CRA ("Atlas provides consumer reports;
employers make hiring decisions"), preserves dispute rights and the compliance
contact, and makes no absolute accuracy/speed claims.
