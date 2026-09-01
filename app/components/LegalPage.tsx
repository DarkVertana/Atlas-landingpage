"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeader from "./ui/SectionHeader";

type Section = { id: string; title: string };

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  lastUpdated?: string;
  sections: Section[];
  /** Optional hero image, rendered as a subtle textured backdrop behind the gradient. */
  image?: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
  image,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero — matches the service pages' dark radial hero for a consistent look */}
      <section className="relative overflow-hidden bg-[radial-gradient(125%_95%_at_50%_-10%,#0f5646_0%,#0a2c26_40%,#06171a_74%,#040d10_100%)] px-5 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20">
        {image && (
          <>
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="pointer-events-none object-cover opacity-25 mix-blend-luminosity"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,rgba(15,86,70,0.55)_0%,rgba(6,23,26,0.9)_74%,rgba(4,13,16,0.96)_100%)]" />
          </>
        )}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#0aa88a]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-[#3E92CC]/10 blur-3xl" />
        {/* faint depth grid — the same quiet texture the service heroes use */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "100% 44px",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            tone="light"
            as="h1"
            align="center"
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
