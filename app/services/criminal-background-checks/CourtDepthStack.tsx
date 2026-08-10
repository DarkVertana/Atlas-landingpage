"use client";

/* "Four courts deep" — a horizontal search journey (light, editorial).
   The search travels left→right along a rail through four waypoints
   (National → State → County → Federal), cards alternating above and below the
   line like a case-file timeline. The rail fills green→amber as the search
   descends and the active stop glows; the authoritative "county" stop carries a
   single amber premium accent. Light surface, real type hierarchy, CountUp
   figures. Autoplays, pauses on hover, honors reduced-motion. */

import { useEffect, useState } from "react";
import CountUp from "../../components/reactbits/CountUp";
import Reveal from "../../components/Reveal";

type Stop = {
  n: string;
  band: string;
  title: string;
  to: number;
  suffix?: string;
  separator?: boolean;
  unit: string;
  desc: string;
  authority: string;
  accent: string; // hex
  soft: string; // tint bg
  icon: string; // svg path
};

const GREEN = "#058B74";
const AMBER = "#F5A524";

const stops: Stop[] = [
  {
    n: "01",
    band: "Surface",
    title: "National database",
    to: 600,
    suffix: "M+",
    unit: "records",
    desc: "A broad first pass across all 50 states, territories, and federal courts — refreshed continuously.",
    authority: "Broad lead",
    accent: GREEN,
    soft: "rgba(5,139,116,0.08)",
    icon: "M21 21l-4.35-4.35M11 4a7 7 0 100 14 7 7 0 000-14z",
  },
  {
    n: "02",
    band: "Regional",
    title: "Statewide repositories",
    to: 50,
    unit: "state databases",
    desc: "Central state databases queried for a wider view across every county in the state.",
    authority: "Wider net",
    accent: GREEN,
    soft: "rgba(5,139,116,0.08)",
    icon: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6",
  },
  {
    n: "03",
    band: "Source",
    title: "County court of record",
    to: 3000,
    suffix: "+",
    separator: true,
    unit: "clerk offices",
    desc: "Straight to the county court where the record actually lives — the gold standard, never scraped.",
    authority: "Authoritative",
    accent: AMBER,
    soft: "rgba(245,165,36,0.1)",
    icon: "M3 10h18M5 10V7l7-4 7 4v3M5 21h14M7 10v11M17 10v11M10 14h4v7h-4z",
  },
  {
    n: "04",
    band: "Federal",
    title: "Federal district courts",
    to: 94,
    unit: "U.S. districts",
    desc: "Every federal district searched in parallel for fraud, trafficking, and white-collar offenses.",
    authority: "Federal-only",
    accent: GREEN,
    soft: "rgba(5,139,116,0.08)",
    icon: "M12 3l9 4v5c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V7l9-4z",
  },
];

function Card({ s, on, onActivate }: { s: Stop; on: boolean; onActivate: () => void }) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={on}
      className="group w-full rounded-2xl border bg-white p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        borderColor: on ? s.accent : "#e8ecea",
        transform: on ? "translateY(-3px)" : undefined,
        boxShadow: on ? `0 18px 40px -18px ${s.accent}66` : "0 1px 2px rgba(16,24,40,0.04)",
        ["--tw-ring-color" as string]: s.accent,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: s.soft, color: s.accent, boxShadow: `inset 0 0 0 1px ${s.accent}22` }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d={s.icon} />
          </svg>
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]"
          style={{ background: s.soft, color: s.accent }}
        >
          {s.authority}
        </span>
      </div>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9aa8a3]">{s.band}</p>
      <h3 className="mt-1 text-[17px] font-semibold leading-snug text-[#01463A]">{s.title}</h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[2.6rem] font-semibold leading-none tracking-tight tabular-nums" style={{ color: s.accent }}>
          <CountUp to={s.to} suffix={s.suffix ?? ""} separator={s.separator} />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-[#5B6B64]">{s.unit}</span>
      </div>

      <p className="mt-3 text-[13.5px] leading-relaxed text-[#5B6B64]">{s.desc}</p>
    </button>
  );
}

function Node({ s, on }: { s: Stop; on: boolean }) {
  return (
    <span
      className="relative z-10 flex items-center justify-center rounded-full border-2 bg-white font-mono text-[11px] font-bold transition-all duration-300"
      style={{
        width: on ? 42 : 34,
        height: on ? 42 : 34,
        borderColor: on ? s.accent : "#cdd6d2",
        color: on ? s.accent : "#9aa8a3",
        boxShadow: on ? `0 0 0 7px ${s.accent}1a` : "none",
      }}
    >
      {s.n}
    </span>
  );
}

export default function CourtDepthStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stops.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  // node centers sit at 12.5% + i·25% of the rail; fill spans node0 → active.
  const fillWidth = active * 25;

  return (
    <section className="bg-white py-20 px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end mb-14">
          <div>
            <Reveal
              as="span"
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]"
            >
              <span className="h-px w-8 bg-[#058B74]/40" />
              What&apos;s included
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-5 text-[2.25rem] font-semibold leading-[1.04] text-[#01463A] md:text-[3.25rem]">
              One search, four courts deep.
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="text-[16px] leading-relaxed text-[#5B6B64] md:pb-2">
            The search travels from a broad national sweep all the way to the
            authoritative county court — every stop on one identity, in one
            FCRA-compliant report.
          </Reveal>
        </div>

        {/* Horizontal journey (lg+) */}
        <Reveal
          variant="fade"
          className="hidden lg:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* top cards — odd stops (national, county) */}
          <div className="grid grid-cols-4 gap-x-6 items-end">
            {stops.map((s, i) => (
              <div key={s.n} className="pb-7">
                {i % 2 === 0 && <Card s={s} on={active === i} onActivate={() => setActive(i)} />}
              </div>
            ))}
          </div>

          {/* rail */}
          <div className="relative grid grid-cols-4">
            <span className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 rounded-full bg-[#e8ecea]" />
            <span
              className="absolute top-1/2 left-[12.5%] h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#058B74] to-[#F5A524] transition-all duration-700"
              style={{ width: `${fillWidth}%` }}
            />
            {stops.map((s, i) => (
              <div key={s.n} className="flex justify-center py-1">
                <Node s={s} on={active === i} />
              </div>
            ))}
          </div>

          {/* bottom cards — even stops (state, federal) */}
          <div className="grid grid-cols-4 gap-x-6 items-start">
            {stops.map((s, i) => (
              <div key={s.n} className="pt-7">
                {i % 2 === 1 && <Card s={s} on={active === i} onActivate={() => setActive(i)} />}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stacked journey (mobile) */}
        <div className="space-y-4 lg:hidden">
          {stops.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="relative pl-11">
              <span className="absolute left-0 top-1 flex h-full flex-col items-center">
                <Node s={s} on={false} />
                {i < stops.length - 1 && <span className="mt-1 w-px flex-1 bg-[#e8ecea]" />}
              </span>
              <Card s={s} on={false} onActivate={() => {}} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
