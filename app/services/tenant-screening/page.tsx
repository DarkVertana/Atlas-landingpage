import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";
import { startScreeningHref } from "../../lib/appUrl";

export const metadata: Metadata = {
  title: "Tenant Screening | Atlas Screening",
  description:
    "Criminal, credit, and eviction history bundled for property managers and landlords, FCRA-compliant and state-aware.",
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function TenantScreeningPage() {
  return (
    <ServiceDetail
      eyebrow="Add-on · $39.99"
      title="Tenant screening that respects the applicant."
      path="/services/tenant-screening"
      image="/assets/services/tenant-screening.webp"
      description="Criminal, credit, and eviction history bundled for property managers. State-aware rules, including source-of-income and fair-chance housing, applied automatically."
      primaryCta={{ label: "Start screening", href: startScreeningHref({ service: "tenant-screening", reason: "tenant" }) }}
      secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      includedHeading="Everything a landlord actually needs."
      includedSubheading="Built specifically for residential leasing, not a rebranded employment check."
      features={[
        { title: "Eviction history", desc: "Nationwide eviction court records across the 10,000+ U.S. jurisdictions that report them.", icon: <I d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" /> },
        { title: "Credit check", desc: "TransUnion-powered credit report with ResidentScore, tuned for rental-payment prediction.", icon: <I d="M3 6h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1zM2 10h20" /> },
        { title: "Criminal records", desc: "National, county, state, and sex offender registry, bundled in, not a separate order.", icon: <I d="M12 3l7 2.6v5.9c0 4.4-3 7.3-7 8.5-4-1.2-7-4.1-7-8.5V5.6L12 3zM8.5 11.8l2.5 2.5 4.5-4.6" /> },
        { title: "Income verification", desc: "Paystub-free income checks via Plaid integration or direct-employer verification.", icon: <I d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v10M14 9.3c0-1-.9-1.7-2.2-1.7-1.2 0-2.2.6-2.2 1.6 0 1 .8 1.5 2.2 1.5s2.3.7 2.3 1.8-1 1.7-2.3 1.7-2.3-.7-2.3-1.7" /> },
        { title: "Fair-housing rules", desc: "Source-of-income, ban-the-box, and state fair-chance housing rules applied automatically.", icon: <I d="M4 11l8-6 8 6M6 10v9h12v-9M9.5 14.5l1.7 1.7 3.3-3.4" /> },
        { title: "Applicant-paid option", desc: "Shift the cost to applicants with a white-labeled flow if that fits your leasing model.", icon: <I d="M12 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5 20a7 7 0 0114 0" /> },
      ]}
      steps={[
        { n: "01", t: "Invite", d: "Applicant gets a tokenized link, mobile-first and co-applicant aware." },
        { n: "02", t: "Consent + intake", d: "ID, SSN, prior addresses, and income source submitted securely." },
        { n: "03", t: "Bundled search", d: "Criminal, credit, eviction, and income verification run in parallel." },
        { n: "04", t: "Landlord report", d: "Single clean report with pass/flag indicators, plus a pre-filled adverse-action flow if needed." },
      ]}
      faqHeading="Tenant screening questions."
      faqSubheading="Fair-housing compliance, multi-applicant leases, and what happens when you need to deny."
      faqs={[
        { q: "Does this comply with fair-housing laws?", a: "Yes. Atlas applies state-specific rules automatically: source-of-income protections, ban-the-box on criminal history, and fair-chance housing ordinances where they apply. Adverse actions include the required disclosures." },
        { q: "Can I screen multiple applicants on one lease?", a: "Yes. Co-applicants and guarantors are captured during intake and screened in parallel. You get one combined report with individual sub-reports." },
        { q: "Is the applicant charged or the landlord?", a: "Your choice. Default is landlord-paid; an applicant-paid flow is available if your leasing model prefers it." },
        { q: "What's ResidentScore?", a: "A TransUnion credit score tuned specifically for rental-payment prediction, more relevant than a generic FICO for tenant screening decisions." },
      ]}
      ctaHeading="Lease confidently."
      ctaDescription="Criminal, credit, and eviction in one compliant report, with fair-housing rules baked in."
    />
  );
}
