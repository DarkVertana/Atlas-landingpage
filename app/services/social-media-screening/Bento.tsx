"use client";

import { useEffect, useState } from "react";

type Lens = {
  key: "platforms" | "redaction" | "review";
  label: string;
  image: string;
  headline: string;
  desc: string;
  tags: string[];
};

const lenses: Lens[] = [
  {
    key: "platforms",
    label: "Platforms",
    image: "https://images.pexels.com/photos/7634159/pexels-photo-7634159.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Public profiles across every major platform.",
    desc: "Facebook, X, Instagram, LinkedIn, TikTok, YouTube, Reddit, public blogs, and news mentions — scanned against the candidate's identity anchors without ever touching private content.",
    tags: ["Public content only", "No logins or scraping", "Source-cited hits"],
  },
  {
    key: "redaction",
    label: "Redaction",
    image: "https://images.pexels.com/photos/11391947/pexels-photo-11391947.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Protected-class signals stripped before delivery.",
    desc: "Race, religion, marital status, pregnancy, disability, and sexual orientation are detected and redacted automatically — the hiring manager never sees the biasing signal.",
    tags: ["EEOC-aligned redaction", "No protected-class leak", "Audit log retained"],
  },
  {
    key: "review",
    label: "Analyst",
    image: "https://images.pexels.com/photos/7682211/pexels-photo-7682211.jpeg?auto=compress&cs=tinysrgb&w=1200",
    headline: "Human review on every flagged post.",
    desc: "Trained analysts confirm context, intent, and attribution on every hit. No algorithmic verdicts, no false-positive dump — only defensible, role-relevant findings.",
    tags: ["Trained reviewers", "Context verified", "Screenshots attached"],
  },
];

export default function Bento() {
  const [lens, setLens] = useState<Lens["key"]>("platforms");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 3));
    }, 130);
    return () => clearInterval(id);
  }, []);

  const active = lenses.find((l) => l.key === lens) ?? lenses[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] gap-4">
      {/* Interactive lens card (spans 2 rows, left) */}
      <article className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl group h-[460px] md:h-auto">
        {lenses.map((l) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={l.key}
            src={l.image}
            alt={l.headline}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              l.key === active.key ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/95 via-[#01463A]/45 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
          <span className="self-start inline-flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white">
            Review lens
          </span>
          <div className="flex items-stretch gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full p-1 w-full sm:w-auto">
            {lenses.map((l) => (
              <button
                key={l.key}
                onClick={() => setLens(l.key)}
                aria-pressed={l.key === active.key}
                className={`flex-1 sm:flex-initial px-3 py-2 sm:py-1.5 rounded-full text-xs sm:text-[11px] font-semibold transition-all ${
                  l.key === active.key
                    ? "bg-white text-[#01463A]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
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

      {/* Solid risk-category card */}
      <article className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#058B74] to-[#0aa88a] p-8 text-white flex flex-col justify-between">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Risk categories
            </span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-snug">
            Only the behaviors that matter to the role — nothing else.
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 mt-4">
          {[
            "Violence and threats",
            "Sexual harassment",
            "Hate speech and discrimination",
            "Illegal activity",
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
          24–48
          <span className="text-xl font-semibold text-[#058B74] align-top ml-1">hrs</span>
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
            <span>Analyst reviewing</span>
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
          Median time from consent to redacted report. Rush review available on
          enterprise plans.
        </p>
      </article>

      {/* Lookback window card */}
      <article className="md:col-span-1 relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[#058B74]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            Lookback
          </p>
          <p className="mt-1 text-sm font-semibold text-[#01463A] leading-snug">
            Seven-year window on public historical content.
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
