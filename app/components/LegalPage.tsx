"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./ui/SectionHeader";

type Section = { id: string; title: string };

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  lastUpdated?: string;
  sections: Section[];
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero — deep-green→teal gradient with layered depth */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74] px-5 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20">
        {/* Primary blur blob */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#0aa88a]/20 blur-3xl" />
        {/* Second offset blob for extra depth */}
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#058B74]/25 blur-3xl" />
        {/* Faint dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            tone="light"
            as="h1"
          />
          {lastUpdated && (
            <Reveal
              as="p"
              delay={240}
              className="mt-6 text-xs uppercase tracking-widest text-white/60"
            >
              Last updated · {lastUpdated}
            </Reveal>
          )}
        </div>
      </section>

      {/* Content + sticky sidebar TOC */}
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
          <article className="min-w-0 space-y-12">{children}</article>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                On this page
              </p>
              <nav className="flex flex-col">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-2 rounded-md py-2.5 text-sm text-[#01463A] transition-colors hover:text-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#058B74]/30 transition-all group-hover:w-2 group-hover:bg-[#058B74]" />
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal
        as="h2"
        className="text-xl font-bold leading-tight text-[#01463A] md:text-2xl"
      >
        {title}
      </Reveal>
      <Reveal
        delay={80}
        className="mt-4 max-w-[68ch] space-y-4 text-[15px] leading-relaxed text-gray-700 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-[#01463A] [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#01463A] [&_a]:rounded [&_a:focus-visible]:outline-none [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-[#058B74] [&_a:focus-visible]:ring-offset-2"
      >
        {children}
      </Reveal>
    </section>
  );
}
