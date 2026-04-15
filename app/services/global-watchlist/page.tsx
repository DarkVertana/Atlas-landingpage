import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Global Watchlist Screening | Atlas Screening",
  description:
    "OFAC, PEP, sanctions, and terror-list screening across 1,000+ global sources — for international hires, executives, and regulated industries.",
};

const I = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d={d} />
  </svg>
);

export default function GlobalWatchlistPage() {
  return (
    <ServiceDetail
      eyebrow="Add-on · $39.99"
      title="Global watchlist and sanctions screening."
      description="OFAC, PEP, terror lists, and sanctions databases across 1,000+ global sources. Required for regulated industries, recommended for international or executive hires."
      price="$39.99"
      includedHeading="Worldwide coverage, one query."
      includedSubheading="Every major sanctions list, enforcement action, and politically-exposed-persons database — refreshed continuously."
      features={[
        { title: "OFAC + SDN", desc: "U.S. Treasury Office of Foreign Assets Control sanctions and Specially Designated Nationals list.", icon: <I d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> },
        { title: "Global sanctions", desc: "UN, EU, UK HMT, Canada OSFI, Australia DFAT, and 40+ national sanctions regimes.", icon: <I d="M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a14.95 14.95 0 010 18M12 3a14.95 14.95 0 000 18" /> },
        { title: "PEP screening", desc: "Politically Exposed Persons: heads of state, legislators, senior officials, and close associates.", icon: <I d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /> },
        { title: "Terror lists", desc: "FBI Terror Watch List, Interpol Red Notices, DFAT consolidated list, and UN 1267 committee.", icon: <I d="M12 9v3.75m0 3.75h.007v.008H12v-.008zm-9.303 1.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" /> },
        { title: "Adverse media", desc: "Global negative-news screening across regulated press for fraud, corruption, and financial crime.", icon: <I d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" /> },
        { title: "Continuous monitoring", desc: "Enrolled candidates are re-screened daily — new sanctions or PEP status triggers instant alerts.", icon: <I d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
      ]}
      steps={[
        { n: "01", t: "Name capture", d: "Legal name, aliases, date of birth, and nationality submitted." },
        { n: "02", t: "Multi-source sweep", d: "1,000+ sanctions, PEP, and terror lists queried simultaneously." },
        { n: "03", t: "Match scoring", d: "Fuzzy matching + secondary identifiers filter out false positives." },
        { n: "04", t: "Analyst review", d: "Any positive match is reviewed and documented before delivery." },
      ]}
      faqHeading="Watchlist questions."
      faqSubheading="Who needs this, which lists are included, and what PEP screening actually tells you."
      faqs={[
        { q: "Who needs watchlist screening?", a: "Required for banks, fintechs, insurers, and anyone regulated under AML/KYC rules. Strongly recommended for executive hires, international vendors, and public-sector contractors." },
        { q: "What's a Politically Exposed Person (PEP)?", a: "Current or former senior officials, military leaders, judicial figures, state-owned-enterprise executives, and their close family and associates — people with elevated corruption or bribery risk." },
        { q: "How often is the data refreshed?", a: "Sanctions and terror lists are refreshed multiple times per day. PEP data and adverse media are refreshed continuously. Continuous monitoring re-checks enrolled names daily." },
        { q: "How do you handle false positives?", a: "Fuzzy name matching is paired with secondary identifiers — DOB, nationality, known addresses — and every potential match is analyst-reviewed before it hits your report." },
      ]}
      ctaHeading="Regulated, international, or high-risk?"
      ctaDescription="Run a global watchlist check in seconds. Enable continuous monitoring to catch status changes daily."
    />
  );
}
