"use client";

import { useEffect, useState } from "react";

type Method = {
  key: "phone" | "email" | "network";
  label: string;
  image: string;
  headline: string;
  desc: string;
  tags: string[];
};

const methods: Method[] = [
  {
    key: "phone",
    label: "Phone",
    image: "/assets/images/Employment-verification.webp",
    headline: "Live-phone verifications with HR.",
    desc: "For employers without automated networks, our trained analysts call HR directly to confirm titles, employment dates, and reason for separation — every attempt timestamped and logged.",
    tags: ["Direct HR contact", "Multi-attempt logic", "Timestamped call notes"],
  },
  {
    key: "email",
    label: "Email",
    image: "/assets/images/Ai-section.webp",
    headline: "Tracked email verifications.",
    desc: "Structured verification emails to authorized HR addresses — responses are parsed, validated, and attached to the report with a full delivery and response audit trail.",
    tags: ["Authorized-domain outreach", "Parsed structured response", "Delivery + read receipts"],
  },
  {
    key: "network",
    label: "Networks",
    image: "/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp",
    headline: "Automated verification networks.",
    desc: "Where The Work Number, Equifax Workforce, or vendor HRIS integrations are available, we pull instant verification data — no manual outreach, no waiting.",
    tags: ["The Work Number", "HRIS integrations", "Instant turnaround"],
  },
];

export default function Bento() {
  const [method, setMethod] = useState<Method["key"]>("phone");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 150);
    return () => clearInterval(id);
  }, []);

  const active = methods.find((m) => m.key === method) ?? methods[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] gap-4">
      {/* Interactive method card (spans 2 rows, left) */}
      <article className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl group">
        {methods.map((m) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={m.key}
            src={m.image}
            alt={m.headline}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              m.key === active.key ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/95 via-[#01463A]/45 to-transparent" />

        <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
            Verification method
          </span>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full p-1">
            {methods.map((m) => (
              <button
                key={m.key}
                onClick={() => setMethod(m.key)}
                aria-pressed={m.key === active.key}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                  m.key === active.key
                    ? "bg-white text-[#01463A]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {m.label}
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

      {/* Solid proof-chain card */}
      <article className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#058B74] to-[#0aa88a] p-8 text-white flex flex-col justify-between">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 13h6M9 17h4" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Proof chain
            </span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-snug">
            Every attempt logged. Every response documented.
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 mt-4">
          {[
            "Timestamped contact attempts",
            "Method, source, and outcome recorded",
            "Parsed responses attached",
            "Exportable audit trail",
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
          1–3
          <span className="text-xl font-semibold text-[#058B74] align-top ml-1">days</span>
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
            <span>Contacting employer</span>
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
          Median time per employer. Network-integrated employers return
          instantly.
        </p>
      </article>

      {/* International card */}
      <article className="md:col-span-1 relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[#058B74]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
            International
          </p>
          <p className="mt-1 text-sm font-semibold text-[#01463A] leading-snug">
            Global employer outreach on enterprise plans.
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
