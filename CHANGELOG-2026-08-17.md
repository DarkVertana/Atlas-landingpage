# Atlas Screening Website — Update & Fix Log

**Date:** 17 August 2026
**Scope:** Homepage hero section — professionalization pass

---

## Hero section redesign — precision over decoration

| # | File | Issue | Fix | Status |
|---|---|---|---|---|
| H1 | `app/components/HeroSection.tsx` | Hero stacked six competing effects (WebGL aurora, target rings, grain, floating blobs, flip-words, scroll parallax) with **no product/credibility anchor** — read as template-generated, not a compliance brand | Removed rings, grain, floating blobs from the background stack. Kept the Aurora WebGL glow + deep-green gradient + flip-word headline (the hero's signature). Added a faint precision dot-grid (SPEC-approved depth motif) so the canvas reads as secure software. Expanded headline scale to Littlebird-style (up to `5.5rem` desktop), tightened line-height/tracking. Trust row converted to plain text + thin hairline separators — **no pills, no badges** (client requirement). Refined scroll parallax into clean two-layer depth (background drifts slower than copy) | `npm run build` ✅ |
| H2 | `app/components/HeroSection.tsx` | Nature video (`public/assets/nature_mp4.mp4`) tested as hero backdrop per request — visual audit showed it read as "wellness/lifestyle" (Littlebird-style), **not screening software** | **Removed from hero.** Competitor audit (Checkr, First Advantage, GoodHire, Sterling) confirmed zero screening brands use organic nature footage in the hero — buyers of FCRA-regulated screening buy precision and control. Video retained in `public/assets/` for a warmer (About/Contact) section if desired | `npm run build` ✅ |
| H3 | `app/globals.css` (restored) | — | Dead hero-motion keyframes (flip/float/word/shimmer/sheen/mesh/marquee/cue) were identified but **left intact** — removal reverted with the hero restoration to avoid collateral damage; cleanup can follow as its own task | — |
| H4 | `app/components/HeroSection.tsx` | Headline **reflowed between 3↔4 lines** every flip: the accent slot was sized to the *current* word, so the H1 line-wrap shifted on each word change | **Fixed:** slot now locked to the **widest** word ("Compliance.") — all words measured once on mount + resize, slot width constant, word flips inside a fixed slot. Flip word upgraded to `font-semibold` + stronger glow (36px, 0.5 alpha) so it reads as the standout. Verified in browser: slot width 505.16px identical for Trust/Accuracy/Compliance; line layout constant | `npm run build` ✅, browser-verified |
| H5 | **Claude Code delegation round** — `app/components/HeroSection.tsx`, `Aurora.tsx`, `globals.css` | Hero title too large (max 5.5rem), flip word baseline misaligned + glow clipped by `overflow-hidden`, client-reported page lag | **Executed by Claude Code (42 turns, $4.03 on office Max plan), independently verified + corrected by me:** ① Title downsized `5.5rem → 3.75rem` (text-4xl→lg:text-6xl), leading 1.07, centered both axes ② Flip word: removed `overflow-hidden`/`align-bottom` → `align-baseline`, no clipping, same baseline as white text; softened flip keyframes to `±0.5em` (no spill) ③ Perf: Aurora DPR capped at 1 + ~30fps shader throttle (halves GPU cost, invisible on soft wash), scroll-parallax rAF gated by IntersectionObserver + only-while-scrolling, `will-change` limited to the 2 transform layers ④ Logo + chat avatar alignment verified correct — untouched ⑤ **Spec violation caught & fixed by me:** agent recolored canvas to off-brand ink/teal — reverted to brand hues (gradient `#0a6b54→#020c08`, Aurora stops `#12f0c0/#38b6ff/#a86bff`, flip word `#3EE8BE`) | `npm run build` ✅ (mine, not agent's — its build calls were permission-denied), browser-verified: 60px centered 2-line headline, slot 346.97px stable, baseline aligned |

## FCRA compliance gate (per `docs/FCRA-AI-PROMPT-STANDARD.md`)

Hero text is unchanged from the previously approved copy — no new claims introduced, no absolute accuracy/speed language, no fabricated credentials. Eyebrow, headline, subhead, CTA labels, and trust row all pass the static scan. ✔

## Research basis (live audit, 2026-08-17)

- **Checkr** — benefit-led headline, product UI in frame, two CTAs
- **First Advantage / Sterling** — outcome + trust framing, clean two-column
- **GoodHire** — benefit headline + social proof + product visual
- **Littlebird.ai** — full-screen calm canvas, one giant headline, zero decoration noise