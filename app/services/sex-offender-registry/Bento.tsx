import ServiceMetrics from "../../components/ServiceMetrics";

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d={d} />
  </svg>
);

export default function Bento() {
  return (
    <ServiceMetrics
      variant="divided"
      align="center"
      eyebrow="A nationwide sweep"
      title="Every registry, checked every time."
      intro="All 50 states, DC, and the U.S. territories checked against public sex-offender registries and the federal aggregate, refreshed daily."
      metrics={[
        { to: 56, unit: "Registries checked", note: "50 states, DC, and five U.S. territories searched on every single order.", icon: <I d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" /> },
        { value: "Daily", unit: "Registry refresh", note: "Source registries are re-pulled daily so results reflect the latest public record.", icon: <I d="M4 12a8 8 0 0114-5m2 5a8 8 0 01-14 5M18 4v4h-4M6 20v-4h4" /> },
        { value: "< 60s", unit: "Turnaround", note: "The federal NSOPW aggregate and state registries resolve in under a minute.", icon: <I d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /> },
      ]}
      support={["NSOPW federal aggregate", "Cross-state deduplication", "DOB-verified identity", "Human-reviewed matches"]}
    />
  );
}
