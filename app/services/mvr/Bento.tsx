import ServiceMetrics from "../../components/ServiceMetrics";

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d={d} />
  </svg>
);

export default function Bento() {
  return (
    <ServiceMetrics
      align="center"
      supportStyle="chips"
      eyebrow="The full driving record"
      title="Straight from every state DMV."
      intro="License status, violations, points, and endorsements pulled directly from the source — the signal fleet, delivery, and field roles depend on."
      metrics={[
        { to: 50, unit: "State DMVs", note: "Records pulled directly from every U.S. department of motor vehicles.", icon: <I d="M5 16l1-5a2 2 0 012-1.5h8a2 2 0 012 1.5l1 5M5 16h14M5 16v2M19 16v2M8 16v-1M16 16v-1" /> },
        { to: 5, unit: "Year lookback", note: "Violations, suspensions, and endorsements across a full five-year driving history.", icon: <I d="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" /> },
        { value: "< 24h", unit: "Turnaround", note: "Most motor-vehicle records return the same business day they're requested.", icon: <I d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /> },
      ]}
      support={["License status", "Violations & points", "Suspensions & revocations", "CDL endorsements"]}
    />
  );
}
