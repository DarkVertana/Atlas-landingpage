"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import DotField from "./reactbits/DotField";
import CardSwap, { Card } from "./reactbits/CardSwap";

/* Anatomy of a report — a rotating 3D deck (ReactBits CardSwap) where each card
   is one facet of the report, but rendered in the live app's own visual language
   (light surface, dark-green brand, real status pills) so it reads as a genuine
   product artifact rather than an abstract mockup. The left index lights up in
   sync with whichever card is at the front. */

const MINT = "94,227,192";

const parts = [
  {
    n: "01",
    title: "A verdict, up top",
    body: "Every report opens with one clear eligibility call, so there's no scrolling to find where the candidate landed.",
  },
  {
    n: "02",
    title: "Each check, itemized",
    body: "Criminal, identity, employment, watchlist: every search listed with its jurisdiction and the date it cleared.",
  },
  {
    n: "03",
    title: "Findings surfaced, not buried",
    body: "Anything needing a second look is flagged in amber with its source, so your team never misses it.",
  },
  {
    n: "04",
    title: "Compliance on the record",
    body: "FCRA consent, adjudication basis, and turnaround are printed on the report itself, defensible by design.",
  },
];

const checkRows = [
  { label: "Identity & SSN trace", meta: "3 sources" },
  { label: "Criminal search", meta: "12 jurisdictions" },
  { label: "Employment verification", meta: "2 employers" },
  { label: "Global watchlist", meta: "OFAC · Interpol" },
];

/* ── document primitives (light product surface, matches the live app) ── */

const TickGreen = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-[15px] w-[15px] shrink-0">
    <circle cx="8" cy="8" r="8" fill="#128A5E" />
    <path d="M4.6 8.1l2.1 2.1 4.6-4.7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* the app-style window chrome shared by every card */
function CardShell({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-white ring-1 ring-black/[0.06] shadow-[0_2px_4px_rgba(4,20,14,0.04),0_28px_56px_-24px_rgba(4,20,14,0.55)]">
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-white px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[#0C3A2C] font-mono text-[10px] font-semibold text-[#7FE9C8]">
            {n}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6E67]">{label}</span>
        </div>
        <span className="font-mono text-[10.5px] tracking-wide text-[#AAB6B0]">BGC-2026-4042</span>
      </div>
      <div className="flex flex-1 flex-col bg-[#FBFCFB] px-5 py-4">{children}</div>
    </div>
  );
}

export default function AIFeatures() {
  const [front, setFront] = useState(0);

  return (
    <section id="security" className="relative overflow-hidden bg-[#04140E] px-4 py-24 text-white sm:px-6 sm:py-32">
      <DotField
        className="pointer-events-none absolute inset-0 opacity-50"
        color="255,255,255"
        glowColor={MINT}
        baseAlpha={0.05}
        dotRadius={0.9}
        dotSpacing={16}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(94,227,192,0.12), transparent)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        {/* ── Left: the four parts, synced to the deck ── */}
        <div>
          <Reveal as="span" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#5EE3C0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5EE3C0] shadow-[0_0_10px_2px_rgba(94,227,192,0.6)]" />
            Anatomy of a report
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.02em] text-white md:text-[3.1rem] [text-wrap:balance]">
            Everything a hiring decision needs, on one page.
          </Reveal>
          <Reveal as="p" delay={150} className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/55">
            Not a data dump. Every Atlas report is built the same four ways.
            Watch each part surface, or read them below.
          </Reveal>

          <ul className="mt-9 flex flex-col gap-1.5">
            {parts.map((p, i) => {
              const on = front === i;
              return (
                <li key={p.n}>
                  <div
                    className={`relative flex items-start gap-4 rounded-xl border px-4 py-3 transition-all duration-500 ${
                      on ? "border-[#5EE3C0]/25 bg-white/[0.05]" : "border-transparent"
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-mono text-[12px] font-medium tabular-nums transition-colors duration-500 ${
                        on ? "text-[#5EE3C0]" : "text-white/30"
                      }`}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3 className={`text-[15.5px] font-semibold transition-colors duration-500 ${on ? "text-white" : "text-white/55"}`}>
                        {p.title}
                      </h3>
                      <p
                        className={`grid overflow-hidden text-[13.5px] leading-relaxed text-white/50 transition-all duration-500 ${
                          on ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="min-h-0">{p.body}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Right: the rotating report deck ── */}
        <Reveal variant="scale" delay={120} className="relative h-[520px] sm:h-[600px]">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent)]" />
          <CardSwap
            width={520}
            height={384}
            cardDistance={38}
            verticalDistance={62}
            delay={3400}
            skewAmount={3}
            onFront={setFront}
            className="!bottom-1/2 !right-1/2 translate-x-1/2 translate-y-[calc(50%+34px)]"
          >
            {/* 01 · Verdict */}
            <Card>
              <CardShell n="01" label="Verdict">
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0C3A2C] text-[14px] font-semibold text-white">
                      AM
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[20px] font-semibold tracking-[-0.01em] text-[#12211B]">Alex Morgan</p>
                      <p className="mt-0.5 text-[12.5px] text-[#5B6E67]">Standard package · Jul 30, 2026</p>
                    </div>
                    <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E4F4EC] px-3 py-1.5 text-[12px] font-semibold text-[#0E7A50] ring-1 ring-inset ring-[#0E7A50]/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12A365]" /> Eligible
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.06]">
                    {[
                      { v: "4 / 4", l: "Checks cleared" },
                      { v: "12", l: "Jurisdictions" },
                      { v: "2 days", l: "Turnaround" },
                    ].map((s) => (
                      <div key={s.l} className="bg-white px-3 py-2.5">
                        <p className="text-[16px] font-semibold tracking-tight text-[#12211B]">{s.v}</p>
                        <p className="mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[#83948C]">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardShell>
            </Card>

            {/* 02 · Checks */}
            <Card>
              <CardShell n="02" label="Checks">
                <ul className="flex flex-1 flex-col justify-center">
                  {checkRows.map((c, i) => (
                    <li key={c.label} className={`flex items-center gap-3 py-2 ${i > 0 ? "border-t border-black/[0.05]" : ""}`}>
                      <TickGreen />
                      <span className="text-[13.5px] font-medium text-[#1B2C25]">{c.label}</span>
                      <span className="text-[12px] text-[#83948C]">{c.meta}</span>
                      <span className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-[#E8F4EE] px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#0E7A50]">Clear</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[12px]">
                  <span className="text-[#5B6E67]">4 of 4 searches returned</span>
                  <span className="font-semibold text-[#0E7A50]">No adverse records</span>
                </div>
              </CardShell>
            </Card>

            {/* 03 · Finding */}
            <Card>
              <CardShell n="03" label="Finding">
                <div className="flex flex-1 flex-col justify-center">
                  <div className="rounded-xl border border-[#E7C583] bg-[#FBF3E1] px-4 py-3.5">
                    <div className="flex items-start gap-3">
                      <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0">
                        <circle cx="8" cy="8" r="8" fill="#E29A18" />
                        <path d="M8 4.4v4M8 11h.01" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      <div>
                        <p className="text-[13.5px] font-semibold text-[#7A5410]">1 item to review: Motor vehicle record</p>
                        <p className="mt-0.5 text-[12.5px] text-[#987A3E]">Source · State DMV · minor infraction, 2023</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 border-t border-[#E7C583]/70 pt-3">
                      <button className="rounded-lg bg-[#0C3A2C] px-3 py-1.5 text-[11.5px] font-semibold text-white">Review record</button>
                      <span className="text-[11.5px] text-[#987A3E]">Awaiting adjudicator sign-off</span>
                    </div>
                  </div>
                </div>
              </CardShell>
            </Card>

            {/* 04 · Compliance */}
            <Card>
              <CardShell n="04" label="Compliance">
                <div className="flex flex-1 flex-col justify-center gap-2.5">
                  <div className="flex items-center gap-2.5 text-[13px] text-[#1B2C25]">
                    <TickGreen /> FCRA consent on file
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-[#1B2C25]">
                    <TickGreen /> Adjudicated · FCRA &amp; EEOC guidance
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-[#1B2C25]">
                    <TickGreen /> Signed digitally · 2-day turnaround
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] pt-3">
                    <div>
                      <p className="text-[12.5px] font-semibold text-[#12211B]">Atlas Screening, Inc.</p>
                      <p className="text-[11px] text-[#83948C]">Adjudicator · e-signed Jul 30, 2026</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E8F4EE] px-2.5 py-1 text-[11px] font-semibold text-[#0E7A50]">
                      <TickGreen /> Verified
                    </span>
                  </div>
                </div>
              </CardShell>
            </Card>
          </CardSwap>
        </Reveal>
      </div>
    </section>
  );
}
