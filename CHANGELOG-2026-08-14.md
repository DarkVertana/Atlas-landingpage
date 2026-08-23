# Atlas Screening Website — Update & Fix Log

**Date:** 14 August 2026
**Scope:** FCRA compliance hardening · conversion-funnel fix · design/a11y backlog · mobile UX pass

---

## 0. Mobile UX pass (evening update)

| # | File | Issue | Fix | Verified |
|---|---|---|---|---|
| M1 | `app/contact/page.tsx` (input + textarea) | Inputs used `text-sm` (14px) — **below 16px → iOS Safari auto-zooms into the field on focus** (a top mobile UX complaint) | Bumped to `text-[16px]` on both the textarea and the shared `Field` input | `npm run build` ✅, `tsc` ✅ |
| M2 | `app/blog/BlogList.tsx` (newsletter email) | Same 14px input | → `text-[16px]` | build ✅ |
| M3 | `app/components/ChatWidget.tsx` (chat input) | Same 14px input | → `text-[16px]` | build ✅ |
| — | Mobile overflow audit | Checked all fixed-width decorative rings (Hero 560/900px, AIFeatures 820px, how-it-works 520px), chat panel (`max-w-[calc(100vw-3rem)]`), grids at 390px | All inside `overflow-hidden` wrappers or capped — **no horizontal scroll risk found** | code audit |
| — | Mobile menu + nav | Mobile menu items (Home/Services/How it works/Pricing/About/Contact) all use real paths; open/close buttons now labeled (D7, fixed earlier today) | — | code audit |

## 0b. Visual sweep — live browser audit (late evening)

Full browser pass (remote-debugged Chrome, desktop 1905px + mobile 390×844)
over all 12 core routes + 6 service sub-pages. **No issues found; no code
changes required.**

| Check | Result |
|---|---|
| Route health | 12 core routes + 6 service sub-pages all render; exactly 1 H1 per page; titles/descriptions present |
| Horizontal overflow | **None anywhere** — desktop and mobile (390px, scrollWidth == clientWidth on every route) |
| Mobile menu | Opens/closes cleanly; all items use real paths (`/services`, `/how-it-works`, `/pricing`…), no hash anchors; body scroll locked while open |
| Hero (home) | Strong layout, clear CTA hierarchy, badges in negative space; minor polish only (badge size, CTA spacing) |
| Pricing | 3-tier cards, "Most Popular" elevated correctly, high contrast — polished |
| How-it-works | Stats grid defensible: "50 states · County, state & federal" (coverage claim, not completeness), "FCRA · Compliant by design" (no "100%" absolute wording) — **passes the FCRA claim rulebook** |
| Contact form | All inputs/textarea at **16px** (M1 fix live — verified via computed styles) |
| Chat widget | Visible, unobtrusive, no overlap — desktop and mobile |
| Header nav | Mega-menu items render as `<button>` (aria-expanded, Escape closes) — the `href: "#services"` fields in `navLinks` are **vestigial dead code**, never rendered as anchors; no user impact (left as-is) |
| `/trust` | 307 → `/compliance` — intentional back-compat redirect, fine |

**Not changed (debt, zero user impact):** vestigial `href: "#services"` etc. on
mega-menu entries in `app/components/Header.tsx` (lines 112–115); `/trust`
redirect hop in the Resources mega-menu (could point straight at `/compliance`).

## 0c. Visual polish pass (post-sweep, per user request)

Applied the minor polish items surfaced by the sweep's vision audit. All
changes are CSS-only (no copy, no structure, no FCRA exposure) and verified by
`npm run build` ✅ + `npx tsc --noEmit` ✅ + live browser re-check.

| # | Where | What | Why |
|---|---|---|---|
| P1 | `app/components/HeroSection.tsx` (floating chips) | Standardized all 4 badges: uniform `px-4 py-2`, `text-[13px]`, dot/check icons same size (`h-3`/`h-5`) with a consistent `ring-2 ring-white/25` halo, border `white/20`, shadow tint | Chips were inconsistently sized (16px check circle vs 8px dots, 12px text) — read as slightly sloppy up close |
| P2 | Same (CTA row) | `mt-7` → `mt-8 sm:mt-9` | Breathing room between subtext and CTAs was tight |
| P3 | Same (secondary CTA) | `border-white/25 bg-white/5` → `border-white/40 bg-white/10`, hover `bg-white/15` | "See how it works" was too faint against the dark hero; still clearly secondary to the white primary |
| P4 | Same (graticule rings) | Ring opacity `0.06−i·0.009` → `0.09−i·0.012` | The "Atlas" coordinate motif was nearly invisible; now readable without shouting |
| P5 | `app/pricing/page.tsx` (tier cards) | White cards: `border-gray-200` → `border-gray-300` + layered soft shadow (`0_1px_2px_rgba(15,42,36,0.05), 0_10px_28px_-14px_rgba(15,42,36,0.14)`) | Basic/Premium cards blended into the gray section background; now crisply defined while the dark Standard card still dominates |
| P6 | `app/contact/page.tsx` (right panel) | Info panel wrapped in `lg:sticky lg:top-28` | On tall screens the form outran the "Say hello / support hours" panel; it now stays in view while the form scrolls |

**Deliberately not changed:** hero subtext copy (wrap nuance — FCRA-safe to leave),
dashboard-preview bottom fade (the straddle is a design choice), price/unit colors
(price is `text-[#01463A]` extrabold — high contrast; the audit model misread it),
chip vertical placement (symmetric by design).

## 0d. Full-page verification — all routes, both viewports

Complete pass over **all 26 public routes** (incl. a live blog post), desktop +
mobile (390×844):

| Check | Desktop | Mobile |
|---|---|---|
| Route renders (HTTP 200) | 26/26 | 26/26 |
| Exactly 1 H1 per page | 26/26 | 26/26 |
| No horizontal overflow | 26/26 | 26/26 |
| No broken images | 26/26 | 26/26 |
| Mobile menu button present | — | 26/26 |
| Reveal-on-scroll animations complete | 100% (all visible elements fire) | 100% (same) |

**Two environment issues found and resolved (not code defects):**

1. **Blog post page intermittently 500'd** — the dev server's internal
   `jest-worker` pool crashed ("Jest worker encountered 2 child process
   exceptions, exceeding retry limit"), a known Next.js dev-on-Windows/OneDrive
   flakiness. **Fix: restarted the dev server** (now Next 16.2.3, healthy).
   Page verified 200 + H1 present after restart. If it recurs, restart
   `npx next dev -p 3000` — production builds are unaffected.
2. **"Invisible content" during audit** — `visibilityState: hidden` (Chrome tab
   occluded) suspends IntersectionObserver callbacks, so every `Reveal` stayed
   at opacity 0 in my automation. Verified via `Page.bringToFront` +
   visibility-guarded re-runs: **reveals fire 100% whenever the tab is visible**
   (home 32/32, criminal-background-checks 32/32 desktop + 35/35 mobile). Real
   users are unaffected.

No code changes required from this sweep.

## 0e. Sloppiness hunt — picky-designer pass (per user request)

Repeated desktop (1440×900) + mobile visual audits with measurement
verification for every claim the vision model raised. **One real issue found
and fixed; every other flagged item was disproven by measurement or was an
audit artifact.**

| # | Finding | Verdict |
|---|---|---|
| S1 | **Hero CTA pair different heights** — "Get Started" 44px vs "See how it works" 46px (bordered button renders its 1px border outside the box) | 🔴 **REAL** — fixed: invisible `border-transparent` on the primary so both are 46px. Verified 46/46 in browser |
| — | "Floating chips asymmetric / dots misaligned" | ❌ Disproven: chip centers mirror-symmetric (±1px), every dot center == chip center to the pixel |
| — | "Pricing price/unit baseline off; cards uneven" | ❌ Disproven: `items-baseline` correct (price baseline 602 ≈ unit 601); all 3 cards exactly 467px |
| — | "Contact columns misaligned" | ❌ Disproven: both columns top at 462px |
| — | "Services sub-nav truncated / header spacing" | ❌ Disproven: all 5 tabs fully visible at 1440; header is `justify-between` by design |
| — | "Homepage content invisible" | ❌ Audit artifact: Chrome hidden-tab suspends IntersectionObserver (see §0d) |
| — | "Dashboard preview misalignments" | ❌ Static product screenshot (the app's own dashboard) — out of website scope |

**Gates:** `eslint` exit 0 · `tsc --noEmit` exit 0 · live browser re-measure
44→46px fix confirmed.

## 0f. CTA family unification (follow-up to §0e)

Second measurable inconsistency from the audits: **same "Get Started" button,
different corner radius depending on location** — hero used `rounded-xl`
(12px) while header + CTASection + ServiceDetail used `rounded-lg` (8px).

| # | File | Fix |
|---|---|---|
| S2 | `app/components/Header.tsx` (desktop CTA) | `rounded-lg` → `rounded-xl` |
| S3 | `app/components/CTASection.tsx` (primary + secondary) | `rounded-lg` → `rounded-xl` |
| S4 | `app/components/ServiceDetail.tsx` (primary + secondary) | `rounded-lg` → `rounded-xl` |

**Verified:** live re-measure — all CTAs across `/` and service sub-pages now
report `12px` radius (was mixed 8px/12px). Gates: `eslint` exit 0 · `tsc` exit 0.
MobileStaggeredMenu CTA was already `rounded-xl` — now consistent site-wide.

## FCRA review gate (run before this change shipped)

Per `docs/FCRA-AI-PROMPT-STANDARD.md` §4, every AI-generated item below was
reviewed against the claim rulebook before implementation:

- [x] No prohibited claim words introduced ("instant", "guaranteed", "100%",
      "complete", "all counties", "always", "error-free" as a promise, "exact match")
- [x] Atlas positioned as CRA; decisions attributed to the client
- [x] Permissible purpose + standalone disclosure + written authorization present
      where checks are described (new service-page note)
- [x] Adverse action described as the two-step process (pre-adverse → waiting
      period → final notice)
- [x] Dispute / reinvestigation path + compliance@atlasscreening.com reachable
- [x] Data-source caveat (third-party/public records; no completeness guarantee)
- [x] No unverifiable credentials or statistics added
- [x] Metadata/JSON-LD unchanged except removing a dead sameAs URL
- [x] Structured data restates page copy only

---

## 1. FCRA compliance fixes

| # | Where | Before | After | Why |
|---|---|---|---|---|
| 1 | `/how-it-works` stat band | `100%` · "FCRA-compliant by design" | `FCRA` · "Compliant by design" | "100% compliant" is a prohibited absolute claim (rulebook §2.1) — compliance is a process, not a percentage. Flagged 08-13 for counsel; now removed. |
| 2 | `/how-it-works` stat band | "Nationwide records coverage" | "Multi-jurisdiction record coverage" | "Nationwide records coverage" bordered the prohibited "complete coverage / all counties" family; new phrasing is accurate without implying exhaustive coverage. |
| 3 | **Service pages (all 9)** | Only generic "in accordance with the FCRA" line | New shared `FcraComplianceNote` component (rendered via `ServiceDetail` + `ServicePricing`) covering: CRA positioning, permissible purpose + disclosure + written authorization, two-step adverse action, dispute/reinvestigation path, data-source caveat | Required framing per rulebook §2.2 was missing from the product pages where checks are described. |
| 4 | `layout.tsx` JSON-LD `sameAs` | Included `https://twitter.com/atlasscreening` | Removed | Account returns 404 (verified live); dead profile in structured data is a broken signal. |

## 2. Conversion-funnel fix (critical)

**Every CTA on the site pointed to `/signup`, which does not exist → 404.**

| File | Before | After |
|---|---|---|
| `components/ServiceDetail.tsx` (default CTA + bottom CTA) | `/signup` | `/contact` |
| `components/ServicePricing.tsx` (3 tier CTAs + fallback) | `/signup?plan=basic/standard/premium` | `/contact?plan=…` |
| `services/page.tsx` (card CTA + bottom CTA) | `/signup?service=…`, `/signup` | `/contact?service=…`, `/contact` |
| `contact/page.tsx` (bottom CTA) | `/signup` | `#contact-form` (added `id="contact-form"` to the form) |

The product app's `NEXTAUTH_URL` is currently a dead Cloudflare tunnel, so
pointing CTAs at a real app URL is not possible yet; `/contact` is the honest,
working destination. When the product app is deployed, swap to its `/signup` URL.

## 3. Design / a11y backlog (from DESIGN-AUDIT-2026-08-13, D-items)

| Item | Fix |
|---|---|
| D5 — no skip link | Added "Skip to content" link in `Chrome.tsx` (sr-only until focused) + `id="main"` on all 16 public pages + `ServiceDetail` |
| D6 — "About" missing from desktop nav | Added `{ label: "About", href: "/about" }` to `navLinks` in `Header.tsx` |
| D7 — mobile menu button unlabeled | Added `aria-label` ("Open menu"/"Close menu") + `aria-expanded` |
| D8 — map animations missing from reduced-motion | Added `.map-flow`, `.map-node-pulse` to the `prefers-reduced-motion` block in `globals.css` |
| Dead social link | Removed X (Twitter) from footer (404 account) |

## 4. Verification (all passed)

- `npm run build` → **passed** (all routes compiled, Proxy middleware OK)
- `tsc --noEmit` → **0 errors**
- FCRA rendered re-scan: **no prohibited claims**; only compliant disclaimer
  phrasing remains ("does not guarantee … complete, current, or error-free")
- Broken-link sweep (home, pricing, services, service detail): **0 broken links**
  (only `/trust` → 307 redirect to `/compliance`, intentional)
- H1 audit: exactly **1 H1 per page** on all sampled routes
- Compliance note verified rendered on both `ServiceDetail`- and
  `ServicePricing`-based pages (all 9 service pages)
- Skip link + About nav link present in rendered HTML

## 5. Not changed (known debt, out of scope)

- `/trust` remains an intentional redirect to `/compliance`
- Hover-video `.mov` files not re-encoded (Chrome/Firefox playback risk)
- No analytics / Search Console (no account provided)
- LinkedIn handle unverifiable from this network (curl 999); left as-is
- Product-app signup URL pending a real deployment (see §2)

## 6. Lint-to-zero pass (late evening, per prod-readiness check)

Project lint was failing CI-style gates: **16 errors + 8 warnings**. All errors
and non-admin warnings cleared; gates re-verified. No compliance copy changed
(apostrophe fixes render byte-identical).

| # | File | Fix | Verified |
|---|---|---|---|
| L1 | `app/components/MobileStaggeredMenu.tsx` | Removed ref writes during render (`layersRef.current = []` / `itemsRef.current = []` → `react-hooks/refs` violation). Refs now populated by JSX callback refs during commit; array truncation to current list size moved inside the timeline effect; `colors.length` added to deps | lint ✅ tsc ✅ build ✅ live A/B (identical behavior vs pre-fix) ✅ |
| L2 | `app/components/reactbits/CountUp.tsx` | Removed synchronous `setState` in effect body (`react-hooks/set-state-in-effect`). Reduced-motion target now derived at render; effect skips animation when reduced-motion is active | lint ✅ tsc ✅ |
| L3 | `app/components/Aurora.tsx` | `let program; … program = …` → `const` (prefer-const); ternary expression statements → `if/else` (`no-unused-expressions` ×2); removed unused `speed` destructure | lint ✅ |
| L4 | `app/components/Industries.tsx` | API-snippet quotes wrapped in JSX expressions (`no-unescaped-entities` ×8); removed unused `useRef` import | lint ✅ |
| L5 | `app/compliance/page.tsx` + `app/client-certification/page.tsx` | Unescaped apostrophes → `&apos;` (`no-unescaped-entities` ×4); **rendered copy verified byte-identical** in live HTML | lint ✅ + rendered-HTML check ✅ |
| L6 | `app/services/page.tsx` | Removed unused `iconCar` / `iconGlobe` consts (`no-unused-vars` ×2) | lint ✅ |

**Gates (all run fresh):** `npx eslint .` → **0 errors, 2 warnings** (exit 0) ·
`npx tsc --noEmit` exit 0 · `npm run build` exit 0 · live smoke: `/`,
`/services`, `/compliance`, `/client-certification`, `/how-it-works`, `/pricing`
all 200 · browser (desktop + mobile 390px): no console errors, mobile menu
opens/closes, rendered compliance copy identical.

**Not changed (per repo rule + no user ask):** `app/admin/_components/PostsTable.tsx`
(2 warnings — `no-unused-expressions`, unused `prev`); CLAUDE.md forbids editing
`app/admin/**` unless asked.
