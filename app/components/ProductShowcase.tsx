import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { featureIcon } from "../lib/featureIcon";

type BadgeTone = "clear" | "info" | "pending";

export type ShowcaseBadge = {
  label: string;
  tone?: BadgeTone;
  /** Tailwind position utilities, e.g. "-top-4 -left-4" */
  position: string;
};

type Props = {
  eyebrow: string;
  title: string;
  /** Optional trailing portion of the title rendered in the accent color */
  highlight?: string;
  description: string;
  bullets: string[];
  /** Static screenshot. Ignored when `mockup` is provided. */
  image?: string;
  imageAlt?: string;
  /** Coded mockup rendered inside the product frame instead of `image`. */
  mockup?: ReactNode;
  badges?: ShowcaseBadge[];
  /** Place the image on the left instead of the right */
  reversed?: boolean;
  /** Give the media column extra width (for wide coded mockups). */
  wideMedia?: boolean;
};

const toneStyle: Record<BadgeTone, { dot: string; text: string }> = {
  clear: { dot: "bg-emerald-500", text: "text-emerald-700" },
  info: { dot: "bg-[#058B74]", text: "text-[#01463A]" },
  pending: { dot: "bg-amber-400", text: "text-amber-600" },
};

function Badge({ label, tone = "info", position }: ShowcaseBadge) {
  const s = toneStyle[tone];
  return (
    <div
      className={`hidden sm:flex absolute ${position} z-20 items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/10 ring-1 ring-black/5`}
    >
      <span className="relative flex items-center justify-center">
        <span className={`absolute w-2 h-2 rounded-full ${s.dot} animate-ping opacity-60`} />
        <span className={`relative w-1.5 h-1.5 rounded-full ${s.dot}`} />
      </span>
      <span className={`text-[11px] font-semibold whitespace-nowrap ${s.text}`}>{label}</span>
    </div>
  );
}

export default function ProductShowcase({
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  image,
  imageAlt,
  mockup,
  badges = [],
  reversed = false,
  wideMedia = false,
}: Props) {
  return (
    <section className="bg-white py-14 sm:py-20 px-5 sm:px-6 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className={`grid gap-10 lg:gap-16 items-center ${wideMedia ? "lg:grid-cols-[0.8fr_1.2fr]" : "lg:grid-cols-2"}`}>
          {/* Copy */}
          <div className={reversed ? "lg:order-2" : ""}>
            <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              {eyebrow}
            </Reveal>
            <Reveal as="h2" delay={80} className="text-[1.75rem] sm:text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              {title}
              {highlight ? <span className="text-[#058B74]"> {highlight}</span> : null}
            </Reveal>
            <Reveal as="p" delay={160} className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">
              {description}
            </Reveal>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <Reveal as="li" key={b} delay={220 + i * 70} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15">
                    {featureIcon(b, "h-3.5 w-3.5")}
                  </span>
                  {b}
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Product mockup */}
          <Reveal variant={reversed ? "left" : "right"} delay={120} className={reversed ? "lg:order-1" : ""}>
            <div className="relative">
              {/* Ambient accent glow */}
              <div className="hidden sm:block absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#058B74]/10 to-transparent blur-2xl" />

              {/* Product frame */}
              <div className="rounded-2xl bg-white shadow-2xl shadow-[#01463A]/10 ring-1 ring-gray-200 overflow-hidden">
                {mockup ? (
                  mockup
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt={imageAlt} loading="lazy" className="block w-full h-auto" />
                )}
              </div>

              {/* Floating status badges (Checkr-style) */}
              {badges.map((b) => (
                <Badge key={b.label} {...b} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
