import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Bento from "./Bento";

export const metadata: Metadata = {
  title: "SSN Trace & Address History | Atlas Screening",
  description:
    "Identity validation, seven-year residential history, alias discovery, and jurisdiction mapping — the anchor check every background report is built on.",
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
    tagline: "Identity foundation, standalone.",
    price: "$4.99",
    features: [
      "SSN format and issuance validation",
      "7-year address history",
      "Alias and maiden name surfacing",
      "Death Master File cross-check",
      "Branded PDF report",
    ],
  },
  {
    name: "Standard",
    tagline: "What most teams start with.",
    price: "$9.99",
    highlight: true,
    features: [
      "Everything in Basic",
      "Government ID verification",
      "Live selfie match",
      "Phone and email association",
      "Jurisdiction mapping for downstream checks",
    ],
  },
  {
    name: "Premium",
    tagline: "Full identity + verification stack.",
    price: "$14.99",
    features: [
      "Everything in Standard",
      "Sex offender registry search",
      "Global watchlist screening",
      "Liveness detection for selfie",
      "Priority support",
    ],
  },
];

const included = [
  {
    title: "SSN validation",
    desc: "Issued-to, issuance year, and SSN format verified against the SSA database — catches invalid or fabricated numbers instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h6" />
      </svg>
    ),
  },
  {
    title: "7-year address history",
    desc: "Residential history assembled from credit headers, public records, and utility footprints — the deepest available view.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    title: "Alias & name variants",
    desc: "Maiden names, prior legal names, hyphenated variants, and common misspellings surfaced automatically so nothing is missed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Jurisdiction mapping",
    desc: "Each prior address maps to the correct county and state court — so downstream criminal searches hit every relevant jurisdiction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    title: "Death Master File",
    desc: "Cross-checked against SSA's Death Master File to flag stolen-identity attempts and SSNs issued to deceased individuals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Instant turnaround",
    desc: "Traces return in under 60 seconds — the trigger that lets every other Atlas search fire off with confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Why run an SSN trace separately?",
    a: "An SSN trace is the anchor for every other check. It confirms identity, reveals which counties to search, and catches aliases that would otherwise be missed. Running criminal searches without a trace means leaving jurisdictions unchecked.",
  },
  {
    q: "How far back does the address history go?",
    a: "Atlas returns a full seven years of residential history by default — the FCRA reporting window. Where earlier history is available from public records, it's surfaced as context without being reportable.",
  },
  {
    q: "What if the SSN doesn't match the candidate?",
    a: "If the trace returns an SSN–name mismatch, discrepancy flags, or a Death Master File hit, we pause the downstream checks and surface the issue in your dashboard with full context.",
  },
  {
    q: "Do you validate the SSN against the SSA directly?",
    a: "Atlas verifies SSN structure, issuance state, and issuance year against the SSA's public issuance data. For employer compliance checks, we also support e-Verify integrations on enterprise plans.",
  },
  {
    q: "Is applicant consent required for an SSN trace?",
    a: "Yes. An SSN trace is a consumer report under the FCRA — explicit, written consent is required. Atlas collects and stores timestamped consent as part of the applicant intake flow automatically.",
  },
];

export default function SsnTracePage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            SSN trace &amp; address history
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The identity anchor every report is built on.
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            Validate the SSN, map seven years of address history, and surface
            every alias — so every downstream criminal and verification search
            hits the jurisdictions it needs to.
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
              SSN trace questions.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Why the trace matters, what we validate, and how it feeds every
              other check you run.
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
