"use client";

/* Professional light "key figures" section shared across the service pages.
   Untitled-UI-grade surface: two-part header, a bordered record panel with a
   labeled status bar, restrained figures in a divided row (no billboard
   numbers, no dark panel), accent detailing, and a quiet confirmed strip.
   Props are unchanged across every page. */

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import CountUp from "./reactbits/CountUp";

export type ServiceMetric = {
  /** Animated count target. Omit and use `value` for non-numeric figures. */
  to?: number;
  value?: string;
  suffix?: string;
  separator?: boolean;
  unit: string;
  note: string;
  icon?: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  metrics: ServiceMetric[];
  support: string[];
  variant?: "cards" | "divided" | "feature";
  align?: "left" | "center";
  supportStyle?: "bar" | "chips";
};

function Figure({ m }: { m: ServiceMetric }) {
  return m.to != null ? (
    <CountUp to={m.to} suffix={m.suffix ?? ""} separator={m.separator} />
  ) : (
    <span>{m.value}</span>
  );
}

const Check = () => (
  <svg aria-hidden width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function ServiceMetrics({
  eyebrow,
  title,
  intro,
  metrics,
  support,
}: Props) {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-5xl">
        {/* Header — eyebrow + title left, intro right */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Reveal as="p" className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
              <span className="h-px w-6 bg-[#058B74]/40" />
              {eyebrow}
            </Reveal>
            <Reveal as="h3" delay={80} className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#01463A] md:text-[2.6rem]">
              {title}
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="text-[15px] leading-relaxed text-gray-500 md:pb-2">
            {intro}
          </Reveal>
        </div>

        {/* Record panel — bordered surface, status bar, divided figure row */}
        <Reveal
          delay={160}
          variant="fade"
          className="mt-12 overflow-hidden rounded-2xl border border-[#01463A]/10 bg-white shadow-[0_1px_0_rgba(1,70,58,0.04),0_24px_48px_-32px_rgba(1,70,58,0.25)]"
        >
          {/* status bar */}
          <div className="flex items-center justify-between gap-3 border-b border-[#01463A]/[0.08] bg-[#f7faf9] px-6 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] sm:px-8">
            <span className="inline-flex items-center gap-2 text-[#01463A]/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#058B74] motion-safe:animate-pulse" />
              {eyebrow} · record
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#058B74]/10 px-2.5 py-1 text-[#058B74]">
              <Check /> verified
            </span>
          </div>

          {/* figure row */}
          <div className="grid divide-y divide-[#01463A]/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((m, i) => (
              <Reveal
                key={m.unit}
                delay={200 + i * 90}
                variant="fade"
                className="group relative flex flex-col gap-4 p-7 transition-colors duration-300 hover:bg-[#f7faf9] sm:p-8"
              >
                {/* top accent that grows on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#058B74] to-[#5EE3C0] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-center gap-2.5">
                  {m.icon && (
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#058B74]/10 text-[#058B74] transition-colors duration-300 group-hover:bg-[#058B74] group-hover:text-white">
                      {m.icon}
                    </span>
                  )}
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#058B74]/90">
                    {m.unit}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.02em] text-[#01463A] tabular-nums">
                    <Figure m={m} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#058B74]/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-[13px] leading-relaxed text-gray-500">{m.note}</p>
              </Reveal>
            ))}
          </div>

          {/* supporting fields — confirmed strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#01463A]/[0.08] bg-[#f7faf9] px-6 py-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-gray-500 sm:px-8">
            {support.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-[#01463A]/55">
                <span className="text-[#058B74]"><Check /></span>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
