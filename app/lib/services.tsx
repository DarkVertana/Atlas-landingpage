import type { ReactNode } from "react";
import type { StartParams } from "./appUrl";

// ─────────────────────────────────────────────────────────────────
// Single source of truth for the Atlas service catalog.
//
// Consumed by the services listing page and (for slugs/labels) the header
// mega-menu. Every service maps to its OWN dedicated `/services/<slug>` page —
// no two services share a page. `start` carries the deep-link params the app's
// `/order/new` flow reads to preselect a package + add-ons; services without
// `start` (e.g. continuous checks — a subscription) route to sales instead.
//
// FCRA note: copy here is regulated marketing. No "instant / guaranteed /
// 100% / complete / all records" claims; Atlas provides reports, clients decide;
// database results are separated from the full report.
// ─────────────────────────────────────────────────────────────────

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  category: "Core check" | "Add-on";
  /** Grouping band on the services page. */
  group: "Identity & criminal" | "Verifications & records" | "Property management" | "Ongoing";
  tagline: string;
  intro: string;
  features: string[];
  included: { title: string; desc: string; icon: ReactNode }[];
  useCases: string[];
  turnaround: string;
  priceFrom: string;
  priceNote?: boolean;
  detailHref: string;
  image: string;
  /** Deep-link params into the app order flow; omit for sales-only services. */
  start?: StartParams;
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
const iconUser = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
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
const iconCar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13m-14 0h14m-14 0v4h2m10-4v4h2m-14 0v1m14-1v1M7 16h.01M17 16h.01" />
  </svg>
);
const iconGlobe = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z" />
  </svg>
);

export const services: Service[] = [
  {
    slug: "criminal-background-checks",
    name: "Criminal background checks",
    eyebrow: "Core check · Criminal",
    category: "Core check",
    group: "Identity & criminal",
    tagline: "National, county, state, and federal records in one compliant report.",
    intro:
      "Choose from Basic, Standard, or Premium tiers to evaluate candidate risk across U.S. jurisdictions. We pull directly from the court of record, apply FCRA lookback rules automatically, and deliver a branded PDF that stands up to audit. County-level searches are included and described in full on this service's page.",
    features: [
      "National database pointer search",
      "County court searches (7-yr lookback)",
      "Statewide criminal repositories",
      "Federal records, all 94 districts",
      "Sex offender registry, all states",
      "Automatic FCRA + state filtering",
    ],
    included: [
      { title: "Court of record", desc: "Direct county and federal court searches.", icon: iconBuilding },
      { title: "Adjudication matrix", desc: "Hits flagged for human review, fully logged.", icon: iconShield },
      { title: "Database vs. report", desc: "Database pointers return fast; county results follow.", icon: iconClock },
    ],
    useCases: [
      "General employment screening",
      "Roles requiring federal-level review",
      "Regulated industries (healthcare, finance, transport)",
    ],
    turnaround: "Database results in minutes; County 1–3 business days",
    priceFrom: "$24.99",
    detailHref: "/services/criminal-background-checks",
    image: "/assets/services/criminal-background-checks.webp",
    start: { service: "criminal-background-checks" },
  },
  {
    slug: "ssn-trace",
    name: "SSN trace & identity",
    eyebrow: "Core check · Identity",
    category: "Core check",
    group: "Identity & criminal",
    tagline: "The identity foundation every background report is built on.",
    intro:
      "Validate the subject's Social Security Number, surface aliases and prior names, and assemble a residential history. The SSN trace is how we decide which counties to search, and skipping it makes every downstream check less accurate.",
    features: [
      "SSN format, issuance state, and validity",
      "Address history from credit and public sources",
      "Known aliases and name variations",
      "Associated phone numbers and emails",
      "Death Master File cross-check",
      "Anchors county selection for criminal search",
    ],
    included: [
      { title: "Identity anchor", desc: "Confirms identity before anything else runs.", icon: iconUser },
      { title: "Alias discovery", desc: "Catches maiden names and name variations.", icon: iconSearch },
      { title: "Fast database results", desc: "Database pointers return fast; full report follows.", icon: iconClock },
    ],
    useCases: [
      "Every screening package (recommended baseline)",
      "Remote-hire verification",
      "Tenant screening identity checks",
    ],
    turnaround: "Database results in under 60 seconds",
    priceFrom: "Included in all tiers",
    priceNote: true,
    detailHref: "/services/ssn-trace",
    image: "/assets/services/ssn-trace.webp",
    start: { service: "ssn-trace" },
  },
  {
    slug: "sex-offender-registry",
    name: "Sex offender registry",
    eyebrow: "Core check · Registry",
    category: "Core check",
    group: "Identity & criminal",
    tagline: "Every state registry, DC, and U.S. territories, searched in parallel.",
    intro:
      "A nationwide registry sweep across all 50 state registries, the NSOPW federal database, and every U.S. territory. Purpose-built for roles where the stakes are highest, with potential matches confirmed before they reach your report.",
    features: [
      "All 50 state registries plus DC",
      "NSOPW federal database",
      "Guam and U.S. territories",
      "Name and alias matching",
      "Analyst-reviewed potential matches",
      "Refreshed on a recurring schedule",
    ],
    included: [
      { title: "Nationwide sweep", desc: "State, federal, and territory registries in one search.", icon: iconShield },
      { title: "Verified matches", desc: "Potential hits analyst-reviewed before you see them.", icon: iconUser },
      { title: "Fast database results", desc: "Registry searches return in minutes.", icon: iconClock },
    ],
    useCases: [
      "Roles working with children or vulnerable adults",
      "Volunteer and nonprofit screening",
      "Any position requiring a registry sweep",
    ],
    turnaround: "Database results in minutes",
    priceFrom: "Included in all tiers",
    priceNote: true,
    detailHref: "/services/sex-offender-registry",
    image: "/assets/services/sex-offender-registry.webp",
    start: { service: "sex-offender-registry" },
  },
  {
    slug: "global-watchlist",
    name: "Global watchlist",
    eyebrow: "Add-on · Sanctions & PEP",
    category: "Add-on",
    group: "Verifications & records",
    tagline: "OFAC, PEP, terror, and sanctions databases across global sources.",
    intro:
      "Screen against OFAC, politically-exposed-person lists, terror lists, and sanctions databases drawn from a wide range of global sources. Required for many regulated industries and recommended for international or executive hires.",
    features: [
      "OFAC and Treasury sanctions lists",
      "Politically exposed persons (PEP)",
      "Global terror and most-wanted lists",
      "International sanctions databases",
      "Name and alias matching",
      "Analyst-reviewed potential matches",
    ],
    included: [
      { title: "Global coverage", desc: "Domestic and international watchlists in one search.", icon: iconGlobe },
      { title: "Verified matches", desc: "Potential hits reviewed before they reach you.", icon: iconShield },
      { title: "Fast database results", desc: "Watchlist searches return in minutes.", icon: iconClock },
    ],
    useCases: [
      "Regulated finance and banking",
      "International or cross-border hires",
      "Executive and fiduciary placements",
    ],
    turnaround: "Database results in minutes",
    priceFrom: "$39.99",
    detailHref: "/services/global-watchlist",
    image: "/assets/services/global-watchlist.webp",
    start: { service: "global-watchlist" },
  },
  {
    slug: "mvr",
    name: "Motor vehicle records",
    eyebrow: "Add-on · Driving",
    category: "Add-on",
    group: "Verifications & records",
    tagline: "License status, violations, and CDL detail, direct from the DMV.",
    intro:
      "State-by-state driving history for fleet, delivery, gig, and any role behind the wheel. License status, violations, accidents, and CDL endorsements, with optional continuous monitoring for drivers you've already hired.",
    features: [
      "License status and class",
      "Moving violations and citations",
      "At-fault accident history",
      "CDL endorsements and restrictions",
      "State-by-state DMV sourcing",
      "Optional continuous driver monitoring",
    ],
    included: [
      { title: "DMV-sourced", desc: "Pulled from state DMVs, not aggregators.", icon: iconCar },
      { title: "CDL support", desc: "Commercial endorsements and restrictions surfaced.", icon: iconDoc },
      { title: "Monitor over time", desc: "Enroll active drivers for recurring re-checks.", icon: iconClock },
    ],
    useCases: [
      "Fleet and delivery drivers",
      "Gig and rideshare roles",
      "Any position that drives on the job",
    ],
    turnaround: "1 – 3 business days (varies by state)",
    priceFrom: "$19.99",
    detailHref: "/services/mvr",
    image: "/assets/services/mvr.webp",
    start: { service: "mvr" },
  },
  {
    slug: "employment-verification",
    name: "Employment verification",
    eyebrow: "Add-on · Verification",
    category: "Add-on",
    group: "Verifications & records",
    tagline: "Confirm titles, dates, and separation reasons with prior employers.",
    intro:
      "We contact past employers by phone, email, or approved verification networks to confirm what a candidate claimed on their résumé. Every verification attempt is logged with timestamp, method, and outcome, so you have proof, not assumptions.",
    features: [
      "Job titles and dates verified",
      "Reason for separation (where disclosable)",
      "Rehire eligibility status",
      "Compensation (permissible-purpose)",
      "Contractor and gig-work coverage",
      "International employer outreach",
    ],
    included: [
      { title: "Verified touchpoints", desc: "Phone, email, or approved networks, fully logged.", icon: iconChat },
      { title: "Proof chain", desc: "Each attempt timestamped with method and outcome.", icon: iconDoc },
      { title: "Dispute-ready", desc: "Applicants can dispute from their completed report.", icon: iconShield },
    ],
    useCases: [
      "Mid-senior professional hires",
      "Regulated roles requiring history proof",
      "Executive and fiduciary placements",
    ],
    turnaround: "1 – 3 business days",
    priceFrom: "$14.99 per employer",
    detailHref: "/services/employment-verification",
    image: "/assets/services/employment-verification.webp",
    start: { service: "employment-verification" },
  },
  {
    slug: "credit-report",
    name: "Credit report",
    eyebrow: "Add-on · Financial",
    category: "Add-on",
    group: "Verifications & records",
    tagline: "Employment-purpose credit data for roles where it matters.",
    intro:
      "Employment-purpose credit reports for financial, fiduciary, and executive hires. A soft inquiry, with no impact to the applicant's score, plus permissible-purpose verification and state-law gating applied automatically.",
    features: [
      "Employment-purpose soft pull",
      "Payment history and delinquencies",
      "Bankruptcies, liens, and civil judgments",
      "State-law gating (11 states restricted)",
      "Permissible-purpose audit trail",
      "Adverse-action workflow pre-filled",
    ],
    included: [
      { title: "Soft inquiry", desc: "No impact to the applicant's credit score.", icon: iconCredit },
      { title: "State-law gating", desc: "Non-compliant pulls blocked by location.", icon: iconShield },
      { title: "Scoped to the role", desc: "Used only where it's a documented requirement.", icon: iconDoc },
    ],
    useCases: [
      "Finance, treasury, and accounting roles",
      "Fiduciary and executive placements",
      "Positions handling cash or contracts",
    ],
    turnaround: "Database results in minutes",
    priceFrom: "$39.99",
    detailHref: "/services/credit-report",
    image: "/assets/services/credit-report.webp",
    start: { service: "credit-report" },
  },
  {
    slug: "social-media-screening",
    name: "Social media screening",
    eyebrow: "Add-on · Behavioral",
    category: "Add-on",
    group: "Verifications & records",
    tagline: "FCRA-compliant review of public profiles, no protected-class data.",
    intro:
      "A trained analyst reviews only publicly visible profiles for content relevant to a permissible purpose: violent threats, drug-related posts, discriminatory content, or confidential-data leakage. Protected-class information is redacted before the report ever reaches you.",
    features: [
      "Public profiles only (major platforms)",
      "Human analyst review, no scraping",
      "Risk-relevant categories only",
      "Protected-class redaction built in",
      "Screenshot evidence with context",
      "Tailored policy matrices per customer",
    ],
    included: [
      { title: "Human analyst", desc: "FCRA-trained reviewer applies policy, no raw dumps.", icon: iconUser },
      { title: "Redaction layer", desc: "Protected-class content removed before you see it.", icon: iconShield },
      { title: "Evidence, not rumor", desc: "Every flag cites a public post with timestamp.", icon: iconDoc },
    ],
    useCases: [
      "Executive and public-facing roles",
      "Brand-sensitive positions",
      "Customer-trust-critical functions",
    ],
    turnaround: "1 – 2 business days",
    priceFrom: "$29.99",
    detailHref: "/services/social-media-screening",
    image: "/assets/services/social-media-screening.webp",
    start: { service: "social-media-screening" },
  },
  {
    slug: "tenant-screening",
    name: "Tenant screening",
    eyebrow: "Core check · Property management",
    category: "Core check",
    group: "Property management",
    tagline: "Criminal, credit, and eviction history, built for property managers.",
    intro:
      "The screening built for property management: a single compliant report covering resident-grade criminal history, a soft-pull credit report, and a nationwide eviction record search: everything a leasing team needs to evaluate an applicant.",
    features: [
      "Nationwide eviction history search",
      "Resident-grade criminal check",
      "Soft-pull credit score and tradelines",
      "Rental payment history where available",
      "Landlord reference workflow",
      "Applicant-friendly mobile submission",
    ],
    included: [
      { title: "Landlord-ready", desc: "Every leasing signal on one compliant report.", icon: iconHome },
      { title: "Soft-pull credit", desc: "No impact to the applicant's credit score.", icon: iconCredit },
      { title: "Eviction coverage", desc: "Nationwide database of filings, judgments, and outcomes.", icon: iconBuilding },
    ],
    useCases: [
      "Multi-family property management",
      "Single-family rental portfolios",
      "Student and short-term housing",
    ],
    turnaround: "Most applicants complete the same day",
    priceFrom: "$39.99",
    detailHref: "/services/tenant-screening",
    image: "/assets/services/tenant-screening.webp",
    start: { service: "tenant-screening", reason: "tenant" },
  },
  {
    slug: "continuous-checks",
    name: "Continuous checks",
    eyebrow: "Add-on · Ongoing monitoring",
    category: "Add-on",
    group: "Ongoing",
    tagline: "Recurring monitoring that alerts you when an employee's records change.",
    intro:
      "Continuous checks keep watching after the hire. Each enrolled worker is monitored across criminal, watchlist, and registry sources on a recurring schedule, and any potential hit is verified by a trained analyst before you receive a documented alert, with the same consent and permissible-purpose foundations as any consumer report.",
    features: [
      "Arrest & booking records",
      "County court record monitoring",
      "National database pointer searches",
      "Global watchlist (domestic + intl)",
      "Sex offender registry, nationwide",
      "Verifier-reviewed alerts, full audit trail",
    ],
    included: [
      { title: "Verified alerts", desc: "Changes analyst-reviewed before an alert is raised.", icon: iconShield },
      { title: "Consent built in", desc: "Begins only after consent and permissible purpose.", icon: iconUser },
      { title: "Adverse-action support", desc: "Two-step adverse-action workflow ready if you act.", icon: iconClock },
    ],
    useCases: [
      "Existing workforce",
      "High-turnover roles",
      "Regulated industries (healthcare, finance, transport)",
    ],
    turnaround: "Ongoing · recurring schedule",
    priceFrom: "Subscription",
    priceNote: true,
    detailHref: "/services/continuous-checks",
    image: "/assets/services/continuous-checks.webp",
    // No `start`: subscription service — routes to sales, not the self-serve order flow.
  },
];

export const serviceGroups: { id: Service["group"]; label: string; blurb: string }[] = [
  { id: "Identity & criminal", label: "Identity & criminal", blurb: "The foundation of every screening package." },
  { id: "Verifications & records", label: "Verifications & records", blurb: "Add the checks a specific role calls for." },
  { id: "Property management", label: "Property management", blurb: "Screening purpose-built for landlords and leasing teams." },
  { id: "Ongoing", label: "Ongoing monitoring", blurb: "Keep watch after the hire." },
];
