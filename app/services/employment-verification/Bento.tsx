import ServiceMetrics from "../../components/ServiceMetrics";

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d={d} />
  </svg>
);

export default function Bento() {
  return (
    <ServiceMetrics
      variant="feature"
      eyebrow="Verified, not just claimed"
      title="Every title and date, confirmed at the source."
      intro="We contact past employers directly to validate what a candidate reports, and flag the discrepancies that matter before a hire is made."
      metrics={[
        { to: 150, suffix: "+", unit: "Countries covered", note: "Past employers reached worldwide through employer networks and direct outreach.", icon: <I d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /> },
        { to: 3, unit: "Verification methods", note: "Employer networks, direct phone, and email confirmation, whichever the employer accepts.", icon: <I d="M4 7h16M4 12h16M4 17h10" /> },
        { value: "1–3", unit: "Day turnaround", note: "Most verifications complete within one to three business days of employer response.", icon: <I d="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" /> },
      ]}
      support={["Titles confirmed", "Dates confirmed", "Discrepancies flagged", "Direct-employer contact"]}
    />
  );
}
