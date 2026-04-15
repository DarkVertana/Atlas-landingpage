"use client";

import { useEffect, useState } from "react";

type DataSource = {
  key: "credit" | "public" | "utility";
  label: string;
  image: string;
  headline: string;
  desc: string;
  tags: string[];
};

const sources: DataSource[] = [
  {
    key: "credit",
    label: "Credit headers",
    image: "https://images.pexels.com/photos/10653886/pexels-photo-10653886.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Credit header data from the big three.",
    desc: "Atlas pulls name, SSN, address, and date-of-birth headers from Experian, Equifax, and TransUnion — the deepest and most complete source of residential history in the U.S.",
    tags: ["Experian · Equifax · TransUnion", "7-year residential history", "Alias and AKA surfacing"],
  },
  {
    key: "public",
    label: "Public records",
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Public records verified across jurisdictions.",
    desc: "Voter rolls, property deeds, court filings, and marriage records cross-reference the identity and fill gaps the credit bureaus miss — especially for renters and younger candidates.",
    tags: ["50-state coverage", "Deed and voter matches", "Litigation cross-check"],
  },
  {
    key: "utility",
    label: "Utility & telco",
    image: "https://images.pexels.com/photos/20320345/pexels-photo-20320345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Utility and telecom footprints.",
    desc: "Phone, cable, and utility connections add the short-tenure addresses credit bureaus miss — catching move-ins from the last few months before they hit the credit file.",
    tags: ["Phone + email association", "Current-address signals", "Recent-move detection"],
  },
];

export default function Bento() {
  const [source, setSource] = useState<DataSource["key"]>("credit");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 4));
    }, 120);
    return () => clearInterval(id);
  }, []);

  const active = sources.find((s) => s.key === source) ?? sources[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] gap-4">
      {/* Interactive data-source card (spans 2 rows, left) */}
      <article className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl group h-[460px] md:h-auto">
        {sources.map((s) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.key}
            src={s.image}
            alt={s.headline}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              s.key === active.key ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/95 via-[#01463A]/45 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
          <span className="self-start inline-flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white">
            Data sources
          </span>
          <div className="flex items-stretch gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full p-1 w-full sm:w-auto">
            {sources.map((s) => (
              <button
                key={s.key}
                onClick={() => setSource(s.key)}
                aria-pressed={s.key === active.key}
                className={`flex-1 sm:flex-initial px-3 py-2 sm:py-1.5 rounded-full text-xs sm:text-[11px] font-semibold transition-all ${
                  s.key === active.key
                    ? "bg-white text-[#01463A]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {s.label}
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

      {/* Solid identity-anchor card */}
      <article className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#058B74] to-[#0aa88a] p-8 text-white flex flex-col justify-between">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Identity anchor
            </span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-snug">
            The trace that decides which jurisdictions every other search queries.
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 mt-4">
          {[
            "SSN issuance validation",
            "Death Master File cross-check",
            "Alias and maiden name surfacing",
            "County map for criminal searches",
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
          &lt;60
          <span className="text-xl font-semibold text-[#058B74] align-top ml-1">sec</span>
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
            <span>Running trace</span>
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
          Median time from submission to full trace — instant for most applicants.
        </p>
      </article>

      {/* Coverage card */}
      <article className="md:col-span-1 relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[#058B74]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            50 states
          </span>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            Coverage
          </p>
          <p className="mt-1 text-sm font-semibold text-[#01463A] leading-snug">
            All U.S. states, DC, and territories covered by default.
          </p>
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
