const stats = [
  {
    value: "99.8%",
    label: "Report accuracy",
    detail: "Multi-source verification",
  },
  {
    value: "24hr",
    label: "Avg. turnaround",
    detail: "Most reports delivered same-day",
  },
  {
    value: "10K+",
    label: "Screenings completed",
    detail: "Across employers & property managers",
  },
  {
    value: "500+",
    label: "Businesses onboarded",
    detail: "From staffing to healthcare",
  },
];

export default function NumbersStrip() {
  return (
    <section className="relative bg-[#01463A] py-16 md:py-20 px-6 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#058B74]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#0aa88a]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center px-4 ${
              i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
            }`}
          >
            <p className="text-3xl md:text-4xl font-bold text-white leading-none">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
            <p className="mt-1 text-[11px] text-white/50 leading-relaxed">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
