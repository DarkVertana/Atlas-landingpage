# CHANGELOG — 2026-08-13

**Project:** Atlas-landingpage (atlasscreening.com marketing site)
**Scope:** FCRA-aligned AI guardrails + SEO overhaul + design/H1 fixes
**All changes below were test-verified** (rendered crawl of 26 routes → 0 issues;
`npm run build` → 35 routes compiled successfully).

---

## Fixed

### Compliance
- **FCRA-sensitive copy softened** (per the new FCRA-AI-PROMPT-STANDARD gate):
  - Root site description — removed "fast, accurate" and non-existent services
    ("education verification, drug testing"); now FCRA-safe and accurate.
  - `/about` description — "accurate decisions fast" → "defensible, compliant
    screening decisions".
  - `/services` — "Instant turnaround / under 60 seconds" → "Fast database
    results … typically return in under a minute; most county searches complete
    the same day".
  - `/services/ssn-trace` — "Instant turnaround" → "Fast turnaround"
    (+ "typically" qualifier).
  - `/services/sex-offender-registry` — "Instant results" → "Fast results".
- **Broken `tel:` links fixed** (were `tel:+191\*\*\*\*7712` — masked placeholder
  shipped to 4 pages): `/compliance`, `/privacy`, `/dispute-resolution`, `/terms`
  → `tel:+19172757712`.

### SEO infrastructure (was entirely missing)
- **sitemap.xml** — new `app/sitemap.ts`: 33 URLs (24 static + 9 blog posts),
  no /admin, no /trust; Supabase-aware with static fallback.
- **robots.txt** — new `app/robots.ts`: Allow /, Disallow /admin, sitemap ref.
- **Web app manifest** — new `app/manifest.ts`.
- **Open Graph / Twitter / canonical** — added site-wide in root layout;
  blog posts upgraded (canonical, OG url/publishedTime/authors, twitter card).
- **OG image** — generated `public/assets/og-image.png` (1200×630, brand
  gradient + monogram + FCRA-safe tagline; `scripts/gen_og_image.py`).
- **Structured data (JSON-LD)** — was zero; now: Organization + WebSite
  (root), Service + BreadcrumbList + FAQPage on all 9 service pages (new
  `ServiceJsonLd` component), FAQPage on /faq, BlogPosting on every post.
- **H1 hierarchy** — 9 routes had no H1 (legal pages, /services, 2 tools):
  `SectionHeader` gained `as="h1"`; page heroes emit exactly one H1 per route.
- **/contact** — was inheriting homepage metadata; now has its own title/desc.
- **/admin** — was indexable with homepage metadata; now "Admin | Atlas
  Screening" + `noindex,nofollow,nocache`.
- **Blog 404 resilience** — `getPostBySlug` falls back to static seed posts
  when Supabase returns nothing (list already had the fallback; detail didn't).

### Engineering
- **Stale dev-server root cause fixed** — `next.config.ts` now pins
  `turbopack.root` (duplicate lockfiles were making Turbopack watch the wrong
  directory → newer routes 404'd until restart).
- **`middleware.ts` → `proxy.ts`** — migrated to the Next 16 proxy convention
  (removes deprecation warning; admin guard verified: /admin → /admin/login).
- **`public/assets/banner.mp4` (47 MB orphan) deleted** — unused asset (no
  references in code) that would have shipped to production.

## Added

- `docs/FCRA-AI-PROMPT-STANDARD.md` — mandated prompt templates (copy, SEO,
  blog, code), prohibited-claim rulebook, FCRA review gate, sourced references
  (FTC, CFPB, EEOC, HUD).
- `docs/SEO-AUDIT-2026-08-13.md` — full audit: findings, fixes, backlog.
- `docs/DESIGN-AUDIT-2026-08-13.md` — design system review + a11y backlog.
- `docs/SITEMAP.md` — IA map + sitemap inventory + "add a page" process.
- `CLAUDE.md` (repo root) — FCRA guardrails auto-loaded by AI agents (approved
  and placed 2026-08-13).
- `scripts/verify_seo.py` · `scripts/seo-audit-scan.py` · `scripts/crawl_audit.py`
  · `scripts/gen_og_image.py` — repeatable audit/generation tooling.

## Not changed (known pre-existing debt — documented, not fixed)

- `/trust` remains an intentional redirect to `/compliance`.
- "100% FCRA-compliant by design" stat on /how-it-works — flagged for counsel
  review (recommend dropping the "100%" framing).
- Hover-video `.mov` files not re-encoded (Chrome/Firefox playback risk).
- No analytics / Search Console / GSC setup (no account provided).
- Social profile links unverified (LinkedIn/X/FB/IG) — verify handles live.
- Design backlog D5–D11 in DESIGN-AUDIT (skip link, nav anchors, aria-labels,
  reduced-motion gaps, keyboard menu nav) — scheduled follow-up.
