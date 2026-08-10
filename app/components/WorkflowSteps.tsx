"use client";

import { useEffect, useRef, useState } from "react";
import HoverVideo from "./HoverVideo";
import Reveal from "./Reveal";
import SectionHeader from "./ui/SectionHeader";

type Step = {
  num: string;
  short: string;
  title: string;
  eyebrow: string;
  desc: string;
  bullets: string[];
  image: string;
  video?: string;
};

const deepDive: Step[] = [
  {
    num: "01",
    short: "Place the order",
    title: "Rapid account creation and order placement.",
    eyebrow: "Client setup",
    desc: "Create an account, access your centralized dashboard, and select a predefined package or custom-built bundle. You only need to input the applicant's name and email — the platform handles everything that follows.",
    bullets: [
      "Centralized dashboard access",
      "Predefined or custom-built bundles",
      "Name and email are the only inputs needed",
    ],
    image: "/assets/soft-capture/Home-img.png",
    video: "/assets/soft-capture/Home-vdo.mov",
  },
  {
    num: "02",
    short: "Applicant invited",
    title: "Automated candidate invitation.",
    eyebrow: "Secure dispatch",
    desc: "The platform immediately dispatches a secure, time-limited automated invitation to your candidate — no manual outreach or coordination required from your team.",
    bullets: [
      "Instant automated dispatch",
      "Secure, time-limited access link",
      "No manual follow-up required",
    ],
    image: "/assets/soft-capture/Step%202.png",
    video: "/assets/soft-capture/Step%202%20vdo.mov",
  },
  {
    num: "03",
    short: "Secure submission",
    title: "Secure applicant submission flow.",
    eyebrow: "Candidate experience",
    desc: "Candidates complete a mobile-optimized flow that captures FCRA consent, SSN, address history, a government-issued ID upload, and a live selfie for identity verification.",
    bullets: [
      "Mobile-optimized experience",
      "FCRA consent, SSN, and address history",
      "Government ID upload and selfie verification",
    ],
    image: "/assets/soft-capture/step%203.png",
  },
  {
    num: "04",
    short: "Payment & checks",
    title: "Smart payment and investigation processing.",
    eyebrow: "Billing & checks",
    desc: "Automated billing triggers only upon the applicant's submission — you never pay for drop-offs. The background checks and investigative verifications begin immediately after authorization.",
    bullets: [
      "Billing triggers only on submission",
      "No charges for incomplete invitations",
      "Investigations begin immediately after consent",
    ],
    image: "/assets/soft-capture/step%204.png",
  },
  {
    num: "05",
    short: "Report delivered",
    title: "Clear reporting and instant notifications.",
    eyebrow: "Final delivery",
    desc: "The system generates a branded, FCRA-compliant PDF report and notifies your team via instant email and dashboard alerts the moment it is ready for review.",
    bullets: [
      "Branded, FCRA-compliant PDF report",
      "Instant email and dashboard alerts",
      "Real-time status visibility throughout",
    ],
    image: "/assets/soft-capture/step%205.png",
  },
];

export default function WorkflowSteps() {
  // Which step is centered in the viewport — drives the spine's progress fill
  // and the active node, so the five steps read as one connected sequence.
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className="scroll-mt-40 bg-white px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="center"
          eyebrow="The workflow"
          title="Five steps, start to cleared report."
          intro="Automated, tracked, and mobile-first the whole way — from the moment you place an order to the branded PDF landing in your dashboard."
        />

        {/* ── At a glance: the whole route before the deep-dive ── */}
        <Reveal delay={120} className="mt-14 sm:mt-16">
          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-0">
            {deepDive.map((step, i) => (
              <li key={step.num} className="relative flex flex-col items-center px-2 text-center">
                {/* connector into the next chip (desktop row only) */}
                {i < deepDive.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-5 hidden h-px w-full bg-[#E1E6E2] md:block"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8F6] font-mono text-[13px] font-semibold text-[#058B74] ring-1 ring-[#E1E6E2]">
                  {step.num}
                </span>
                <p className="mt-3 text-[13px] font-semibold leading-snug text-[#01463A]">
                  {step.short}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9AA8A1]">
                  {step.eyebrow}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* ── Deep-dive steps, threaded onto a connected spine ── */}
        <div className="mt-20 sm:mt-24">
          {deepDive.map((step, i) => {
            const reversed = i % 2 === 1;
            const nodeOn = i <= active;
            const segmentOn = i < active;
            const isLast = i === deepDive.length - 1;
            return (
              <div
                key={step.num}
                data-index={i}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="grid grid-cols-[40px_1fr] gap-x-4 pb-16 last:pb-0 sm:grid-cols-[64px_1fr] sm:gap-x-8 sm:pb-24"
              >
                {/* Spine rail: node + connecting segment that bridges the row
                    gap (pb-16/24) so the five nodes read as one continuous line */}
                <div className="relative flex justify-center">
                  {!isLast && (
                    <span
                      aria-hidden
                      className={`absolute left-1/2 top-10 bottom-[-4rem] w-[2px] -translate-x-1/2 transition-colors duration-500 sm:top-12 sm:bottom-[-6rem] ${
                        segmentOn ? "bg-[#058B74]" : "bg-[#E1E6E2]"
                      }`}
                    />
                  )}
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-mono text-[13px] font-semibold transition-all duration-500 sm:h-12 sm:w-12 sm:text-[15px] ${
                      nodeOn
                        ? "bg-[#058B74] text-white shadow-[0_0_0_5px_rgba(5,139,116,0.12)]"
                        : "bg-white text-[#9AA8A1] ring-1 ring-[#E1E6E2]"
                    }`}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content: alternating copy / media split within the rail */}
                <Reveal variant="up" className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-3 text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.01em] text-[#01463A] md:text-[2.1rem]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#5B6B64]">
                      {step.desc}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-[#1B2C25]">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12l5 5 9-11" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`group relative ${reversed ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#E1E6E2] bg-[#01463A] shadow-[0_28px_56px_-24px_rgba(4,20,14,0.45)]">
                      {step.video ? (
                        <HoverVideo poster={step.image} video={step.video} alt={step.title} />
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={step.image}
                          alt={step.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      )}
                      {/* top scrim so the badge always reads */}
                      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        Step {step.num}
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 -z-10 hidden h-24 w-24 rounded-2xl bg-[#058B74]/15 sm:block" />
                    <div className="absolute -left-6 -top-6 -z-10 hidden h-20 w-20 rounded-2xl bg-[#01463A]/10 sm:block" />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
