import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Continuous Checks | Atlas Screening",
  description:
    "Ongoing criminal-record monitoring that alerts you when an existing employee's records change, using recurring searches of court, arrest, booking, national, and watchlist sources, powered by Atlas's data partner InformData.",
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function ContinuousChecksPage() {
  return (
    <ServiceDetail
      eyebrow="Add-on · Ongoing monitoring"
      title="Continuous checks that keep your workforce safer."
      path="/services/continuous-checks"
      image="/assets/services/continuous-checks.webp"
      description="Atlas continuous monitoring is powered by a dedicated monitoring engine that runs recurring searches across court, arrest, booking, national, and watchlist sources, and raises an alert as changes are detected, so a hire stays informed, not just checked once. Continuous monitoring is delivered through Atlas's data partner, InformData."
      primaryCta={{ label: "Talk to sales", href: "/contact?service=continuous-checks" }}
      secondaryCta={{ label: "See how it works", href: "/how-it-works" }}
      includedHeading="Sources that keep watching after the hire."
      includedSubheading="Each enrolled worker is monitored by the InformData monitoring engine on a recurring schedule across the sources below. Any potential change is verified before it ever reaches you as an alert."
      features={[
        { title: "Arrest & booking records", desc: "Recurring searches across arrest and booking data sources; new activity surfaces as an alert once it has been verified.", icon: <I d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z M9 12l2 2 4-4" /> },
        { title: "Court records across jurisdictions", desc: "Ongoing county-level court record monitoring tied to the individual's addresses and history.", icon: <I d="M12 3l7 4v3H5V7l7-4zM7 10v8M12 10v8M17 10v8M6 21h12v-3H6z" /> },
        { title: "National criminal database", desc: "Periodic pointer search for potential new records, verified through a county-level search before reporting.", icon: <I d="M12 3c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3zM5 6v6c0 2 3 3 7 3s7-1 7-3V6M5 12v6c0 2 3 3 7 3s7-1 7-3v-6" /> },
        { title: "Global watchlist", desc: "Recurring check against domestic and international watchlist sources.", icon: <I d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20M3.5 8.5c2.5 2 12.5 2 17 0M3.5 15.5c2.5-2 12.5-2 17 0" /> },
        { title: "Sex offender registry", desc: "Recurring search of public sex-offender registries nationwide.", icon: <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M6 10.5h12v9H6z" /> },
        { title: "Verifier-reviewed alerts", desc: "Every change is verified at the source and reviewed by a trained analyst before an alert is raised; a full audit trail is kept for every alert.", icon: <I d="M6 3h9l4 4v14H6z M9 13l2 2 4-4" /> },
      ]}
      stepsHeading="How continuous checks run"
      steps={[
        { n: "01", t: "Enroll", d: "Consent captured, permissible purpose documented, and the employee added to monitoring." },
        { n: "02", t: "Source sweep", d: "The InformData monitoring engine searches court, arrest, booking, national, and watchlist sources on the recurring schedule. Cadence is agreed with your team at setup." },
        { n: "03", t: "Change verification", d: "Any change is verified at the source and reviewed by a trained analyst before anything is reported." },
        { n: "04", t: "Alert & act", d: "A reportable change generates an alert with the details and supporting documentation; adverse-action support is available if you proceed on it." },
      ]}
      faqHeading="Continuous-checks questions."
      faqSubheading="How ongoing monitoring differs from a one-time check, what triggers an alert, and how it stays FCRA compliant."
      faqs={[
        { q: "Is this the same as a one-time background check?", a: "No. A one-time check is a snapshot taken at hiring; continuous checks keep searching on a recurring schedule and alert you to changes after hire. Monitoring is run through Atlas's data partner, InformData, and Atlas still obtains the required consent and permissible purpose before monitoring begins." },
        { q: "What kinds of changes will I be alerted about?", a: "New criminal records, arrests and bookings found in the recurring source sweep, watchlist additions, and sex-offender registration changes, reported after verification, with supporting documentation." },
        { q: "Are continuous checks FCRA compliant?", a: "Yes. Monitoring requires the same consent and permissible-purpose foundations as any consumer report, disclosure is provided, and any adverse action based on an alert follows the standard two-step process: a pre-adverse notice with the report and Summary of Consumer Rights plus a waiting period, then a final adverse-action notice." },
        { q: "How is this priced?", a: "Continuous checks are a subscription per monitored individual. Your team's volume and custom cadence are quoted by sales. Talk to us to design a program that fits." },
        { q: "Can we add or remove employees at any time?", a: "Yes. Enrollment and removal are managed through your Atlas account, so you control precisely who is monitored and when." },
      ]}
      ctaHeading="Keep every hire informed, not just checked."
      ctaDescription="Ongoing monitoring powered by a dedicated data engine, with verification, documentation, and adverse-action support built in. Talk to sales to design your monitoring program."
    />
  );
}
