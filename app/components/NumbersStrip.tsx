import Reveal from "./Reveal";

const stats = [
  { value: "Compliant", detail: "FCRA & state law adherence" },
  { value: "Accurate", detail: "Multi-source verification" },
  { value: "Timely", detail: "Prompt report delivery" },
  { value: "Trusted", detail: "Employers & property managers" },
];

export default function NumbersStrip() {
  return (
    <section className="relative bg-[#01463A] py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#058B74]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#0aa88a]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-6 md:gap-12">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.value}
            delay={i * 120}
            variant="scale"
            className={`text-center px-2 sm:px-4 ${
              i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
            }`}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] text-white/50 leading-relaxed">{stat.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
