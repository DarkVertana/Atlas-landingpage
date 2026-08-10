type Pillar = {
  title: string;
  detail: string;
  color: string;
  icon: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "All-50-state coverage",
    detail: "County, state & federal records.",
    color: "#10B981",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
    ),
  },
  {
    title: "Results in 2–3 days",
    detail: "Most checks clear within 24 hours.",
    color: "#F59E0B",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Pay per completed check",
    detail: "No setup fees, no subscription.",
    color: "#2563EB",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10z" />
        <circle cx="8" cy="8" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Real-time status tracking",
    detail: "Live updates in your dashboard.",
    color: "#7C3AED",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2 6 4-14 2 8h6" />
      </svg>
    ),
  },
];

function Chip({ p }: { p: Pillar }) {
  return (
    <div className="mx-4 flex shrink-0 items-center gap-2.5">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10">
        {p.icon}
      </span>
      <span className="text-sm font-semibold text-[#01463A]">{p.title}</span>
      <span className="hidden text-sm text-[#7B8983] sm:inline">{p.detail}</span>
      <span className="ml-2 h-1 w-1 rounded-full bg-[#058B74]/25" />
    </div>
  );
}

export default function NumbersStrip() {
  // Duplicated track → the marquee keyframe shifts by -50% for a seamless loop.
  const track = [...pillars, ...pillars];

  return (
    <section className="border-y border-[#E4E9E6] bg-[#F7F8F6] py-7 sm:py-8">
      <div className="group relative overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F7F8F6] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F7F8F6] to-transparent" />

        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {track.map((p, i) => (
            <Chip key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
