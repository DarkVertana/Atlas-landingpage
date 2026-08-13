# Design Audit — Atlas Screening Website

**Date:** 2026-08-13 | **Method:** code-level review (tokens, components, markup,
a11y patterns) against DESIGN_SPEC.md; rendered verification of all routes.
**Verdict:** A disciplined, high-craft design system with strong consistency. The
issues found are structural (H1 hierarchy) and polish-level (a11y edge cases,
copy tone) — no visual redesign needed.

---

## 1. What's working well

### 1.1 Design tokens (globals.css) — excellent discipline
- Brand deep green `#01463A` + teal `#058B74` pair is cohesive and distinctive for
  a trust business; muted body `#5B6B64` reads well on white.
- The "curated accent set" (amber=premium, coral=human, sky=info, violet=AI) is
  used sparingly and meaningfully (floating chips in the hero: Identity verified
  = green, County records = sky, MVR = amber, Watchlist = violet) — exactly the
  "small pops only" rule from DESIGN_SPEC.
- Radius rhythm (`rounded-3xl` cards, `--radius-card` 1rem) and section rhythm
  (`py-20`/`py-24`) are applied consistently across pages.
- Typography: Geist (body) + Bricolage Grotesque (display headings) gives a
  memorable, non-default voice; `text-wrap: balance` on headings is a modern
  touch that prevents orphan lines.

### 1.2 Component system — genuinely shared
- `SectionHeader`, `Reveal`, `ServiceHero`, `LegalPage`, `FeatureGrid`,
  `CTASection` are reused across every page — the site *feels* like one product.
- Every interactive element carries `focus-visible:ring-2 ring-[#058B74]` —
  consistent, visible focus states (better than most agency sites).
- Primary CTAs use `min-h-[44px]` (touch-target compliant).
- Decorative elements are consistently `aria-hidden` / `pointer-events-none`;
  images carry descriptive alt text (0 missing across 16 images).

### 1.3 Hero & motion quality
- The homepage hero (WebGL Aurora + gradient + graticule rings + grain + contrast
  scrim + floating chips) is a legitimately premium execution; the scrim is a
  thoughtful legibility decision.
- `prefers-reduced-motion` is respected broadly (Reveal animations disabled,
  hero animations killed, `platform-visual-in` handled).
- The flip-word headline ("Background Screening, Defined by **Trust.**") with
  width-tracking is a strong signature motif.

### 1.4 Legal/compliance pages
- `LegalPage` gives every legal route a consistent hero + sticky "On this page"
  TOC — a model pattern for compliance content.
- Compliance copy quality is high (see FCRA pass) — CRA positioning, adverse
  action, dispute rights all present and well-written.

---

## 2. Issues found & fixed (this pass)

| # | Issue | Fix |
|---|---|---|
| D1 | **9 routes rendered without an H1** (legal pages, /services, both tools) — hero titles were `h2`, so page hierarchy started at H2 | `SectionHeader` gained `as="h1"`; page heroes now emit exactly one H1 per route (verified in crawl) |
| D2 | **Masked `tel:` links** on 4 legal pages (`tel:+191\*\*\*\*7712`) — broken tap-to-call | restored `tel:+19172757712` |
| D3 | **`/contact` missing metadata** — inherited homepage title/description | dedicated contact layout |
| D4 | **Admin pages indexable** — inherited homepage metadata | noindex layout + "Admin \| Atlas Screening" title |

---

## 3. Issues found — recommended follow-ups (not changed in this pass)

| # | Issue | Recommendation | Effort |
|---|---|---|---|
| D5 | **No skip-to-content link** — keyboard users tab through the fixed header + mega menu before content | add `<a href="#main" class="sr-only focus:not-sr-only">` at top of body; target `#main` on each page | S |
| D6 | **Desktop nav "Services/How it works/Resources/Pricing" hrefs are `#services` etc.** — on non-home pages these anchor to nothing | make them link to `/services`, `/how-it-works`, etc. (keep mega menus) | S |
| D7 | **Mobile menu button lacks `aria-label`** (screen readers announce nothing) | `aria-label="Open menu"` / `"Close menu"` | S |
| D8 | **`map-flow` / `map-node-pulse` animations missing from the reduced-motion block** in globals.css (all others are covered) | add to the `@media (prefers-reduced-motion: reduce)` block | S |
| D9 | **12px `text-[11px]/[12px]` labels in gray-400/500** (mega-menu section titles, footer meta) — small + mid-contrast; fine for meta, borderline for links | keep 12px for pure labels; ensure any *link* text ≥ 13px with gray-600+ | S |
| D10 | **Hero H1 "Trust. Trust." duplication** — the flip-word renders both the sizer and active word in static HTML (visual only, but crawlers/AT read it twice) | acceptable (aria-hidden already on sizer); optionally render initial word server-side only | S |
| D11 | **Header mega menu opens on hover + focus, closes on Escape** — good; but panel has no `role="menu"`/arrow-key nav | optional: add keyboard arrow navigation | M |
| D12 | **`/trust` is a bare redirect page** — no UI | intentional; keep (sitemap already excludes it) | — |
| D13 | **banner.mp4 (47 MB) orphan** in /public | delete or compress (§7 of SEO audit) | S |

---

## 4. Accessibility spot-check (rendered)

- ✅ One H1 per page, logical H2/H3 nesting
- ✅ All 16 images have alt text (decorative ones use `alt=""`)
- ✅ Focus rings on all interactive elements
- ✅ `min-h-[44px]` CTAs
- ✅ Reduced-motion support (broad)
- ✅ Landmarks: header/nav/footer/main present
- ⚠️ No skip link (D5), mobile button unlabeled (D7), menu keyboard nav basic (D11)

---

## 5. Visual identity notes (for the record)

- Color contrast: white on `#01463A` ≈ 13:1 (excellent); `text-white/60` on deep
  green ≈ 6:1 (passes AA); `text-gray-500` (#6b7280) on white ≈ 4.6:1 (AA for
  normal text); `text-[11px]` labels at gray-400 (~3:1) are decorative only.
- Bricolage at `text-[2rem]–[4rem]` for display headings: strong, confident —
  consistent across hero variants.
- The design system is coherent enough that new pages should be *built from
  components*, never restyled (CLAUDE.md enforces this for AI agents).

---

## 6. Verdict

The site does not need a redesign. It needs: (a) the H1/metadata fixes — **done**,
(b) the small a11y/polish backlog in §3 (D5–D9, roughly half a day), and (c)
the performance backlog in the SEO report (§7: video/asset weight). Priority
order for the backlog: D6 (nav anchors) → D5 (skip link) → D7/D8 (a11y) → D9.
