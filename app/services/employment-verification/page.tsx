import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import Bento from "./Bento";
import ProductShowcase from "../../components/ProductShowcase";

export const metadata: Metadata = {
  title: "Employment Verification | Atlas Screening",
  description:
    "Confirm titles, employment dates, and reason for separation directly with prior employers — documented, compliant, and audit-ready.",
};

const included = [
  {
    title: "Titles and dates",
    desc: "Confirmed job titles, start and end dates for each prior employer — pulled straight from HR or authorized verification networks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Reason for separation",
    desc: "Where the employer is authorized to disclose it, we surface the reason for leaving — voluntary, involuntary, or layoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 17l-5-5 5-5" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    title: "Rehire eligibility",
    desc: "The single most-requested signal from reference checks, surfaced cleanly without relying on off-the-record calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12a9 9 0 11-3.5-7.1" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Compensation verification",
    desc: "For roles with a valid permissible purpose, we verify salary, hourly rate, or total compensation directly with payroll.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20M17 5H9a3 3 0 000 6h6a3 3 0 010 6H7" />
      </svg>
    ),
  },
  {
    title: "Verification networks",
    desc: "Automated data pulls from The Work Number, Equifax Workforce, and authorized HRIS integrations — instant where available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4" />
      </svg>
    ),
  },
  {
    title: "Audit trail",
    desc: "Every contact attempt is logged with timestamp, method, and outcome — so your hiring decisions stay defensible and FCRA-compliant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How do you verify employment?",
    a: "Atlas uses a tiered approach: automated verification networks first (The Work Number, Equifax Workforce, HRIS integrations), then direct HR email, then live-phone verification. Every method is timestamped and logged.",
  },
  {
    q: "How far back do you verify?",
    a: "Standard verifications cover the three most-recent employers. Premium extends to a full seven-year employment history. We can go further on enterprise plans when a role requires it.",
  },
  {
    q: "What if a prior employer won't respond?",
    a: "After three documented attempts across methods, we mark the employer as non-responsive and attach the full contact log. You can then decide whether the gap is material to your hiring decision.",
  },
  {
    q: "Can you verify international employers?",
    a: "Yes. International employer outreach is included on Premium and enterprise plans. We handle timezone, language, and local verification practices across major markets.",
  },
  {
    q: "Is compensation verification always available?",
    a: "Compensation disclosure depends on employer policy and state law. Where disclosed, we report it — otherwise the field is marked 'not disclosed' with the method and source on record.",
  },
];

export default function EmploymentVerificationPage() {
  return (
    <main className="bg-white text-[#01463A]">
      <ServiceHero
        eyebrow="Employment verification"
        title="Verified titles, dates, and separation reasons."
        description="Atlas contacts prior employers directly — via automated networks, tracked email, or live phone — so every claim on a résumé is confirmed at the source, with a full audit trail."
        steps={["Automated network", "Tracked email", "Live phone"]}
      />

      <FeatureGrid
        title="Every title, date, and employer — confirmed."
        intro="We contact past employers directly to validate what candidates claim, and flag the discrepancies that matter before you hire."
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
        title="Verified work history,"
        highlight="delivered fast."
        description="Atlas contacts past employers directly to confirm titles, dates, and eligibility — then drops a clean report straight into your dashboard."
        bullets={[
          "Direct employer outreach, tracked end-to-end",
          "Titles, dates & separation reasons confirmed",
          "Reports you can download and share in a click",
        ]}
        image="/assets/app/reports.png"
        imageAlt="Atlas Screening employment verification reports"
        reversed
        badges={[
          { label: "Employment verified", tone: "clear", position: "-top-4 -right-4" },
          { label: "3 employers contacted", tone: "info", position: "top-1/2 -left-5" },
          { label: "Report ready", tone: "clear", position: "-bottom-4 right-10" },
        ]}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Employment verification questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              How we verify, how far back we go, and what happens when a prior
              employer goes dark.
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
