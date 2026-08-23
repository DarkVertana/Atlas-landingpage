
## Atlas Tenant microsite (/tenant)

Added a dedicated, standalone tenant-screening microsite modeled on
tenant.checkr.com (functional model) with a littlebird.ai-inspired look.

Files:
- `app/tenant/page.tsx` — microsite: own header/footer, video-background hero,
  animated order mockup + floating satellite cards, "who it's for", "what you
  get" (5 checks), interactive package builder (Starter/Essential/Complete +
  add-ons with live running total), how-it-works, FAQ, CTA, FCRA footer note.
- `app/tenant/OrderMockup.tsx` — looping, reduced-motion-aware mockup that
  animates a tenant screening order being created (intake -> package -> checks
  clearing live -> report ready) using Atlas UI language.
- `app/tenant/layout.tsx` — route metadata (canonical /tenant).
- `app/components/Chrome.tsx` — /tenant gets its own shell (like /admin).
- `app/globals.css` — tenant-float / tenant-rise keyframes (butter-smooth,
  reduced-motion disabled).
- `app/sitemap.ts` — /tenant added.

Video: reuses public/assets/nature_mp4.mp4 tinted with the Atlas green gradient.
Tiers: Starter $24.99 / Essential $34.99 / Complete $44.99, add-ons stack.

FCRA: copy kept conservative — separates database results from the verified
report, no "instant/guaranteed/complete-records" claims, CRA positioning,
consent/permissible-purpose, adverse-action + dispute path preserved.

Gate: `npm run build` — compiled successfully, /tenant prerendered static.

---

## Site-wide mobile responsiveness pass (375–768px)

Systematic mobile polish across every page and component. Mobile-first only:
every existing desktop value was preserved behind `sm:`/`md:` breakpoints, so
desktop rendering is unchanged. **No copy, headings, metadata, JSON-LD, or
compliance/legal language was altered** (FCRA content left intact) — changes are
purely layout/spacing/typography-size classNames and responsive wrappers.

### Shared primitives (cascade across many pages)
- `ui/ServiceHero.tsx` — hero clearance `pt-36 pb-20 px-6` → mobile
  `pt-28 pb-16 px-5` (desktop kept). Covers all 10 service pages.
- `ServiceDetail.tsx`, `ServicePricing.tsx`, `ui/FeatureGrid.tsx` — content
  sections `py-20` → `py-14 sm:py-20`; pricing cards `p-8` → `p-6 sm:p-8`.
- `LegalPage.tsx` — hero + body mobile padding (covers privacy/terms/compliance/
  client-certification/dispute-resolution which render through it).

### Homepage components
- `HowItWorks`, `Industries`, `AIFeatures`, `WorkflowSteps`, `AboutIntro`,
  `CTASection`, `FAQ` — section padding `px-4 py-24` → `px-5 py-16` on mobile
  (desktop `sm:py-32` preserved). AIFeatures h2 `2.4rem` → `2rem` on mobile.
- `DashboardPreview`, `ProductShowcase` — smaller mobile h2, `px-5` base.

### Navigation / chrome
- `Header.tsx` — 44px tap targets on logo and hamburger (h-11 w-11).
- `MobileStaggeredMenu.tsx` — scrollable nav (`overflow-y-auto`), larger link
  tap targets (`py-3`), item text `2rem` → `4xl` above 380px to avoid overflow,
  panel padding `px-8` → `px-6`.
- `Footer.tsx` — column grid gaps `gap-10` → `gap-x-6 gap-y-8 md:gap-10`;
  bottom bar `whitespace-nowrap` → `flex-wrap` so it never overflows at 360px.

### Pages
- Deep-green gradient heroes (about, contact, faq, blog, pricing, services,
  cost-calculator, package-recommender) — `pt-36 pb-20 px-6` →
  `pt-28 pb-16 px-5` on mobile.
- `pricing/page.tsx` — comparison table wrapped in `overflow-x-auto` +
  `min-w-[560px]` to eliminate horizontal page overflow on mobile.
- `how-it-works/page.tsx` — hero and content-section mobile padding.
- `tenant/page.tsx`, `tenant/Sections.tsx`, `tenant/OrderMockup.tsx` — section
  padding `px-6 py-24` → `px-5 py-16 sm:py-24`; hero H1 `text-5xl` → `2.25rem`
  base; mockup card `max-w-full` so it can't force horizontal scroll.
- `blog/[slug]/page.tsx` — hero + article-body mobile padding.
- `not-found.tsx` — reduced oversized `pt-56 pb-40` on mobile.
- Service subpages (criminal, employment-verification, mvr, ssn-trace,
  sex-offender-registry, social-media-screening) — FAQ/content section padding;
  CourtDepthStack `grid-cols-4` diagram is `hidden lg:block` (mobile uses a
  stacked list), so no overflow.
- `ThreeDSections.tsx`, `FcraComplianceNote.tsx` — mobile section padding.
- `reactbits/*` — reviewed; no changes needed (fill parent, no fixed widths).

### Gate
- `npx tsc --noEmit` — exit 0, no type errors.
