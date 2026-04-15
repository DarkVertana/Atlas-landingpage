import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Bento from "./Bento";

export const metadata: Metadata = {
  title: "Sex Offender Registry Search | Atlas Screening",
  description:
    "National sex offender registry search across all 50 states, DC, Guam, and U.S. territories. Refreshed daily and ready for sensitive-role screening.",
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
    tagline: "Registry search, standalone.",
    price: "$6.99",
    features: [
      "All 50 state registries",
      "NSOPW federal database",
      "DC + territories coverage",
      "Name and alias matching",
      "Branded PDF report",
    ],
  },
  {
    name: "Standard",
    tagline: "Registry with identity anchor.",
    price: "$12.99",
    highlight: true,
    features: [
      "Everything in Basic",
      "SSN trace & address history",
      "DOB + photo matching (where available)",
      "Offense and conviction date details",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Sensitive-role ready bundle.",
    price: "$19.99",
    features: [
      "Everything in Standard",
      "National criminal database",
      "Government ID verification",
      "Post-hire continuous monitoring",
      "Dedicated compliance review",
    ],
  },
];

const included = [
  {
    title: "All 50 states + DC",
    desc: "Every public state sex offender registry searched in parallel — no skipped jurisdictions, no coverage gaps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
  {
    title: "NSOPW federal data",
    desc: "U.S. Department of Justice National Sex Offender Public Website aggregated alongside state sources for defense-in-depth coverage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3l9 4v5c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V7l9-4z" />
      </svg>
    ),
  },
  {
    title: "Territories covered",
    desc: "Guam, Puerto Rico, U.S. Virgin Islands, American Samoa, and Northern Marianas — included by default, not an upsell.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Daily refresh",
    desc: "Registries re-crawled every 24 hours — so a new listing in any jurisdiction is reflected in your next report.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12a9 9 0 11-3.5-7.1" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Identity matching",
    desc: "Name, alias, and date-of-birth matching logic eliminates false positives while still catching relevant hits across every registry format.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
      </svg>
    ),
  },
  {
    title: "Sensitive-role ready",
    desc: "Purpose-built for childcare, K-12, elder-care, home services, and tenant screening — every report defensible under federal and state law.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Is the registry search included in every package?",
    a: "Yes. Atlas includes the national sex offender registry in every criminal tier (Basic, Standard, and Premium). It's also available as a standalone add-on when a full criminal check isn't needed.",
  },
  {
    q: "How often is the data refreshed?",
    a: "Atlas re-crawls every public state registry and the NSOPW database on a 24-hour cycle. Any new listing in any jurisdiction is reflected in your next run — no stale data.",
  },
  {
    q: "What does Atlas match against?",
    a: "We match on name, alias, and date of birth across every registry in parallel. Where the source registry publishes a photo, we surface it alongside the offense detail so you can confirm identity.",
  },
  {
    q: "Are U.S. territories covered?",
    a: "Yes. DC, Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands are all included by default — not a paid add-on.",
  },
  {
    q: "What if a candidate disputes a registry hit?",
    a: "Applicants can open a dispute directly from the report. Our compliance team verifies the match against the source registry and surfaces corrections within one business day.",
  },
];

export default function SexOffenderRegistryPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Sex offender registry
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            National registry search you can trust.
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            Every state registry, the NSOPW federal database, and every U.S.
            territory — searched in parallel and refreshed daily. Purpose-built
            for roles where the stakes are highest.
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
              Registry questions.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Coverage, refresh cadence, and how registry hits are handled for
              sensitive-role hiring.
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
