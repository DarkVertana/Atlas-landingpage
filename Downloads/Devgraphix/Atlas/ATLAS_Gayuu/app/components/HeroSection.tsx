"use client";

import { useEffect, useRef, useCallback } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paddingRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  const updateStyles = useCallback(() => {
    if (!sectionRef.current || !paddingRef.current || !innerRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = sectionRef.current.offsetHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(scrolled / (sectionHeight * 0.4), 1));

    // Ease-out curve for smoother feel
    const eased = 1 - Math.pow(1 - progress, 3);

    const isMobile = window.innerWidth < 768;
    const maxPad = isMobile ? 10 : 24;
    const maxRad = isMobile ? 12 : 24;
    const padding = eased * maxPad;
    const radius = eased * maxRad;

    paddingRef.current.style.padding = `${padding}px`;
    innerRef.current.style.borderRadius = `${radius}px`;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateStyles);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateStyles]);

  return (
    <div ref={sectionRef} className="h-screen relative z-0">
      <div ref={paddingRef} className="h-full will-change-[padding]">
        <div
          ref={innerRef}
          className="relative w-full h-full overflow-hidden will-change-[border-radius]"
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/banner.mp4" type="video/mp4" />
          </video>

          {/* Dark Blur Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-end px-4 md:px-6 pb-20">
            <div className="mx-auto max-w-7xl w-full text-left">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Built on Strength.<br />Driven by Trust.
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
                Atlas Screening delivers enterprise-grade background
                investigations with uncompromising accuracy, security, and
                compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
