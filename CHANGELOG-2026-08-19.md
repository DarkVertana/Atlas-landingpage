
## Services restructure, dedicated pages, and deep-link screening flow

Restructured the services experience so every service has its own dedicated,
non-repeating page and a "Start screening" CTA that deep-links straight into the
Atlas Screening app's order flow with the service preselected. Also wired the
app to honor that deep link.

### Website (`Atlas-landingpage`)

- **New `app/lib/services.tsx`** — single source of truth for the service catalog
  (9 unique core/add-on services + continuous checks). Each entry owns its slug,
  copy, `detailHref` (its own `/services/<slug>` page), hero `image`, and `start`
  deep-link params. Removes the previous repetition where `identity-verification`
  and `county-court-searches` pointed at other services' pages (county is now
  described inside the criminal page).
- **New `app/lib/appUrl.ts`** — `NEXT_PUBLIC_APP_URL` (fallback
  `https://app.atlasscreening.com`) + `startScreeningHref(service)` helper →
  `<APP_URL>/order/new?service=<slug>[&reason=…]`. Added the env var to
  `.env.local.example`.
- **`app/services/page.tsx`** — rebuilt from the catalog, grouped into bands
  (Identity & criminal / Verifications & records / Property management / Ongoing).
  Tenant screening now reads under a Property-management framing. Each service
  card shows its unique hero image and a "Start screening" deep-link CTA.
- **`app/components/Header.tsx`** — removed the redundant "Property management"
  by-industry mega-menu item (tenant screening covers it); "Get Started" (desktop
  + mobile) now deep-links into the app order flow.
- **`ServiceHero` / `ServiceDetail`** — added an optional hero `image` backdrop
  and a built-in "Start screening" + "Talk to sales" CTA pair; all 9 service
  detail pages pass their image + `start` params. `continuous-checks` stays a
  sales CTA (subscription).
- **Images** — generated 10 unique, on-brand hero images (deep-green frosted-glass
  motifs, no text/faces/badges — FCRA-safe) via Magnific, converted to WebP at
  `public/assets/services/<slug>.webp`.
- FCRA review: copy kept conservative (database results separated from full
  report, no "instant/guaranteed/100%/complete" claims, Atlas positioned as CRA).

### App (`Atlas-Screening`)

- **`app/order/new/page.tsx`** — added a `SERVICE_PRESELECT` map and an effect
  that reads `?service=` / `?reason=` and preselects the matching base package +
  add-ons, so a customer arriving from the site lands straight in the subject
  form; the Checks step still lets them add more add-ons. No steps removed —
  reason/consent/review remain intact.
- **`app/signin/page.tsx` / `app/signup/page.tsx`** — honor a `next` param
  (internal paths only, guarded against open redirects) so a logged-out
  deep-link visitor returns to `/order/new?service=…` after authenticating.
  Wrapped signin in a Suspense boundary for `useSearchParams`.

### Verification

- Website: `npm run build` passes (all 10 `/services/*` routes prerendered);
  no new lint errors (3 pre-existing errors in untouched tenant/recommender files).
- App: `tsc --noEmit` passes; ESLint on changed files reports 0 errors.
- All 10 `/services/<slug>` routes already present in `sitemap.ts`.
