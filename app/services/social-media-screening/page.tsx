import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Social Media Inquiry | Atlas Screening",
  description:
    "FCRA-compliant review of public social profiles — protected-class data is redacted before it ever reaches your hiring manager.",
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function SocialMediaScreeningPage() {
  return (
    <ServiceDetail
      eyebrow="Core check · Social media"
      title="Social screening, without the bias risk."
      description="Atlas reviews public social profiles against role-based risk criteria. Protected-class signals are redacted before the report ever reaches your team."
      includedHeading="A compliant window into public behavior."
      includedSubheading="We look only at public content and only for the behaviors that matter — violence, harassment, discriminatory posts, illegal activity."
      features={[
        { title: "Public profiles only", desc: "Nothing behind a login, nothing scraped. Public posts on major platforms only.", icon: <I d="M12 15a3 3 0 100-6 3 3 0 000 6zM2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" /> },
        { title: "Protected-class redaction", desc: "Race, religion, marital status, pregnancy, disability, sexual orientation — redacted before delivery.", icon: <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> },
        { title: "Role-based criteria", desc: "Risk signals tuned to the job — customer-facing, leadership, fiduciary, or safety-sensitive.", icon: <I d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6z" /> },
        { title: "Human review", desc: "Every hit is reviewed by a trained analyst — no algorithmic verdicts.", icon: <I d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /> },
        { title: "FCRA-compliant reporting", desc: "Adverse-action ready, fully disclosable, and delivered with source citations.", icon: <I d="M6 3h9l4 4v14H6z M9 13l2 2 4-4" /> },
        { title: "Major platforms covered", desc: "Facebook, X, Instagram, LinkedIn, TikTok, YouTube, Reddit, public blogs, and news mentions.", icon: <I d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3 12h18M12 3a14.95 14.95 0 010 18M12 3a14.95 14.95 0 000 18" /> },
      ]}
      steps={[
        { n: "01", t: "Consent", d: "Applicant authorizes a social screening as part of the FCRA disclosure." },
        { n: "02", t: "Profile discovery", d: "Atlas locates public profiles tied to the applicant's name, location, and email." },
        { n: "03", t: "Content review", d: "Analyst reviews posts for only the defined risk categories." },
        { n: "04", t: "Redacted report", d: "Protected-class data stripped; hits delivered with source links and screenshots." },
      ]}
      faqHeading="Social media screening questions."
      faqSubheading="What we look at, what we won't look at, and why this one's safer than DIY."
      faqs={[
        { q: "Is social media screening legal?", a: "Yes — as long as it's FCRA-compliant, applicant-consented, and protected-class data is redacted. Atlas handles all three by default." },
        { q: "Why not just Google the candidate?", a: "Two reasons. First, bias: once a recruiter sees protected-class info, courts assume it influenced the decision. Second, documentation: a DIY search leaves no audit trail, so you can't defend an adverse decision." },
        { q: "What risk categories do you flag?", a: "Violence, sexual harassment, hate speech, discriminatory content, illegal activity, and explicit threats — tuned to the role. Political or religious content is never flagged." },
        { q: "How far back does the review go?", a: "Seven years by default. Publicly visible historical content within that window is in scope; deleted or private content is not." },
      ]}
      ctaHeading="Screen social without the legal exposure."
      ctaDescription="FCRA-compliant, redacted, and audit-ready. Let Atlas handle the part your hiring team shouldn't touch."
    />
  );
}
