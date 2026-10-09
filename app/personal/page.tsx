import type { Metadata } from "next";
import ServiceDetail from "../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Personal Background Check | Atlas Screening",
  description:
    "Order a background check on yourself. Review your criminal, identity, and work history the way an employer or landlord would, and dispute anything inaccurate. FCRA-compliant.",
  alternates: { canonical: "/personal" },
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function PersonalPage() {
  return (
    <ServiceDetail
      eyebrow="Personal · For individuals"
      showPricing={false}
      title="See your record before anyone else does."
      path="/personal"
      image="/assets/images/personal-check.webp"
      description="Order a background check on yourself. Review your criminal, identity, and work history the way an employer or landlord would, and dispute anything that's wrong. Reports are only furnished to the person they describe, after identity verification and written authorization."
      primaryCta={{ label: "Check my background", href: "/contact?service=personal" }}
      secondaryCta={{ label: "How disputes work", href: "/dispute-resolution" }}
      includedHeading="The same searches, pointed at you."
      includedSubheading="Pick the searches that match what you're preparing for. Each one runs against the same sources Atlas uses for employment screening."
      features={[
        { title: "Identity verification", desc: "SSN trace and address history, the base every other search is built on.", icon: <I d="M12 11a4 4 0 100-8 4 4 0 000 8zM6 21v-1a6 6 0 0112 0v1" /> },
        { title: "Criminal history", desc: "National database, county court, and federal records, run the way an employer would run them.", icon: <I d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z M9 12l2 2 4-4" /> },
        { title: "Sex offender registry", desc: "Searched across state registries, so a name match is caught and explained early.", icon: <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M6 10.5h12v9H6z" /> },
        { title: "Employment history", desc: "Confirm the titles and dates your past employers have on file.", icon: <I d="M20 7H4v13h16V7zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /> },
        { title: "Education", desc: "Check that degrees and dates are reported the way you list them.", icon: <I d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" /> },
        { title: "Driving record", desc: "Your state MVR, useful before applying for driving or delivery roles.", icon: <I d="M5 17h14M6 17l1.5-5h9L18 17M7 17v2M17 17v2M8 9l1-3h6l1 3" /> },
      ]}
      stepsHeading="How a personal check runs"
      steps={[
        { n: "01", t: "Verify it's you", d: "Confirm your identity and give written authorization. You can only order a report about yourself." },
        { n: "02", t: "Searches run", d: "Database results come back first; county and verification results follow as courts and employers respond." },
        { n: "03", t: "Read your report", d: "A plain-language report with each section marked found, clear, or still in progress." },
        { n: "04", t: "Dispute or download", d: "Flag anything inaccurate for reinvestigation, or download a copy for your own records." },
      ]}
      faqHeading="Personal check questions."
      faqSubheading="What you can order, how long it takes, and what to do if something looks wrong."
      faqs={[
        { q: "Can I run a check on someone else here?", a: "No. A personal check is only for ordering a report about yourself, and identity is verified before any search runs. Screening another person requires a permissible purpose under the FCRA and that person's written authorization." },
        { q: "Is this the same report an employer would see?", a: "It uses the same searches and sources Atlas uses for employment screening. An employer's report depends on the package they order and the jurisdictions they choose, so results can differ." },
        { q: "How long does it take?", a: "Database results can return quickly, often the same day. County court searches and employment or education verifications depend on the court or institution and typically take a few business days." },
        { q: "What if something on my report is wrong?", a: "You can dispute it by emailing compliance@atlasscreening.com. Atlas reinvestigates disputed information and corrects or removes anything that can't be verified." },
        { q: "Can I share my report with an employer or landlord?", a: "You can download a copy and share it however you choose. Many employers and landlords are still required to order their own report with your authorization, so a personal copy is best used to prepare." },
      ]}
      ctaHeading="Know your record before it matters."
      ctaDescription="Order a report on yourself, review every section, and dispute anything that isn't right."
    />
  );
}
