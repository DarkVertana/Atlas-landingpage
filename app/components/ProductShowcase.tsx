import Reveal from "./Reveal";

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
  image: string;
  imageAlt: string;
  badges?: ShowcaseBadge[];
  /** Place the image on the left instead of the right */
  reversed?: boolean;
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
  badges = [],
  reversed = false,
}: Props) {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className={reversed ? "lg:order-2" : ""}>
            <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              {eyebrow}
            </Reveal>
            <Reveal as="h2" delay={80} className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              {title}
              {highlight ? <span className="text-[#058B74]"> {highlight}</span> : null}
            </Reveal>
            <Reveal as="p" delay={160} className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">
              {description}
            </Reveal>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <Reveal as="li" key={b} delay={220 + i * 70} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/15">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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

              {/* Browser frame */}
              <div className="rounded-2xl bg-white shadow-2xl shadow-[#01463A]/10 ring-1 ring-gray-200 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1 text-[10px] text-gray-400 border border-gray-100 w-52">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path d="M8 4a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" />
                        <path d="M4.5 7a3.5 3.5 0 117 0c0 2-3.5 5.5-3.5 5.5S4.5 9 4.5 7z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      </svg>
                      app.atlasscreening.com
                    </div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={imageAlt} loading="lazy" className="block w-full h-auto" />
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
