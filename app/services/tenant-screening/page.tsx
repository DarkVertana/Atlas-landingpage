import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Tenant Screening | Atlas Screening",
  description:
    "Criminal, credit, and eviction history bundled for property managers and landlords — FCRA-compliant and state-aware.",
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
      description="Criminal, credit, and eviction history bundled for property managers. State-aware rules — including source-of-income and fair-chance housing — applied automatically."
      price="$39.99"
      includedHeading="Everything a landlord actually needs."
      includedSubheading="Built specifically for residential leasing — not a rebranded employment check."
      features={[
        { title: "Eviction history", desc: "Nationwide eviction court records across the 10,000+ U.S. jurisdictions that report them.", icon: <I d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M10 14h4v7h-4z" /> },
        { title: "Credit check", desc: "TransUnion-powered credit report with ResidentScore — tuned for rental-payment prediction.", icon: <I d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /> },
        { title: "Criminal records", desc: "National, county, state, and sex offender registry — bundled in, not a separate order.", icon: <I d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
        { title: "Income verification", desc: "Paystub-free income checks via Plaid integration or direct-employer verification.", icon: <I d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182" /> },
        { title: "Fair-housing rules", desc: "Source-of-income, ban-the-box, and state fair-chance housing rules applied automatically.", icon: <I d="M6 3h9l4 4v14H6z M9 13l2 2 4-4" /> },
        { title: "Applicant-paid option", desc: "Shift the cost to applicants with a white-labeled flow if that fits your leasing model.", icon: <I d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM7 10h6a2 2 0 010 4H9a2 2 0 000 4h7" /> },
      ]}
      steps={[
        { n: "01", t: "Invite", d: "Applicant gets a tokenized link — mobile-first, co-applicant aware." },
        { n: "02", t: "Consent + intake", d: "ID, SSN, prior addresses, and income source submitted securely." },
        { n: "03", t: "Bundled search", d: "Criminal, credit, eviction, and income verification run in parallel." },
        { n: "04", t: "Landlord report", d: "Single clean report with pass/flag indicators — and a pre-filled adverse-action flow if needed." },
      ]}
      faqHeading="Tenant screening questions."
      faqSubheading="Fair-housing compliance, multi-applicant leases, and what happens when you need to deny."
      faqs={[
        { q: "Does this comply with fair-housing laws?", a: "Yes. Atlas applies state-specific rules automatically — source-of-income protections, ban-the-box on criminal history, and fair-chance housing ordinances where they apply. Adverse actions include the required disclosures." },
        { q: "Can I screen multiple applicants on one lease?", a: "Yes. Co-applicants and guarantors are captured during intake and screened in parallel. You get one combined report with individual sub-reports." },
        { q: "Is the applicant charged or the landlord?", a: "Your choice. Default is landlord-paid; an applicant-paid flow is available if your leasing model prefers it." },
        { q: "What's ResidentScore?", a: "A TransUnion credit score tuned specifically for rental-payment prediction — more relevant than a generic FICO for tenant screening decisions." },
      ]}
      ctaHeading="Lease confidently."
      ctaDescription="Criminal, credit, and eviction in one compliant report — with fair-housing rules baked in."
    />
  );
}
