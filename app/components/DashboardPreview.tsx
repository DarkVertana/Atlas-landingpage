"use client";

import { useRef, useCallback, useEffect, useState } from "react";

function DashboardFrame() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/8 border border-gray-100 overflow-hidden w-full max-w-[880px] select-none">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1 text-[10px] text-gray-400 border border-gray-100 w-56">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M8 4a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" />
              <path d="M4.5 7a3.5 3.5 0 117 0c0 2-3.5 5.5-3.5 5.5S4.5 9 4.5 7z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            app.atlasscreening.com
          </div>
        </div>
      </div>

      {/* Real product screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/app/customer-dashboard.png"
        alt="Atlas Screening candidate dashboard"
        loading="lazy"
        className="block w-full h-auto"
      />
    </div>
  );
}

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const raw = (windowH - rect.top) / (windowH + rect.height * 0.3);
    setScrollProgress(Math.max(0, Math.min(raw, 1)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const eased = 1 - Math.pow(1 - Math.min(scrollProgress * 2, 1), 3);
  const rotateX = 8 - 8 * eased;
  const rotateY = -4 + 4 * eased;
  const opacity = Math.min(eased * 1.5, 1);

  return (
    <section ref={sectionRef} className="py-28 px-6 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            Dashboard
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
            Everything you need.{" "}
            <span className="text-[#058B74]">One dashboard.</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Track every background check end-to-end — status, results, and flags
            at a glance, from the moment you order to the final report.
          </p>
        </div>

        {/* Dashboard */}
        <div
          className="flex justify-center"
          style={{ perspective: "1400px", opacity }}
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.15s ease-out",
              transformOrigin: "center center",
            }}
          >
            <DashboardFrame />
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {[
            "Real-time status tracking",
            "Step-by-step progress",
            "Instant report access",
            "Order in minutes",
            "Support built in",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5l3 3 7-7" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs text-gray-600">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
