import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import ServiceJsonLd from "../../components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "County Court Searches | Atlas Screening",
  description:
    "FCRA-compliant county court searches pulled directly from the court of record. Verified dispositions, felony and misdemeanor coverage, and automatic lookback filtering.",
};

const included = [
  {
    title: "Court of record",
    desc: "Searches go straight to the county courthouse where the case was filed, the authoritative source, not a national database pointer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M7 10v11M17 10v11M10 14h4v7h-4z" />
      </svg>
    ),
  },
  {
    title: "Felony & misdemeanor",
    desc: "Both felony and misdemeanor records are surfaced, with the charge, court, and case number captured for every hit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Verified dispositions",
    desc: "Every charge is reported with its current, verified outcome, so a report reflects what actually happened, not just a filing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Trace-driven county selection",
    desc: "The identity trace tells us which counties a subject has actually lived in, so searches land where records are likely to be, not just where they applied.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Automatic lookback",
    desc: "FCRA and state-specific lookback windows are applied automatically, so nothing reportable is missed and nothing time-barred is surfaced.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Researcher-confirmed",
    desc: "Potential matches are confirmed by a trained researcher against identifiers before they reach your report, cutting false positives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How is a county search different from a national database check?",
    a: "The national database is a broad but non-authoritative pointer index. A county court search pulls directly from the courthouse where a case was filed, which is the gold standard for accuracy and disposition. Atlas uses the database to point to jurisdictions, then confirms at the county level.",
  },
  {
    q: "How does Atlas decide which counties to search?",
    a: "County selection is driven by the identity and address trace. We search the counties a subject has actually lived in over the reportable period, rather than relying on a single self-reported address.",
  },
  {
    q: "How far back do county searches go?",
    a: "The FCRA caps most non-conviction reporting at seven years, while convictions may be reportable for longer depending on state law and the role. Atlas applies the correct lookback automatically.",
  },
  {
    q: "Is a county search included in a package?",
    a: "County court searches are included in the Standard and Premium criminal tiers and can be added to any order. Pricing and tier detail are shown below.",
  },
  {
    q: "How are disputes handled?",
    a: "Applicants can open a dispute directly from their report. Our compliance team verifies the record against the source court and surfaces corrections within one business day.",
  },
];

export default function CountyCourtSearchesPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      <ServiceJsonLd
        name="County Court Searches"
        description="FCRA-compliant county court searches pulled directly from the court of record, with verified dispositions and automatic lookback filtering."
        faqs={faqs}
        path="/services/county-court-searches"
      />
      <ServiceHero
        eyebrow="County court searches"
        title="Records pulled straight from the court of record."
        description="The most authoritative layer of a criminal check. Atlas searches every relevant county surfaced by the identity trace, confirms each disposition, and applies FCRA lookback rules automatically."
        image="/assets/services/criminal-background-checks.webp"
      />

      <FeatureGrid
        title="Authoritative records, county by county."
        intro="County searches go to the source: the local courthouse where a case was filed, resolved to a clear, defensible result with the disposition confirmed."
        features={included}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              County-search questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              How county searches differ from database checks, how counties are
              selected, and how lookback windows are applied.
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
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
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
