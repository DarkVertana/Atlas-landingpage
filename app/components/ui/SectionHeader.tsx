import Reveal from "../Reveal";

/* One header treatment for every section: a teal eyebrow, a display heading on
   a single scale, and an optional intro at a consistent measure. Keeps the whole
   site typographically aligned. */

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light"; // light = for dark backgrounds (white text)
  className?: string;
  as?: "h1" | "h2"; // page heroes pass "h1" so every route has exactly one H1
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
  as = "h2",
}: Props) {
  const centered = align === "center";
  // Neutral ink titles on light backgrounds; green stays only in the eyebrow.
  const heading = tone === "light" ? "text-white" : "text-[#14201C]";
  const body = tone === "light" ? "text-white/60" : "text-[#5A6560]";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <Reveal
        as="span"
        className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74] ${
          centered ? "justify-center" : ""
        }`}
      >
        {!centered && <span className="h-px w-8 bg-[#058B74]/40" />}
        {eyebrow}
      </Reveal>

      <Reveal
        as={as}
        delay={80}
        className={`mt-5 text-[2.25rem] font-semibold leading-[1.04] md:text-[3.25rem] ${heading}`}
      >
        {title}
      </Reveal>

      {intro && (
        <Reveal
          as="p"
          delay={160}
          className={`mt-6 text-[16px] leading-relaxed ${body} ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  );
}
