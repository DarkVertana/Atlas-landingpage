# Changelog — 2026-08-31

## Performance: fix site freezing on low-end laptops

Client laptops were freezing on the site. A four-part audit (animations,
bundle, images, React runtime) found the causes and they were fixed. Gates:
`tsc --noEmit` clean, `npm run build` passes, `npm run lint` unchanged
(2 pre-existing admin warnings only).

### Always-running animations (biggest cause)
- **`app/components/reactbits/DotField.tsx`** — the canvas dot-field ran an
  uncapped 60fps `requestAnimationFrame` loop over thousands of dots
  **forever, even when scrolled off-screen** (mounted on home + tenant).
  Now: the loop is gated behind an `IntersectionObserver` (fully stops when
  off-screen), dot count is hard-capped (spacing auto-widens past ~2,600 dots),
  and the pointer rect is cached (updated on scroll/resize) instead of a layout
  read on every pointer move.
- **`app/components/reactbits/CardSwap.tsx`** — the GSAP swap interval now
  pauses when the deck scrolls out of view (previously only paused on hover).
- **`app/globals.css` + `app/components/HeroSection.tsx`** — reduced the hero's
  GPU-heavy blur stack: aurora blur 24→16px, curtains 34→20px and 52→26px, and
  the two mesh orbs 150→80px. (`mix-blend:screen` + large-radius blur is one of
  the most expensive compositor operations.)
- **`app/tenant/page.tsx`** — the full-bleed autoplay hero video now pauses when
  off-screen and doesn't autoplay under `prefers-reduced-motion`;
  `preload="auto"` → `"metadata"`.

### Bundle / initial JS
- **`app/components/Chrome.tsx`** — `ChatWidget` is now `next/dynamic` with
  `ssr:false` (interaction-only, below the fold).
- **`app/components/Header.tsx`** — `MobileStaggeredMenu` (and its GSAP
  dependency) is now lazy-loaded and only mounted after the first hamburger tap,
  removing GSAP from the initial JS of every page.
- **`app/page.tsx`** — `AIFeatures` (GSAP + canvas, below the fold) is
  code-split via `next/dynamic`.

### Images (decode-bombs)
- Downscaled **32 oversized `.webp` assets** to a 1800px max edge (quality 82),
  saving **~5.3 MB**. The worst offenders were shipped at absurd resolutions and
  displayed small — the browser had to decode the full image into RAM:
  - `Tenant-screening.webp` 7900×5269 (41 MP, 1.1 MB) → 1800×1201 (72 KB)
  - `founders.webp` 6500×4334 (28 MP, 1.0 MB) → 1800×1200 (160 KB)
  - plus MVR, SSN-trace, employment, banner_cta, services, soft-capture, etc.
- **`next.config.ts`** — added `images.formats: ["image/avif","image/webp"]`.

### Not changed (already well-built)
- Hero/DashboardPreview/Header scroll parallax are rAF-coalesced and
  IntersectionObserver-gated — left as-is.
- Dead `.jpg` twins in `public/assets/services*/` (~5 MB, unreferenced) were
  left in place; safe to delete later if desired.
