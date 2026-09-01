import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import ServiceHero from "../../components/ui/ServiceHero";
import ProductShowcase from "../../components/ProductShowcase";
import CourtDepthStack from "./CourtDepthStack";
import ScreeningsMockup from "./ScreeningsMockup";
import ServiceJsonLd from "../../components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Criminal Background Checks | Atlas Screening",
  description:
    "FCRA-compliant criminal background checks covering national, county, state, and federal records in one report. Basic, Standard, and Premium tiers with transparent pricing.",
};

const faqs = [
  {
    q: "How far back do criminal checks go?",
    a: "The FCRA caps most non-conviction reporting at seven years. Convictions can be reported for longer depending on state law and the role's salary threshold. Atlas applies the correct lookback automatically.",
  },
  {
    q: "What's the difference between national and county search?",
    a: "The national database is fast and broad but not always authoritative. County searches pull directly from the court of record and are the gold standard for accuracy. Standard and Premium tiers include both.",
  },
  {
    q: "Do you cover federal criminal records?",
    a: "Yes. Premium tier includes all 94 U.S. federal district courts, important for fraud, trafficking, and white-collar roles where state courts won't have the record.",
  },
  {
    q: "How are disputes handled?",
    a: "Applicants can open a dispute directly from their report. Our compliance team responds within one business day, and corrections flow back to your dashboard automatically.",
  },
  {
    q: "Can I run a check without applicant consent?",
    a: "No, and you shouldn't. FCRA requires written consent before any consumer report is ordered. Atlas collects and stores signed consent as part of the intake flow.",
  },
];

export default function CriminalBackgroundChecksPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      <ServiceJsonLd
        name="Criminal Background Checks"
        description="FCRA-compliant criminal background checks covering national, county, state, and federal records in one report."
        faqs={faqs}
        path="/services/criminal-background-checks"
      />
      <ServiceHero
        eyebrow="Criminal background"
        title="Criminal background checks that hold up in court."
        description="National, county, state, and federal records in one FCRA-compliant report. Choose the tier that fits your role, then upgrade later without re-onboarding candidates."
        image="/assets/services/criminal-background-checks.webp"
      />

      {/* What's included — court-depth stack */}
      <CourtDepthStack />

      <ProductShowcase
        eyebrow="In the product"
        title="Every search,"
        highlight="tracked to disposition."
        description="Order county, state, and federal searches in one flow, then watch each jurisdiction clear in real time. No phone calls, no chasing courts."
        bullets={[
          "Live status for every court searched",
          "FCRA & EEOC filters applied automatically",
          "County, state, and federal searches in one order",
          "Automatic alerts the moment a report is ready",
          "Downloadable, adjudication-ready reports",
          "Full audit trail for every dispute and correction",
        ]}
        mockup={<ScreeningsMockup />}
        wideMedia
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
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
