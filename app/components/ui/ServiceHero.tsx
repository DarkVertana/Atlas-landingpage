import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { startScreeningHref, type StartParams } from "../../lib/appUrl";

/* One hero for every /services page. Centered, restrained, and identical
   across the whole set — the eyebrow, display heading, and lede sit on a single
   scale so no service page drifts from the others.

   `steps` renders the signature "foreshadow" row (borrowed from the criminal
   page's National → State → County → Federal ladder): a mono chip sequence that
   previews the section below and gives each page a creative, on-subject beat
   without breaking the shared shape. Page-specific extras (a price pill, CTAs)
   go in `children`, directly under it. */

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  steps?: string[];
  /** Optional service image, rendered as a subtle textured backdrop behind the gradient. */
  image?: string;
  /** When set, renders a built-in "Start screening" (app deep-link) + "Talk to sales" CTA pair. */
  start?: StartParams;
  children?: ReactNode;
};

export default function ServiceHero({ eyebrow, title, description, steps, image, start, children }: Props) {
  return (
    <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-[radial-gradient(125%_95%_at_50%_-10%,#0f5646_0%,#0a2c26_40%,#06171a_74%,#040d10_100%)]">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-luminosity pointer-events-none"
          />
          <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,rgba(15,86,70,0.55)_0%,rgba(6,23,26,0.9)_74%,rgba(4,13,16,0.96)_100%)] pointer-events-none" />
        </>
      )}
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#3E92CC]/10 blur-3xl pointer-events-none" />
      {/* faint depth grid — a quiet, shared texture across every service hero */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "100% 44px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal
          as="p"
          className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-5"
        >
          {eyebrow}
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="text-[2rem] md:text-5xl font-bold text-white leading-[1.08]"
        >
          {title}
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed sm:text-xl"
        >
          {description}
        </Reveal>

        {steps && steps.length > 0 && (
          <Reveal
            delay={240}
            className="mt-9 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/90"
          >
            {steps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-[#5EE3C0]/60">→</span>}
                <span className="px-1 py-1">{step}</span>
              </span>
            ))}
          </Reveal>
        )}

        {start && (
          <Reveal delay={280} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={startScreeningHref(start)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-[#01463A] px-5 py-3 min-h-[44px] rounded-xl text-sm font-semibold hover:bg-white/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
            >
              Start screening
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 min-h-[44px] rounded-xl text-sm font-semibold hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
            >
              Talk to sales
            </Link>
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}
