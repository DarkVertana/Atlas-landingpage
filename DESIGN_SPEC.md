# Atlas — Design language spec (match the landing page)

Every non-landing screen must feel like it belongs to the same site as the landing page.
This is a **polish & unify** pass: keep each page's existing structure and content,
but apply the landing page's design system. Do NOT invent new color schemes, fonts,
or rewrite copy.

## Tokens (already in globals.css — use these, never hardcode new hues)
- Brand deep green (headings, primary): `#01463A`  → var `--primary`
- Teal accent (eyebrows, links, focus rings): `#058B74` → var `--accent`
- Body text on light: `#5B6B64` (muted) ; on dark: `text-white/60`
- Surface tint: `#f0faf8` (`--surface`)
- Accent pops (tiny, meaningful only — never CTAs/backgrounds):
  amber `#F5A524` (premium), coral `#F2694E` (human), sky `#3E92CC` (info), violet `#8B7DE0` (AI/tech)
- Radius: cards use `rounded-3xl` (landing) or the `--radius-card` (1rem) rhythm. Be consistent.
- Section vertical rhythm: desktop ~`py-24`/`pt-28..40`, mobile lighter. Max width `max-w-6xl` for content, `max-w-2xl` for headers.

## Required shared components (import, don't reinvent)
- `SectionHeader` (`app/components/ui/SectionHeader.tsx`): every section's heading.
  Props: `eyebrow` (teal uppercase), `title` (display heading), `intro?`, `align "left"|"center"`, `tone "dark"|"light"` (light = white text on dark bg).
  USE THIS instead of ad-hoc `<p class="eyebrow">` + `<h2>` blocks.
- `Reveal` (`app/components/Reveal.tsx`): scroll-in animation wrapper.
  Props: `as`, `variant "up"|"fade"|"left"|"right"|"scale"`, `delay` (ms), `className`.
  Wrap section headers, cards, and grid items. Stagger grids with `delay={i * 80}`.
- Page metadata: keep existing `layout.tsx` / `metadata` exports untouched.

## Heading treatment
Headings use the display face automatically (globals `@layer base` sets font-display + tracking on h1/h2/h3).
Default heading color is `--primary`; on dark backgrounds add `text-white`.

## Hero pattern (for pages that have a hero)
The current legal/tool heroes use a flat `bg-gradient-to-b from-[#01463A] to-[#058B74]` + one blur blob.
Elevate to match landing richness WITHOUT changing the green identity:
- Keep the deep-green→teal gradient base.
- Add subtle depth: a faint dot/grid texture OR a second offset blur blob at low opacity, `pointer-events-none`.
- Use `SectionHeader` with `tone="light"` for the eyebrow/title/intro so type scale matches the rest of the site.
- Animate hero content in with `Reveal` (variant "up", small staggered delays) or the existing `hero-word` clip.
- Keep "Last updated · <date>" lines; style as `text-white/60 text-xs uppercase tracking-widest`.

## Cards / lists
- White cards on light: `rounded-3xl border border-gray-200` with `hover:border-gray-300` and a soft `shadow` on hover — matches AboutIntro.
- Interactive/selected states use teal (`ring-[#058B74]`, `border-[#058B74]`), focus-visible rings always present.
- Accent pops only as tiny badges/dots to signal meaning (e.g. "Popular" = amber).

## Motion & a11y
- All animation via `Reveal` + existing CSS keyframes. Respect the existing reduced-motion behavior.
- Every interactive element keeps `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74]`.

## Do / Don't
- DO reuse SectionHeader + Reveal everywhere; DO keep content/routes/metadata identical.
- DON'T add new dependencies, new fonts, new color hues, or rewrite legal/marketing copy.
- DON'T break `"use client"` requirements (Reveal/SectionHeader use hooks → the section using them must be a client component or Reveal used within one; SectionHeader/Reveal are already client components and can be imported into client or server pages that render them — but a server component can render a client component fine).
- Keep TypeScript strict; no `any` unless already present.
