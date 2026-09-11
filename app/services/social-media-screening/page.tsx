import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import ServiceJsonLd from "../../components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Social Media Screening | Atlas Screening",
  description:
    "FCRA-compliant social media screening. A trained analyst reviews public profiles for risk-relevant content, with protected-class information redacted before it reaches you.",
};

const included = [
  {
    title: "Public profiles only",
    desc: "Review is limited to publicly visible content on major platforms. No private accounts, no passwords, no pretexting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z" />
      </svg>
    ),
  },
  {
    title: "Human analyst review",
    desc: "An FCRA-trained reviewer applies your policy to each profile, so you receive a considered assessment rather than a raw data dump.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
      </svg>
    ),
  },
  {
    title: "Risk-relevant categories only",
    desc: "Flags are limited to a permissible purpose: violent threats, drug-related posts, discriminatory content, or confidential-data leakage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Protected-class redaction",
    desc: "Race, religion, age, disability, and other protected-class information is redacted before the report ever reaches your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <path d="M4 4l16 16" />
      </svg>
    ),
  },
  {
    title: "Evidence, not rumor",
    desc: "Every flag cites the public post with a timestamped screenshot and context, so a finding is defensible rather than hearsay.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Policy matrices per customer",
    desc: "Screening criteria are tailored to your role and industry, so what counts as relevant is defined up front and applied consistently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Is social media screening FCRA-compliant?",
    a: "Yes. Because a social media report is a consumer report, it requires the same permissible purpose, disclosure, and written consent as any other check. A trained analyst reviews only public content against a defined policy, and protected-class information is redacted before you see it.",
  },
  {
    q: "Does Atlas review private accounts?",
    a: "No. Review is strictly limited to content that is publicly visible. Atlas does not request passwords, connect with the applicant, or use pretexting to access non-public content.",
  },
  {
    q: "What kind of content gets flagged?",
    a: "Only content relevant to a permissible purpose: violent or threatening posts, illegal drug activity, discriminatory or hateful content, and leakage of confidential information. Lawful off-duty conduct and protected-class characteristics are not reported.",
  },
  {
    q: "How do you prevent bias?",
    a: "A human analyst applies your defined policy matrix, protected-class information is redacted, and every flag is tied to a specific public post with a timestamp, so decisions rest on documented, relevant evidence.",
  },
  {
    q: "How are disputes handled?",
    a: "Applicants can dispute any finding directly from their report. Our compliance team reinvestigates against the cited source and surfaces corrections within one business day.",
  },
];

export default function SocialMediaScreeningPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      <ServiceJsonLd
        name="Social Media Screening"
        description="FCRA-compliant social media screening: a trained analyst reviews public profiles for risk-relevant content, with protected-class information redacted."
        faqs={faqs}
        path="/services/social-media-screening"
      />
      <ServiceHero
        eyebrow="Social media screening"
        title="Public-profile review, done the compliant way."
        description="A trained analyst reviews only publicly visible content against your policy, flags what's relevant to a permissible purpose, and redacts protected-class information before the report reaches you."
        image="/assets/services/social-media-screening.webp"
      />

      <FeatureGrid
        title="Insight from public content, without the risk."
        intro="Human review of public profiles, scoped to risk-relevant categories and stripped of protected-class data, so every finding is defensible."
        features={included}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Social media questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              What gets reviewed, what stays off the report, and how findings are
              kept relevant, compliant, and defensible.
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
