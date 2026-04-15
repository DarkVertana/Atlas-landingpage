"use client";

import { useEffect, useState } from "react";

type Jurisdiction = {
  key: "county" | "state" | "federal";
  label: string;
  image: string;
  headline: string;
  desc: string;
  tags: string[];
};

const jurisdictions: Jurisdiction[] = [
  {
    key: "county",
    label: "County",
    image: "/assets/images/Criminal-background-checks.webp",
    headline: "County court, direct from the source.",
    desc: "Atlas pulls records straight from the clerk's office in the counties your candidate has lived in — the gold standard for conviction accuracy.",
    tags: ["3,000+ county courts", "7-year lookback", "Disposition verified"],
  },
  {
    key: "state",
    label: "Statewide",
    image: "/assets/images/Ai-section.webp",
    headline: "Statewide criminal repositories.",
    desc: "Where state-level repositories exist, we search them for a broader view of a candidate's criminal history across every county in the state.",
    tags: ["All available state repos", "Name + DOB + SSN match", "Cross-county coverage"],
  },
  {
    key: "federal",
    label: "Federal",
    image: "/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp",
    headline: "All 94 U.S. federal districts.",
    desc: "Federal crimes — wire fraud, trafficking, white-collar — rarely appear in state databases. Atlas queries every federal district court in parallel.",
    tags: ["94 federal districts", "White-collar coverage", "PACER-sourced"],
  },
];

export default function Bento() {
  const [juris, setJuris] = useState<Jurisdiction["key"]>("county");
  const [progress, setProgress] = useState(0);

  // Simulated live-running progress bar that loops
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 140);
    return () => clearInterval(id);
  }, []);

  const active = jurisdictions.find((j) => j.key === juris) ?? jurisdictions[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] gap-4">
      {/* Interactive jurisdiction card (spans 2 rows, left) */}
      <article className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl group">
        {jurisdictions.map((j) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={j.key}
            src={j.image}
            alt={j.headline}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              j.key === active.key
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/95 via-[#01463A]/45 to-transparent" />

        {/* Top toggle */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
            Court of record
          </span>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full p-1">
            {jurisdictions.map((j) => (
              <button
                key={j.key}
                onClick={() => setJuris(j.key)}
                aria-pressed={j.key === active.key}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                  j.key === active.key
                    ? "bg-white text-[#01463A]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3
            key={active.headline}
            className="text-2xl md:text-3xl font-bold leading-tight animate-[fadeUp_0.35s_ease-out]"
          >
            {active.headline}
          </h3>
          <p
            key={active.desc}
            className="mt-3 text-sm text-white/80 leading-relaxed max-w-md animate-[fadeUp_0.4s_ease-out]"
          >
            {active.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {active.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center text-[11px] font-medium text-white bg-white/10 border border-white/20 rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Solid compliance card */}
      <article className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#058B74] to-[#0aa88a] p-8 text-white flex flex-col justify-between">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M6 3h9l4 4v14H6z" />
              <path d="M15 3v4h4" />
              <path d="M9 13l2 2 4-4" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Compliance engine
            </span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-snug">
            FCRA, EEOC, and state filters applied automatically.
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 mt-4">
          {[
            "7-year lookback",
            "Salary-threshold exceptions",
            "California & New York rules",
            "Two-step adverse action docs",
          ].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5 9-11" />
              </svg>
              {b}
            </div>
          ))}
        </div>
      </article>

      {/* Live turnaround card */}
      <article className="md:col-span-2 relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#058B74]/5 p-6 flex flex-col justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
          Turnaround
        </p>

        <p className="text-5xl font-extrabold text-[#01463A] leading-none mt-2">
          &lt;15
          <span className="text-xl font-semibold text-[#058B74] align-top ml-1">min</span>
        </p>

        {/* Animated progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
            <span>Running check</span>
            <span className="tabular-nums">{progress.toString().padStart(2, "0")}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#058B74]/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#058B74] to-[#0aa88a] rounded-full transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-[11px] text-gray-500 leading-relaxed mt-3">
          Median time from applicant submission to delivered report. County
          searches clear same business day.
        </p>
      </article>

      {/* Human review — live analyst card */}
      <article className="md:col-span-1 relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[#058B74]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
          </svg>
          <span className="relative flex items-center justify-center">
            <span className="absolute w-2 h-2 rounded-full bg-[#0aa88a] animate-ping opacity-75" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-[#0aa88a]" />
          </span>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            Human review
          </p>
          <p className="mt-1 text-sm font-semibold text-[#01463A] leading-snug">
            Analysts on standby.
          </p>
        </div>

        {/* Avatar stack */}
        <div className="flex items-center -space-x-2">
          {[
            "bg-gradient-to-br from-[#058B74] to-[#0aa88a]",
            "bg-gradient-to-br from-[#01463A] to-[#058B74]",
            "bg-gradient-to-br from-[#0aa88a] to-[#058B74]",
          ].map((c, i) => (
            <span
              key={i}
              className={`w-7 h-7 rounded-full ring-2 ring-white ${c} flex items-center justify-center text-[10px] font-bold text-white`}
            >
              {["AM", "JL", "KR"][i]}
            </span>
          ))}
          <span className="pl-3 text-[11px] font-semibold text-gray-500">3 online</span>
        </div>
      </article>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
