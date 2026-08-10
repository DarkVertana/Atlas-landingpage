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
      supportStyle="chips"
      eyebrow="Compliant public-content review"
      title="AI surfaces it. A human decides."
      intro="Public posts are classified by category, then every flag is confirmed by a trained analyst — with no protected-class data ever considered."
      metrics={[
        { to: 4, unit: "Platforms scanned", note: "Public activity reviewed across LinkedIn, X, Facebook, and Instagram.", icon: <I d="M4 5h16v11H4zM4 20h16M9 16v4M15 16v4" /> },
        { to: 7, unit: "Year lookback", note: "Public posts reviewed within the FCRA reporting window, newest first.", icon: <I d="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" /> },
        { value: "24–48h", unit: "Turnaround", note: "Analyst review completes within one to two business days of the request.", icon: <I d="M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z" /> },
      ]}
      support={["FCRA-compliant", "No protected-class data", "Public content only", "Human analyst review"]}
    />
  );
}
