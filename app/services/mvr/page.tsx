import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import Bento from "./Bento";
import ProductShowcase from "../../components/ProductShowcase";

export const metadata: Metadata = {
  title: "Motor Vehicle Records (MVR) | Atlas Screening",
  description:
    "State-by-state driving history for fleet, delivery, gig, and any role behind the wheel — with optional continuous monitoring and CDL support.",
};

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
      <ServiceHero
        eyebrow="Motor vehicle records"
        title="Driving records direct from the DMV."
        description="License status, violations, accidents, CDL endorsements, and continuous monitoring — every detail your fleet, delivery, gig, or transportation team needs to hire behind the wheel with confidence."
        steps={["License", "Violations", "Accidents", "Monitoring"]}
      />

      <FeatureGrid
        title="The full picture of a driver's record."
        intro="License status, violations, points, and endorsements pulled straight from state DMVs — the signal fleet and delivery roles depend on."
        features={included}
      />

      {/* Interactive bento */}
      <section className="bg-white pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="fade">
            <Bento />
          </Reveal>
        </div>
      </section>

      <ProductShowcase
        eyebrow="In the product"
        title="Motor vehicle records,"
        highlight="start to finish."
        description="Pull driving history and license status across states, and follow every check from submitted to ready inside one dashboard."
        bullets={[
          "Real-time progress on every MVR pull",
          "License status, violations & endorsements",
          "Automatic alerts the moment a report lands",
        ]}
        image="/assets/app/customer-dashboard.png"
        imageAlt="Atlas Screening MVR status dashboard"
        badges={[
          { label: "License valid", tone: "clear", position: "-top-4 -left-4" },
          { label: "MVR pulled", tone: "info", position: "top-1/2 -right-5" },
          { label: "Real-time status", tone: "info", position: "-bottom-4 left-10" },
        ]}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              MVR questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              State coverage, CDL handling, and how continuous monitoring keeps
              your fleet compliant after hire.
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
