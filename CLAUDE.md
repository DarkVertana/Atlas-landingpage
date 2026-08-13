# CLAUDE.md — Atlas Screening Website (Atlas-landingpage)

## Mandatory context for ANY AI-assisted work in this repo

This is the marketing website for **Atlas Screening, a Consumer Reporting Agency (CRA)**.
Atlas produces consumer reports governed by the **Fair Credit Reporting Act (FCRA)**
(15 U.S.C. §1681 et seq.) and state screening laws. Every piece of content this site
publishes is regulatory-adjacent marketing.

**Before implementing anything AI-generated (copy, metadata, JSON-LD, blog posts, FAQ
answers, error messages, email templates): review it against FCRA compliance first.**
If a change touches consumer-facing claims, run the checklist in section 3 below and
note the review in your summary. When in doubt, keep the claim conservative.

> Full prompt templates, the claim-by-claim rulebook, and the source list live in
> `docs/FCRA-AI-PROMPT-STANDARD.md`. Load that file before generating any copy.

---

## 1. The non-negotiables (never violate these)

1. **No absolute accuracy/coverage guarantees.** Never write "instant", "guaranteed
   accurate", "100% accurate", "complete records", "all counties", "always",
   "error-free", or "exact match" in marketing copy. FCRA requires CRAs to use
   "reasonable procedures to assure maximum possible accuracy" — marketing may
   describe those procedures, never claim perfect results.
2. **No "instant background check" framing.** Database hits can be fast; the complete
   report is not instant. Separate "database results" from "the full report".
3. **Always preserve the CRA position.** Atlas provides reports; **Atlas does not make
   hiring decisions** (clients do). Never imply Atlas decides outcomes.
4. **Permissible purpose + consent always.** Any copy about ordering a check must
   include/respect: lawful permissible purpose, standalone disclosure, and written
   authorization. Never suggest checks can run without consent.
5. **Adverse action is a client duty Atlas supports.** Pre-adverse notice (report +
   Summary of Consumer Rights + wait period) then final adverse-action notice.
   Never suggest an employer can reject based on a report without this process.
6. **Consumer rights stay visible.** Dispute/reinvestigation path, free report
   rights, and contact for disputes (compliance@atlasscreening.com) must remain
   reachable from the site.
7. **State law matters.** Credit-based employment decisions are restricted in ~11
   states; ban-the-box/fair-chance rules vary. Copy must not promise nationwide
   uniformity where law varies.
8. **No fabricated compliance credentials.** Never claim certifications (SOC 2,
   PBSA, etc.) unless verified by the company. Never invent data sources, "1,000+
   sources" style stats, or customer counts.
9. **AI-assisted decisions copy must stay honest.** Atlas may use AI to *find and
   organize records*; humans adjudicate. Never claim AI "decides" or "scores"
   applicants in a way that evades the FCRA/EEO framework.

## 2. Required elements when writing screening-related copy

When generating ANY page/block about a screening service, include or preserve:

- CRA positioning line (footer already has it — reuse the phrasing)
- FCRA-compliant framing ("conducted in accordance with the FCRA and applicable
  state laws")
- Turnaround language that separates database results from verified/complete reports
- The adverse-action support flow (pre-adverse → waiting period → final notice)
- The dispute path (compliance@atlasscreening.com)
- No-guarantee-of-accuracy qualifier on data sourced from third parties/public
  records (the Terms already carry this language — mirror it)

## 3. FCRA review checklist — run before every AI-generated content merge

- [ ] No prohibited claim words (see section 1.1) anywhere in the new text
- [ ] No "instant background check" implications
- [ ] Atlas positioned as CRA; decisions attributed to clients
- [ ] Consent/disclosure/permissible-purpose preserved or present where checks are described
- [ ] Adverse-action process described correctly (two-step, waiting period)
- [ ] Dispute/reinvestigation rights referenced on consumer-facing pages
- [ ] No unverifiable credentials, certifications, or statistics
- [ ] No AI "decision-maker" framing
- [ ] Metadata (title/description/OG) also passes the above (claims in metadata
      are claims too)
- [ ] JSON-LD structured data contains no claims beyond what the page copy says
- [ ] State-law variation acknowledged where relevant (credit checks, ban-the-box,
      tenant screening)

## 4. Prompting rules for AI agents

Every prompt you give an AI for this repo MUST include one of these two blocks.

**Block A (any content task):**
> "This is FCRA-regulated marketing for Atlas Screening, a Consumer Reporting
> Agency. Do not use words like 'instant', 'guaranteed', '100% accurate',
> 'complete', 'all records', 'error-free', or similar absolute claims. Atlas
> provides consumer reports; employers make decisions. Preserve consent,
> permissible-purpose, adverse-action, and dispute-rights language. Keep claims
> conservative and defensible."

**Block B (any code/SEO task):**
> "Do not alter compliance copy, disclosure language, or legal pages except for
> factual corrections. New metadata must not make absolute accuracy/speed claims.
> Structured data must only restate existing page copy."

## 5. Route/tech facts AI agents need

- Next.js 16 (App Router, Turbopack), React 19, Tailwind 4. `npm run dev` /
  `npm run build` / `npm run lint`.
- Domain: `https://atlasscreening.com` (metadataBase in `app/layout.tsx`).
- Auth guard: `proxy.ts` (Next 16 proxy convention; do not rename back to
  `middleware.ts`).
- Blog posts: static seed in `app/lib/posts.ts`; Supabase-backed via
  `app/lib/blog.ts` with static fallback (keep the fallback).
- Design system: `DESIGN_SPEC.md` + tokens in `app/globals.css`. Use
  `SectionHeader`, `Reveal`, `ServiceHero`, `LegalPage`. H1 rules: exactly one
  H1 per page — page heroes pass `as="h1"` to `SectionHeader`.
- SEO infra: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`,
  `public/assets/og-image.png`. New public routes must be added to `sitemap.ts`.
- Do NOT edit `app/admin/**` unless asked; keep `/admin` noindexed.
- Hosting: host root directory must be `Atlas-landingpage` (nested repo).

## 6. Verification expectations

- After changes: `npm run build` must pass.
- Re-run the checks in `scripts/verify_seo.py` (needs `npm run dev` running)
  for SEO regressions.
- Document user-visible fixes in a dated `CHANGELOG-YYYY-MM-DD.md` at repo root.
