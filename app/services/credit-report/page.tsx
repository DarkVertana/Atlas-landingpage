import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Credit Report | Atlas Screening",
  description:
    "Employment-purpose credit reports for financial, fiduciary, and executive roles — state-aware and permissible-purpose verified.",
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function CreditReportPage() {
  return (
    <ServiceDetail
      eyebrow="Add-on · $39.99"
      title="Credit reports for roles where it matters."
      description="Employment-purpose credit data for financial, fiduciary, and executive hires — with permissible-purpose verification and state-law gating built in."
      price="$39.99"
      includedHeading="Credit signals that fit the role."
      includedSubheading="Never used for entry-level hiring. Scoped tightly to roles where financial responsibility is a documented job requirement."
      features={[
        { title: "Employment-purpose pull", desc: "Soft inquiry — no impact on the applicant's credit score.", icon: <I d="M5 12l5 5 9-11" /> },
        { title: "Payment history", desc: "Delinquencies, collections, charge-offs, and public records relevant to financial trust.", icon: <I d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25" /> },
        { title: "Bankruptcy & liens", desc: "Active bankruptcies, tax liens, and civil judgments from credit and public-record sources.", icon: <I d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M10 14h4v7h-4z" /> },
        { title: "State-law gating", desc: "11 states restrict credit-based employment decisions — Atlas blocks non-compliant pulls automatically.", icon: <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75" /> },
        { title: "Permissible-purpose audit", desc: "Every pull is logged with the role, reason, and applicant consent — defensible if ever challenged.", icon: <I d="M6 3h9l4 4v14H6z M9 13l2 2 4-4" /> },
        { title: "Adverse-action workflow", desc: "Pre- and post-adverse letters pre-filled with the specific credit reasons driving the decision.", icon: <I d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04" /> },
      ]}
      steps={[
        { n: "01", t: "Permissible purpose", d: "Role documented, consent captured, state eligibility verified." },
        { n: "02", t: "Soft-pull request", d: "TransUnion employment-purpose inquiry dispatched." },
        { n: "03", t: "Report parsing", d: "Score, trade lines, public records, and collections structured into the report." },
        { n: "04", t: "Compliant delivery", d: "Branded report with adverse-action workflow one click away if needed." },
      ]}
      faqHeading="Credit-report questions."
      faqSubheading="When credit is appropriate to check, what the applicant sees, and which states say no."
      faqs={[
        { q: "Does this hurt the applicant's credit?", a: "No. Employment-purpose pulls are soft inquiries that don't affect the credit score. The applicant may see the inquiry on their report, but it's marked 'employment purpose' and is not factored into scoring." },
        { q: "Which states restrict credit-based employment decisions?", a: "Eleven states plus several cities — including California, Colorado, Connecticut, Hawaii, Illinois, Maryland, Nevada, New York, Oregon, Vermont, and Washington. Atlas blocks non-compliant pulls automatically based on the applicant's location." },
        { q: "What roles should I actually credit-check?", a: "Anyone handling cash, setting prices, executing trades, signing contracts, or with fiduciary authority — typically finance, accounting, treasury, legal, executive, and senior procurement roles." },
        { q: "Is a credit report the same as a credit score?", a: "The report includes the score but also trade lines, payment history, public records, and collections. For employment decisions, the detailed report matters far more than the single score." },
      ]}
      ctaHeading="Screen financial responsibility, compliantly."
      ctaDescription="Employment-purpose credit with automatic state gating and a defensible audit trail."
    />
  );
}
