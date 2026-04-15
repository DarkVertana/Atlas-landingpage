import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import Bento from "./Bento";

export const metadata: Metadata = {
  title: "Criminal Background Checks | Atlas Screening",
  description:
    "FCRA-compliant criminal background checks — national, county, state, and federal records in one report. Basic, Standard, and Premium tiers with transparent pricing.",
};

const included = [
  {
    title: "National criminal database",
    desc: "600M+ records across all 50 states, territories, and federal courts — refreshed continuously.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="7" />
      </svg>
    ),
  },
  {
    title: "County-level accuracy",
    desc: "We go to the source county court where the record lives — no stale scraped data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M7 10v11M17 10v11M10 14h4v7h-4z" />
      </svg>
    ),
  },
  {
    title: "Federal coverage",
    desc: "All 94 U.S. federal district courts for wire-fraud, trafficking, and federal-only offenses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3l9 4v5c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V7l9-4z" />
      </svg>
    ),
  },
  {
    title: "Adverse-action built-in",
    desc: "Pre- and post-adverse workflow, dispute channel, and audit log for every case.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "FCRA + state compliance",
    desc: "Seven-year lookback rules, EEOC guidance, and state-specific reporting limits applied automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Minutes, not days",
    desc: "Most reports return in under 15 minutes. County searches typically clear same business day.",
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
    q: "How far back do criminal checks go?",
    a: "The FCRA caps most non-conviction reporting at seven years. Convictions can be reported for longer depending on state law and the role's salary threshold — Atlas applies the correct lookback automatically.",
  },
  {
    q: "What's the difference between national and county search?",
    a: "The national database is fast and broad but not always authoritative. County searches pull directly from the court of record and are the gold standard for accuracy. Standard and Premium tiers include both.",
  },
  {
    q: "Do you cover federal criminal records?",
    a: "Yes. Premium tier includes all 94 U.S. federal district courts — important for fraud, trafficking, and white-collar roles where state courts won't have the record.",
  },
  {
    q: "How are disputes handled?",
    a: "Applicants can open a dispute directly from their report. Our compliance team responds within one business day, and corrections flow back to your dashboard automatically.",
  },
  {
    q: "Can I run a check without applicant consent?",
    a: "No — and you shouldn't. FCRA requires written consent before any consumer report is ordered. Atlas collects and stores signed consent as part of the intake flow.",
  },
];

export default function CriminalBackgroundChecksPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Criminal background
          </Reveal>
          <Reveal as="h1" delay={80} className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Criminal background checks that hold up in court.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            National, county, state, and federal records in one FCRA-compliant
            report. Choose the tier that fits your role — upgrade later without
            re-onboarding candidates.
          </Reveal>

        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#01463A]">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive bento */}
      <section className="bg-white pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="fade">
            <Bento />
          </Reveal>
        </div>
      </section>

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Criminal-check questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Lookback windows, dispute flows, and what separates a national
              database hit from an authoritative court record.
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal
                key={faq.q}
                as="details"
                delay={i * 60}
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
