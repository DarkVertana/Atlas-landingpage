import type { ReactNode } from "react";
import Reveal from "../Reveal";

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
  children?: ReactNode;
};

export default function ServiceHero({ eyebrow, title, description, steps, children }: Props) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/25 blur-3xl pointer-events-none" />
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
          className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 mb-5"
        >
          <span className="h-px w-6 bg-white/30" />
          {eyebrow}
          <span className="h-px w-6 bg-white/30" />
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
          className="mt-6 text-white/70 max-w-2xl mx-auto text-[15px] leading-relaxed"
        >
          {description}
        </Reveal>

        {steps && steps.length > 0 && (
          <Reveal
            delay={240}
            className="mt-9 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/75"
          >
            {steps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-[#5EE3C0]/60">→</span>}
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  {step}
                </span>
              </span>
            ))}
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}
