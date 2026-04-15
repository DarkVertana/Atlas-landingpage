import Link from "next/link";
import type { ReactNode } from "react";

type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  category: "Core check" | "Add-on";
  tagline: string;
  intro: string;
  features: string[];
  included: { title: string; desc: string; icon: ReactNode }[];
  useCases: string[];
  turnaround: string;
  priceFrom: string;
  detailHref: string;
  image: string;
  gradient: string;
};

const iconSearch = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const iconShield = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const iconDoc = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);
const iconBuilding = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M7 10v11M17 10v11M10 14h4v7h-4z" />
  </svg>
);
const iconCar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 13l2-5a2 2 0 012-1.5h10a2 2 0 012 1.5l2 5M3 13v5h2v-2h14v2h2v-5M3 13h18" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
  </svg>
);
const iconUser = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
  </svg>
);
const iconGlobe = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </svg>
);
const iconCredit = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </svg>
);
const iconHome = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-4v-6h-8v6H4a1 1 0 01-1-1v-9z" />
  </svg>
);
const iconClock = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const iconChat = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const services: Service[] = [
  {
    slug: "criminal-background-checks",
    name: "Criminal background checks",
    eyebrow: "Core check · Criminal",
    category: "Core check",
    tagline: "National, county, state, and federal records — in one compliant report.",
    intro:
      "Choose from Basic, Standard, or Premium tiers to evaluate candidate risk across every U.S. jurisdiction. We pull directly from the court of record, apply FCRA lookback rules automatically, and deliver a branded PDF that stands up to audit.",
    features: [
      "National criminal database (600M+ records)",
      "County-level court searches (7-year lookback)",
      "Statewide criminal repositories",
      "Federal criminal records across all 94 districts",
      "Sex offender registry — all 50 states + territories",
      "Automatic FCRA and state-specific filtering",
    ],
    included: [
      { title: "Court of record", desc: "Direct county and federal searches — no stale scraped data.", icon: iconBuilding },
      { title: "Adjudication matrix", desc: "Rules engine flags hits for human review with full audit trail.", icon: iconShield },
      { title: "Minutes, not days", desc: "National hits return instantly; most county searches same day.", icon: iconClock },
    ],
    useCases: [
      "General employment screening",
      "Roles requiring federal-level review",
      "Regulated industries (healthcare, finance, transport)",
    ],
    turnaround: "15 min – 3 business days",
    priceFrom: "$24.99",
    detailHref: "/services/criminal-background-checks",
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "ssn-trace",
    name: "SSN trace & address history",
    eyebrow: "Core check · Identity",
    category: "Core check",
    tagline: "The identity foundation every background report is built on.",
    intro:
      "Validate the candidate's Social Security Number, surface all aliases and prior names, and pull a complete residential history. SSN trace is how we decide which counties to search — skipping it makes every downstream check less accurate.",
    features: [
      "SSN format, issuance state, and validity check",
      "7-year address history from credit and public sources",
      "Known aliases and name variations",
      "Associated phone numbers and emails",
      "Death Master File cross-check",
      "Anchors county selection for criminal searches",
    ],
    included: [
      { title: "Identity anchor", desc: "Confirms the person is who they claim before anything else runs.", icon: iconUser },
      { title: "Alias discovery", desc: "Catches maiden names, spelling variations, and hyphenated surnames.", icon: iconSearch },
      { title: "Instant turnaround", desc: "Results typically return in under 60 seconds.", icon: iconClock },
    ],
    useCases: [
      "Every screening package (recommended baseline)",
      "Remote-hire verification",
      "Tenant screening identity checks",
    ],
    turnaround: "Under 60 seconds",
    priceFrom: "Included in all tiers",
    detailHref: "/services/ssn-trace",
    image: "/assets/images/SSN-trace-%26-address-history.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
  {
    slug: "employment-verification",
    name: "Employment verification",
    eyebrow: "Core check · Verification",
    category: "Core check",
    tagline: "Confirm titles, dates, and separation reasons directly with prior employers.",
    intro:
      "We contact past employers by phone, email, or approved verification networks to confirm what a candidate claimed on their résumé. Every verification attempt is logged with timestamp, method, and outcome — so you have proof, not assumptions.",
    features: [
      "Job titles and employment dates verified",
      "Reason for separation (where disclosable)",
      "Rehire eligibility status",
      "Compensation verification (permissible-purpose)",
      "Contractor and gig-work coverage",
      "International employer outreach",
    ],
    included: [
      { title: "Verified touchpoints", desc: "Phone, email, or approved verification networks — logged end-to-end.", icon: iconChat },
      { title: "Proof chain", desc: "Every contact attempt timestamped with method and outcome.", icon: iconDoc },
      { title: "Dispute-ready", desc: "Applicants can initiate dispute directly from their completed report.", icon: iconShield },
    ],
    useCases: [
      "Mid-senior professional hires",
      "Regulated roles requiring history proof",
      "Executive and fiduciary placements",
    ],
    turnaround: "1 – 3 business days",
    priceFrom: "$14.99 per employer",
    detailHref: "/services/employment-verification",
    image: "/assets/images/Employment-verification.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
  },
  {
    slug: "mvr",
    name: "Motor vehicle records",
    eyebrow: "Core check · Driving",
    category: "Core check",
    tagline: "State-by-state driving history for any role behind the wheel.",
    intro:
      "Pull authoritative driving records directly from state DMVs. We surface violations, license status, suspensions, accidents, and endorsements — critical data for fleet, delivery, gig, and transportation personnel.",
    features: [
      "Current license status and class",
      "Violations and traffic citations",
      "Accidents and collision history",
      "Suspensions, revocations, and restrictions",
      "CDL endorsements and medical certifications",
      "Continuous monitoring option for active drivers",
    ],
    included: [
      { title: "Direct DMV source", desc: "Authoritative state records — no aggregators or stale lists.", icon: iconCar },
      { title: "CDL-ready", desc: "Handles commercial driver's license rules and DOT obligations.", icon: iconShield },
      { title: "Continuous monitoring", desc: "Post-hire alerts when a new violation or suspension hits.", icon: iconClock },
    ],
    useCases: [
      "Fleet and logistics hiring",
      "Rideshare and delivery platforms",
      "Field-service and sales roles",
    ],
    turnaround: "Minutes to 24 hours",
    priceFrom: "$9.99 per state",
    detailHref: "/services/mvr",
    image: "/assets/images/Motor-vehicle-records.webp",
    gradient: "from-[#058B74] to-[#01463A]",
  },
  {
    slug: "sex-offender-registry",
    name: "Sex offender registry",
    eyebrow: "Core check · Sensitive roles",
    category: "Core check",
    tagline: "National registry search across all 50 states, DC, Guam, and U.S. territories.",
    intro:
      "Refreshed daily against every public state sex offender registry, plus the U.S. Department of Justice national database. Mandatory for childcare, education, elder-care, and home-services roles — and a best practice for any customer-facing position.",
    features: [
      "All 50 U.S. states + DC + territories",
      "DOJ National Sex Offender Public Website (NSOPW)",
      "Daily data refresh",
      "Offense details and conviction dates",
      "Tier-level classification where available",
      "Name, alias, and DOB matching logic",
    ],
    included: [
      { title: "Total coverage", desc: "Every U.S. state and territory in a single query.", icon: iconGlobe },
      { title: "Daily refresh", desc: "Caught the day a record is added — not a week later.", icon: iconClock },
      { title: "Sensitive-role ready", desc: "Built for childcare, education, and elder-care workflows.", icon: iconShield },
    ],
    useCases: [
      "Childcare and K-12 education",
      "Elder-care and home-health hiring",
      "In-home services and tenant screening",
    ],
    turnaround: "Under 60 seconds",
    priceFrom: "Included in Basic tier",
    detailHref: "/services/sex-offender-registry",
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "social-media-screening",
    name: "Social media inquiry",
    eyebrow: "Core check · Behavioral",
    category: "Core check",
    tagline: "FCRA-compliant review of public profiles — no protected-class data.",
    intro:
      "A trained analyst reviews only publicly visible profiles for content relevant to a permissible purpose — violent threats, drug-related posts, discriminatory content, or confidential-data leakage. Protected-class information is redacted before the report ever reaches you.",
    features: [
      "Public profiles only (LinkedIn, X, Facebook, Instagram, TikTok, Reddit)",
      "Human analyst review — no automated scraping",
      "Risk-relevant categories only",
      "Protected-class redaction built in",
      "Screenshot evidence with context",
      "Tailored policy matrices per customer",
    ],
    included: [
      { title: "Human analyst", desc: "FCRA-trained reviewer applies policy — no raw dumps.", icon: iconUser },
      { title: "Redaction layer", desc: "Protected-class content is removed before you see the report.", icon: iconShield },
      { title: "Evidence, not rumor", desc: "Every flag cites a specific public post with timestamp.", icon: iconDoc },
    ],
    useCases: [
      "Executive and public-facing roles",
      "Brand-sensitive positions",
      "Customer-trust-critical functions",
    ],
    turnaround: "1 – 2 business days",
    priceFrom: "$29.99",
    detailHref: "/services/social-media-screening",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
  },
  {
    slug: "tenant-screening",
    name: "Tenant screening",
    eyebrow: "Add-on · Real estate",
    category: "Add-on",
    tagline: "Criminal, credit, and eviction history — purpose-built for property managers.",
    intro:
      "Give your leasing team a single compliant report that covers everything a landlord needs: resident-grade criminal history, a soft-pull credit report, and a full eviction record search across nationwide databases.",
    features: [
      "Nationwide eviction history search",
      "Resident-grade criminal background check",
      "Soft-pull credit score and tradelines",
      "Rental payment history where available",
      "Landlord reference contact workflow",
      "Applicant-friendly mobile submission",
    ],
    included: [
      { title: "Landlord-ready", desc: "Every signal a leasing team needs on one compliant report.", icon: iconHome },
      { title: "Soft-pull credit", desc: "No impact to the applicant's credit score.", icon: iconCredit },
      { title: "Eviction coverage", desc: "Nationwide database of filings, judgments, and outcomes.", icon: iconBuilding },
    ],
    useCases: [
      "Multi-family property management",
      "Single-family rental portfolios",
      "Student and short-term housing",
    ],
    turnaround: "Same day (most applicants)",
    priceFrom: "$39.99",
    detailHref: "/services/tenant-screening",
    image: "/assets/images/Tenant-screening.webp",
    gradient: "from-[#0aa88a] to-[#01463A]",
  },
  {
    slug: "credit-report",
    name: "Credit report",
    eyebrow: "Add-on · Financial",
    category: "Add-on",
    tagline: "Permissible-purpose credit reporting for financial and fiduciary roles.",
    intro:
      "Atlas runs a compliant credit pull when a legitimate permissible purpose applies — finance, executive, fiduciary, or cash-handling roles. We enforce consent, state-level restrictions, and the correct reporting scope automatically.",
    features: [
      "Soft-pull reports with no credit-score impact",
      "Tradelines, balances, and payment history",
      "Public records (bankruptcy, liens, judgments)",
      "Collections and derogatory marks",
      "State-specific restrictions enforced automatically",
      "Clear permissible-purpose workflow",
    ],
    included: [
      { title: "Permissible purpose", desc: "The platform enforces valid use cases before the pull runs.", icon: iconShield },
      { title: "No score impact", desc: "Soft-pull only — never affects the applicant's credit score.", icon: iconCredit },
      { title: "State-aware", desc: "Bans, caps, and disclosure requirements applied per jurisdiction.", icon: iconDoc },
    ],
    useCases: [
      "Finance and accounting hires",
      "Executive and fiduciary roles",
      "Cash-handling and vault positions",
    ],
    turnaround: "Under 5 minutes",
    priceFrom: "$39.99",
    detailHref: "/services/credit-report",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "global-watchlist",
    name: "Global watchlist",
    eyebrow: "Add-on · Sanctions & PEP",
    category: "Add-on",
    tagline: "OFAC, sanctions, terrorist watchlists, and PEP screening in one query.",
    intro:
      "Mandatory for financial services and any role with international reach. Atlas screens against hundreds of government sanction lists, enforcement agencies, and politically exposed person databases — updated continuously.",
    features: [
      "OFAC and U.S. Treasury sanction lists",
      "UN, EU, and UK sanction lists",
      "Interpol wanted database",
      "PEP (Politically Exposed Persons) screening",
      "Adverse media screening option",
      "Continuous monitoring for active employees",
    ],
    included: [
      { title: "Global sanctions", desc: "Hundreds of lists from governments and enforcement bodies.", icon: iconGlobe },
      { title: "PEP coverage", desc: "Current and former officials, relatives, and known associates.", icon: iconUser },
      { title: "Continuous watch", desc: "Post-hire alerts when a new sanction or designation appears.", icon: iconClock },
    ],
    useCases: [
      "Financial services and fintech",
      "International operations",
      "Vendor and partner onboarding",
    ],
    turnaround: "Under 60 seconds",
    priceFrom: "$39.99",
    detailHref: "/services/global-watchlist",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
];

const faqs = [
  {
    q: "Which service should I start with?",
    a: "Most teams begin with the Standard criminal tier (which bundles SSN trace, national criminal, sex offender registry, and county search) plus employment verification. Use our cost calculator if you'd like a tailored recommendation.",
  },
  {
    q: "Can I mix and match services?",
    a: "Yes. Every core tier pairs with any combination of add-ons. You only pay per add-on when an applicant completes the check — no subscription, no commitment.",
  },
  {
    q: "Are all services FCRA compliant?",
    a: "Yes. Every Atlas service — including social media inquiry — enforces FCRA consent, disclosures, and adverse action workflows by default. Non-compliant use is not possible through the platform.",
  },
  {
    q: "How fast are results?",
    a: "SSN trace, national criminal, MVR, and watchlist checks typically return in under a minute. County criminal searches usually clear the same business day. Employment and education verifications take 1–3 business days depending on source responsiveness.",
  },
  {
    q: "What does 'per check' pricing include?",
    a: "The listed price covers a single applicant running a single check. Bundle pricing drops the effective per-check cost and is available at any volume — talk to sales for a tailored quote.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Every background check, fully detailed.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            From identity and criminal records to tenant screening, credit, and global
            watchlists — every Atlas service is FCRA-compliant, transparently priced,
            and built to work together.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-3 overflow-x-auto">
          <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#01463A] whitespace-nowrap">
            <span className="text-gray-400 pr-2">Jump to</span>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#058B74] hover:text-[#058B74] hover:bg-[#058B74]/5 transition-all"
              >
                {s.name.replace(" & ", " + ")}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-white">
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-40 px-6 py-20 ${
                i % 2 === 1 ? "bg-gradient-to-b from-white to-gray-50" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-6xl">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Copy column */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-[#058B74] bg-[#058B74]/10 ring-1 ring-inset ring-[#058B74]/15 px-2.5 py-1 rounded-full">
                        {s.category}
                      </span>
                      <span className="text-[11px] text-gray-400">
                        {s.eyebrow}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-[#01463A] leading-tight">
                      {s.name}.
                    </h2>
                    <p className="mt-3 text-base md:text-lg text-[#058B74] font-medium leading-snug">
                      {s.tagline}
                    </p>
                    <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-lg">
                      {s.intro}
                    </p>

                    {/* Meta strip */}
                    <dl className="mt-7 grid grid-cols-2 gap-4 max-w-md">
                      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                        <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                          Turnaround
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-[#01463A]">
                          {s.turnaround}
                        </dd>
                      </div>
                      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                        <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                          Starts at
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-[#01463A]">
                          {s.priceFrom}
                        </dd>
                      </div>
                    </dl>

                    {/* Feature bullets */}
                    <div className="mt-8">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74] mb-3">
                        What&apos;s included
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-[#01463A]"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#058B74"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="flex-shrink-0 mt-0.5"
                            >
                              <path d="M5 12l5 5 9-11" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use cases */}
                    <div className="mt-8">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74] mb-3">
                        Best for
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.useCases.map((u) => (
                          <span
                            key={u}
                            className="inline-flex items-center text-xs text-[#01463A] bg-white border border-gray-200 rounded-full px-3 py-1.5"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/signup?service=${s.slug}`}
                        className="inline-flex items-center gap-2 bg-[#01463A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#058B74] transition-all"
                      >
                        Run this check
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={s.detailHref}
                        className="inline-flex items-center gap-2 border border-gray-200 text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[#058B74] hover:text-[#058B74] transition-all"
                      >
                        Full details
                      </Link>
                    </div>
                  </div>

                  {/* Visual column */}
                  <div className="lg:sticky lg:top-32">
                    <div
                      className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${s.gradient} aspect-[4/3] shadow-xl shadow-[#058B74]/15`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/40 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
                        {s.category}
                      </div>
                    </div>

                    {/* Included cards */}
                    <div className="mt-5 grid sm:grid-cols-3 gap-3">
                      {s.included.map((b) => (
                        <div
                          key={b.title}
                          className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 transition-all"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10">
                            {b.icon}
                          </div>
                          <h3 className="mt-3 text-sm font-semibold text-[#01463A]">
                            {b.title}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Built-in benefits */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              Shipped with every service
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Compliance, security, and applicant tooling — included.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Every Atlas service inherits the same platform defaults. You never
              bolt on compliance or security as an afterthought.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "FCRA workflow",
                desc: "Timestamped consent, standalone disclosures, two-step adverse action — automated.",
              },
              {
                title: "Encrypted storage",
                desc: "Enterprise-grade encryption in transit and at rest with tokenized applicant links.",
              },
              {
                title: "Dispute resolution",
                desc: "Applicant-friendly self-serve dispute workflow with a one-business-day SLA.",
              },
              {
                title: "Dashboard & API",
                desc: "Invite applicants from the dashboard or integrate via REST API for scale.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#058B74]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                  <h3 className="text-sm font-semibold text-[#01463A]">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Service questions.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              What teams ask most before running their first check or adding an
              add-on to an existing package.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
                  <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/banner_cta.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, #01463A 30%, transparent 100%)",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Start<br className="hidden md:block" /> Screening?
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Sign up today and run any Atlas service for your organization —
                with transparent pricing, no contracts, and no setup fees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
