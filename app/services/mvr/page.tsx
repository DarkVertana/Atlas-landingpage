import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Bento from "./Bento";

export const metadata: Metadata = {
  title: "Motor Vehicle Records (MVR) | Atlas Screening",
  description:
    "State-by-state driving history for fleet, delivery, gig, and any role behind the wheel — with optional continuous monitoring and CDL support.",
};

type Tier = {
  name: "Basic" | "Standard" | "Premium";
  tagline: string;
  price: string;
  highlight?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Basic",
    tagline: "Single-state driving record.",
    price: "$9.99",
    features: [
      "Current license status and class",
      "Violations and traffic citations",
      "Accidents and collision history",
      "Suspensions and revocations",
      "Branded PDF report",
    ],
  },
  {
    name: "Standard",
    tagline: "Multi-state with CDL support.",
    price: "$16.99",
    highlight: true,
    features: [
      "Everything in Basic",
      "Multi-state driving history",
      "CDL endorsements + restrictions",
      "Medical certification status",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Fleet-grade with continuous monitoring.",
    price: "$24.99",
    features: [
      "Everything in Standard",
      "Continuous post-hire monitoring",
      "Real-time violation alerts",
      "Bulk ordering + API access",
      "Dedicated account manager",
    ],
  },
];

const included = [
  {
    title: "License status and class",
    desc: "Current license status, issue date, expiration, and class pulled directly from the issuing state DMV.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M14 10h4M14 13h3M14 16h4" />
      </svg>
    ),
  },
  {
    title: "Violations and citations",
    desc: "Speeding, reckless driving, DUI/DWI, and every other moving violation reported to the state — with date and disposition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
  {
    title: "Accidents and collisions",
    desc: "Reportable collisions, at-fault determinations, and claim history where the state maintains an accident record.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 13l2-5a2 2 0 012-1.5h10a2 2 0 012 1.5l2 5M3 13v5h2v-2h14v2h2v-5M3 13h18" />
        <circle cx="7.5" cy="16" r="1.5" />
        <circle cx="16.5" cy="16" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Suspensions & restrictions",
    desc: "Active suspensions, revocations, conditional licenses, and restriction codes — essential for compliant hiring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M5 5l14 14" />
      </svg>
    ),
  },
  {
    title: "CDL endorsements",
    desc: "Hazmat, tanker, doubles/triples, passenger, school bus — plus medical certifications required for DOT-regulated roles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Continuous monitoring",
    desc: "Optional post-hire monitoring alerts you the moment a new violation, suspension, or status change hits the driver's record.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Which states are covered?",
    a: "All 50 state DMVs plus DC are covered. Return time varies by state — most are instant, and the handful of manual-request states typically return within 24 hours.",
  },
  {
    q: "How far back does the driving record go?",
    a: "The reporting window depends on state law. Most states return three to seven years of driving history; commercial CDL records can extend further where federal regulations require it.",
  },
  {
    q: "Do you handle CDL and DOT compliance?",
    a: "Yes. Atlas surfaces endorsements, medical certifications, and restrictions required for CDL roles, and our report format is structured for DOT audits and FMCSA compliance reviews.",
  },
  {
    q: "What is continuous monitoring?",
    a: "After a driver is hired, Atlas can monitor their record continuously. When a new violation, suspension, accident, or status change is reported, you receive an instant alert in the dashboard and by email.",
  },
  {
    q: "Is applicant consent required?",
    a: "Yes. Pulling a motor vehicle record is a consumer report under the FCRA — explicit, written consent is required. Atlas collects and stores timestamped consent as part of the applicant flow.",
  },
];

export default function MvrPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Motor vehicle records
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Driving records direct from the DMV.
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            License status, violations, accidents, CDL endorsements, and
            continuous monitoring — every detail your fleet, delivery, gig, or
            transportation team needs to hire behind the wheel with confidence.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#01463A]">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive bento */}
      <section className="bg-white pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <Bento />
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              Pricing tiers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Pick a tier. Scale when you need to.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Every tier is pay-as-you-go. Switch at any time — the applicant
              flow stays the same.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  t.highlight
                    ? "border-[#058B74] bg-white shadow-xl shadow-[#058B74]/10 ring-1 ring-[#058B74]/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-[#01463A] text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#01463A]">{t.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{t.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#01463A]">{t.price}</span>
                  <span className="text-xs text-gray-500">per check</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#01463A]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/signup?plan=${t.name.toLowerCase()}`}
                  className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    t.highlight
                      ? "bg-[#01463A] text-white hover:bg-[#01463A]/90"
                      : "border border-[#01463A]/20 text-[#01463A] hover:border-[#058B74] hover:text-[#058B74]"
                  }`}
                >
                  Start with {t.name}
                </Link>
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
              MVR questions.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              State coverage, CDL handling, and how continuous monitoring keeps
              your fleet compliant after hire.
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

      <CTASection />
    </main>
  );
}
