"use client";

/* Professional light "key figures" section shared across the service pages.
   Untitled-UI-grade surface: two-part header, a bordered record panel with a
   labeled status bar, restrained figures in a divided row (no billboard
   numbers, no dark panel), accent detailing, and a quiet confirmed strip.
   Props are unchanged across every page. */

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import CountUp from "./reactbits/CountUp";
import { featureIcon } from "../lib/featureIcon";

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
            <Reveal as="p" className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
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

        {/* Key figures — a calm, bordered stat card divided into three */}
        <Reveal
          delay={160}
          variant="fade"
          className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((m, i) => (
              <Reveal
                key={m.unit}
                delay={200 + i * 90}
                variant="fade"
                className="flex flex-col gap-4 p-8"
              >
                <div className="flex items-center gap-3">
                  {m.icon && (
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#058B74]/10 text-[#058B74]">
                      {m.icon}
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {m.unit}
                  </span>
                </div>

                <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-[#01463A] tabular-nums">
                  <Figure m={m} />
                </span>

                <p className="text-sm leading-relaxed text-gray-500">{m.note}</p>
              </Reveal>
            ))}
          </div>

          {/* Supporting points — quiet, checked, sentence case */}
          <div className="flex flex-wrap gap-x-7 gap-y-2.5 border-t border-gray-100 bg-gray-50/60 px-8 py-5">
            {support.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-[13px] text-gray-600">
                <span className="text-[#058B74]">{featureIcon(s, "h-4 w-4")}</span>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
