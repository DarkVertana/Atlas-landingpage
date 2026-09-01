"use client";

import { useRef, useCallback, useEffect } from "react";

function DashboardFrame() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/8 border border-gray-100 overflow-hidden w-full max-w-[880px] select-none">
      {/* Real product screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/app/customer-dashboard.webp"
        alt="Atlas Screening candidate dashboard"
        loading="lazy"
        className="block w-full h-auto"
      />
    </div>
  );
}

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const reducedMotion = useRef(false);

  // Scroll-linked tilt settle. Styles are written straight to the DOM on one
  // rAF pass (no per-frame React re-render), and only while the section is on
  // screen — the same discipline the hero uses — so scrolling stays smooth and
  // costs nothing once this section is scrolled away.
  const updateFrame = useCallback(() => {
    const wrap = wrapRef.current;
    const tilt = tiltRef.current;
    const section = sectionRef.current;
    if (!wrap || !tilt || !section) return;
    if (reducedMotion.current) {
      tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
      wrap.style.opacity = "1";
      return;
    }
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;
    const raw = (windowH - rect.top) / (windowH + rect.height * 0.3);
    const progress = Math.max(0, Math.min(raw, 1));
    const eased = 1 - Math.pow(1 - Math.min(progress * 2, 1), 3);
    tilt.style.transform = `rotateX(${8 - 8 * eased}deg) rotateY(${-4 + 4 * eased}deg)`;
    wrap.style.opacity = `${Math.min(eased * 1.5, 1)}`;
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    let onScreen = true;

    const onScroll = () => {
      if (!onScreen) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateFrame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) updateFrame();
        else cancelAnimationFrame(rafId.current);
      },
      { threshold: 0 }
    );
    if (section) io.observe(section);

    updateFrame();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [updateFrame]);

  return (
    <section ref={sectionRef} className="py-16 px-5 sm:px-6 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            Dashboard
          </p>
          <h2 className="text-[1.75rem] md:text-5xl font-bold text-[#01463A] leading-tight">
            Everything you need.{" "}
            <span className="text-[#058B74]">One dashboard.</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Track every background check end-to-end: status, results, and flags
            at a glance, from the moment you order to the final report.
          </p>
        </div>

        {/* Dashboard */}
        <div
          ref={wrapRef}
          className="flex justify-center"
          style={{ perspective: "1400px", opacity: 0 }}
        >
          <div
            ref={tiltRef}
            style={{
              transform: "rotateX(8deg) rotateY(-4deg)",
              transition: "transform 0.15s ease-out",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <DashboardFrame />
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
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
