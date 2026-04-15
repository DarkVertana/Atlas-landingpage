"use client";

import { useEffect, useState } from "react";

type Scope = {
  key: "state" | "national" | "territory";
  label: string;
  image: string;
  headline: string;
  desc: string;
  tags: string[];
};

const scopes: Scope[] = [
  {
    key: "state",
    label: "State",
    image: "/assets/images/Criminal-background-checks.webp",
    headline: "Every state registry, searched in parallel.",
    desc: "Atlas queries all 50 state sex offender registries in a single pass — name, alias, and date-of-birth matching logic runs across every public list without skipping jurisdictions.",
    tags: ["50 state registries", "Name + DOB matching", "Alias logic built-in"],
  },
  {
    key: "national",
    label: "NSOPW",
    image: "/assets/images/Ai-section.webp",
    headline: "U.S. DOJ National Sex Offender Public Website.",
    desc: "The NSOPW federal database aggregates registry data across every U.S. jurisdiction — Atlas hits it alongside state sources so nothing slips through the cracks.",
    tags: ["DOJ-sourced data", "Cross-state matching", "Federal aggregate"],
  },
  {
    key: "territory",
    label: "Territories",
    image: "/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp",
    headline: "DC, Guam, and U.S. territories included.",
    desc: "Washington DC, Guam, Puerto Rico, the U.S. Virgin Islands, and other territories are searched by default — a common gap in lower-cost competitors.",
    tags: ["DC + Guam + PR", "Virgin Islands", "American Samoa"],
  },
];

export default function Bento() {
  const [scope, setScope] = useState<Scope["key"]>("state");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5));
    }, 110);
    return () => clearInterval(id);
  }, []);

  const active = scopes.find((s) => s.key === scope) ?? scopes[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] gap-4">
      {/* Interactive scope card (spans 2 rows, left) */}
      <article className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl group">
        {scopes.map((s) => (
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

        <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
            Coverage scope
          </span>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full p-1">
            {scopes.map((s) => (
              <button
                key={s.key}
                onClick={() => setScope(s.key)}
                aria-pressed={s.key === active.key}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
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

      {/* Solid daily-refresh card */}
      <article className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#058B74] to-[#0aa88a] p-8 text-white flex flex-col justify-between">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 12a9 9 0 11-3.5-7.1" />
              <path d="M21 4v5h-5" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Daily data refresh
            </span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-snug">
            Registries re-crawled every 24 hours — caught the day a record lands.
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 mt-4">
          {[
            "24-hour refresh cycle",
            "Offense and conviction date",
            "Tier-level classification",
            "Photo and description (where available)",
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
            <span>Running search</span>
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
          Instant query across every U.S. state and territory registry in
          parallel.
        </p>
      </article>

      {/* Sensitive-role card */}
      <article className="md:col-span-1 relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[#058B74]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            Built for
          </p>
          <p className="mt-1 text-sm font-semibold text-[#01463A] leading-snug">
            Childcare, education, elder-care, and in-home services.
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
