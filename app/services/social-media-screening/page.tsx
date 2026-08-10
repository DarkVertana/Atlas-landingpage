import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import Bento from "./Bento";
import ProductShowcase from "../../components/ProductShowcase";

export const metadata: Metadata = {
  title: "Social Media Inquiry | Atlas Screening",
  description:
    "FCRA-compliant social media screening. Public profiles only, protected-class signals redacted, and every hit reviewed by a trained analyst.",
};

const included = [
  {
    title: "Public profiles only",
    desc: "Nothing behind a login, nothing scraped. Public posts on major platforms — the same view any hiring manager could see.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
      </svg>
    ),
  },
  {
    title: "Protected-class redaction",
    desc: "Race, religion, marital status, pregnancy, disability, and sexual orientation — redacted before the report ever reaches your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75" />
        <path d="M6.75 10.5h10.5a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25z" />
      </svg>
    ),
  },
  {
    title: "Role-based risk criteria",
    desc: "Signal sets tuned to the role — customer-facing, leadership, fiduciary, or safety-sensitive. No one-size-fits-all screen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6z" />
        <path d="M13.5 6A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6z" />
        <path d="M3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Human analyst review",
    desc: "Every flagged post is reviewed for context and attribution by a trained analyst — no raw algorithmic verdicts in the report.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
      </svg>
    ),
  },
  {
    title: "FCRA + EEOC aligned",
    desc: "Adverse-action ready, fully disclosable, and delivered with source links so every decision is defensible under federal and state law.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Major platforms covered",
    desc: "Facebook, X, Instagram, LinkedIn, TikTok, YouTube, Reddit, public blogs, and news mentions — reviewed in parallel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14.95 14.95 0 010 18M12 3a14.95 14.95 0 000 18" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Is social media screening legal?",
    a: "Yes — as long as it's FCRA-compliant, applicant-consented, and protected-class data is redacted before the report reaches the hiring manager. Atlas handles all three by default.",
  },
  {
    q: "Why not just Google the candidate?",
    a: "Two reasons. Bias: once a recruiter sees protected-class information, courts assume it influenced the decision. Documentation: a DIY search leaves no audit trail, so you can't defend an adverse decision if it's challenged.",
  },
  {
    q: "What risk categories do you flag?",
    a: "Violence, sexual harassment, hate speech, discriminatory content, illegal activity, and explicit threats — tuned to the role. Political and religious content is never flagged.",
  },
  {
    q: "How far back does the review go?",
    a: "Seven years by default. Publicly visible historical content within that window is in scope; deleted or private content is never accessed.",
  },
  {
    q: "What happens if a candidate disputes a finding?",
    a: "Applicants can open a dispute directly from the report. Our compliance team re-reviews the source post and responds within one business day — corrections flow back to your dashboard automatically.",
  },
];

export default function SocialMediaScreeningPage() {
  return (
    <main className="bg-white text-[#01463A]">
      <ServiceHero
        eyebrow="Social media inquiry"
        title="Social screening, without the bias risk."
        description="Atlas reviews public social profiles against role-based risk criteria — protected-class signals are redacted before the report ever reaches your team, and every hit is signed off by a trained analyst."
        steps={["Public profiles", "Risk criteria", "Redaction", "Analyst sign-off"]}
      />

      <FeatureGrid
        title="Public content, reviewed the compliant way."
        intro="AI surfaces potentially concerning public posts; trained analysts confirm each flag — with no protected-class data ever considered."
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
        title="Social media insights,"
        highlight="compliance-safe."
        description="Surface publicly available, job-relevant behavior — with protected-class information redacted before it ever reaches your team."
        bullets={[
          "Only job-relevant, public content reviewed",
          "Protected characteristics auto-redacted",
          "Analyst-reviewed reports, ready to act on",
        ]}
        image="/assets/app/reports.png"
        imageAlt="Atlas Screening social media report"
        badges={[
          { label: "Reviewed & redacted", tone: "info", position: "-top-4 -left-4" },
          { label: "Analyst-reviewed", tone: "pending", position: "top-1/2 -right-5" },
          { label: "Report ready", tone: "clear", position: "-bottom-4 left-10" },
        ]}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Social media screening questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              What we look at, what we won&apos;t look at, and why this one is
              safer than a DIY Google search.
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
