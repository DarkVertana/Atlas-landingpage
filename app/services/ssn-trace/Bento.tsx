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
      supportStyle="chips"
      eyebrow="The identity anchor"
      title="One trace, the whole history."
      intro="An SSN trace is the foundation every other check is built on — it confirms identity, surfaces past addresses, and maps the jurisdictions to search next."
      metrics={[
        { to: 7, unit: "Years of address history", note: "Residential history assembled from credit headers, public records, and utility footprints.", icon: <I d="M3 12l9-9 9 9M5 10v10h14V10" /> },
        { to: 3, unit: "Credit bureaus", note: "Experian, Equifax, and TransUnion headers pulled for the deepest U.S. residential record.", icon: <I d="M3 5h18v14H3zM3 10h18M7 15h5" /> },
        { to: 50, unit: "States mapped", note: "Every prior address mapped to its county and court, so downstream searches hit the right places.", icon: <I d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" /> },
      ]}
      support={["SSN issuance validation", "Death Master File cross-check", "Alias & maiden-name surfacing", "Sub-60-second turnaround"]}
    />
  );
}
