"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Aurora from "./Aurora";

const FLIP_WORDS = ["Trust.", "Accuracy.", "Compliance."];
const FLIP_INTERVAL = 2200; // ms per word

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animClass, setAnimClass] = useState("animate-flip-in");
  const [wordWidth, setWordWidth] = useState<number>();
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the current word so the second line grows/shrinks to fit it,
  // staying centered and animating smoothly between words.
  useEffect(() => {
    // small buffer so the wider display face never clips the last glyph
    if (measureRef.current) setWordWidth(measureRef.current.offsetWidth + 8);
  }, [wordIndex]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const paddingRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const reducedMotion = useRef(false);

  // Flip words
  useEffect(() => {
    const t = setInterval(() => {
      setAnimClass("animate-flip-out");
      setTimeout(() => {
        setWordIndex((p) => (p + 1) % FLIP_WORDS.length);
        setAnimClass("animate-flip-in");
      }, 400);
    }, FLIP_INTERVAL);
    return () => clearInterval(t);
  }, []);

  // Scroll-driven, Apple-style reveal: the device rises toward center and
  // scales up while the hero copy gently parallaxes + fades and the floating
  // chips drift away — all off one rAF pass so it stays buttery.
  const updateFrame = useCallback(() => {
    if (!sectionRef.current || !paddingRef.current || !innerRef.current) return;
    if (reducedMotion.current) return;
    // Mobile: the mockup sits in normal flow below the CTAs — no float, no
    // scroll-driven parallax. Clear any inline styles and bail.
    if (window.innerWidth < 640) {
      paddingRef.current.style.padding = "0px";
      innerRef.current.style.borderRadius = "0px";
      if (mockupRef.current) mockupRef.current.style.transform = "";
      if (contentRef.current) {
        contentRef.current.style.transform = "";
        contentRef.current.style.opacity = "";
      }
      if (chipsRef.current) {
        chipsRef.current.style.transform = "";
        chipsRef.current.style.opacity = "";
      }
      if (ringsRef.current) {
        ringsRef.current.style.transform = "";
        ringsRef.current.style.opacity = "";
      }
      return;
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const h = sectionRef.current.offsetHeight;
    const progress = Math.max(0, Math.min(-rect.top / (h * 0.4), 1));
    // A separate, faster progress so the device settles crisply *while in
    // view* (within the first ~28% of the scroll) rather than as the section exits.
    const near = Math.max(0, Math.min(-rect.top / (h * 0.28), 1));
    const eased = 1 - Math.pow(1 - progress, 3);
    const isMobile = window.innerWidth < 768;
    // Full-screen → rounded-card detach as you scroll.
    paddingRef.current.style.padding = `${eased * (isMobile ? 12 : 24)}px`;
    innerRef.current.style.borderRadius = `${eased * (isMobile ? 20 : 32)}px`;

    // Device: sits a little below the copy, already crisp and clearly visible.
    // A neat, subtle settle — rises a touch, small back-tilt flattens, and
    // finishes at full scale early (transform-only, GPU-cheap).
    const dev = 1 - Math.pow(1 - near, 3);
    if (mockupRef.current) {
      const startY = isMobile ? 54 : 40; // sits lower so the centered copy + CTAs clear it
      const endY = isMobile ? 46 : 32; // settles up a touch, still straddling
      const ty = startY + (endY - startY) * dev;
      const scale = 0.97 + 0.03 * dev; // 0.97 → 1.0 (barely grows)
      mockupRef.current.style.transform = `translate3d(0, ${ty}%, 0) scale(${scale})`;
    }

    // Hero copy: gentle upward parallax + soft fade as you scroll past.
    if (contentRef.current) {
      contentRef.current.style.transform = `translate3d(0, ${-60 * eased}px, 0)`;
      contentRef.current.style.opacity = `${1 - Math.min(progress * 1.4, 1)}`;
    }

    // Floating chips: drift out + fade first for depth.
    if (chipsRef.current) {
      chipsRef.current.style.transform = `translate3d(0, ${-80 * eased}px, 0)`;
      chipsRef.current.style.opacity = `${1 - Math.min(progress * 1.6, 1)}`;
    }

    // Concentric rings: subtle scale + fade so the backdrop breathes.
    if (ringsRef.current) {
      ringsRef.current.style.transform = `translate3d(0, ${-30 * eased}px, 0) scale(${1 + 0.06 * eased})`;
      ringsRef.current.style.opacity = `${1 - 0.5 * eased}`;
    }
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateFrame);
    };
    updateFrame();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateFrame]);

  return (
    <div ref={sectionRef} className="relative z-10 h-auto sm:h-[112vh] sm:min-h-[840px]">
      <div ref={paddingRef} className="h-full will-change-[padding]">
        <div ref={innerRef} className="relative flex h-full w-full flex-col overflow-hidden will-change-[border-radius]">
          {/* ── Background: gradient + rings + grain ── */}
          <div className="absolute inset-0 bg-[#02120d]" />
          <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,#0a6b54_0%,#023528_42%,#01180f_78%,#020c08_100%)]" />
          {/* Aurora WebGL wash — screen-blended so it adds glowing light on
              top of the gradient instead of covering it, keeping the gradient
              clearly visible and rich. */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.62] mix-blend-screen">
            <Aurora
              colorStops={["#12f0c0", "#38b6ff", "#a86bff"]}
              blend={0.45}
              amplitude={1.1}
              speed={1.0}
            />
          </div>
          {/* Contrast scrim: darkens the center band behind the copy so the
              headline + CTAs read crisp and rich against the vivid Aurora,
              while the edges keep their glow. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 55% at 50% 34%, rgba(1,14,10,0.72) 0%, rgba(1,14,10,0.45) 42%, transparent 72%)",
            }}
          />
          <div ref={ringsRef} className="pointer-events-none absolute inset-x-0 top-0 flex justify-center will-change-transform">
            <div
              className="relative mt-10 h-[560px] w-[560px] sm:h-[900px] sm:w-[900px]"
              style={{
                maskImage: "radial-gradient(circle, black 48%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(circle, black 48%, transparent 78%)",
              }}
            >
              {/* soft central glow — gives the field depth and richness */}
              <div
                className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(62,232,190,0.10), transparent)" }}
              />
              {/* Graticule — precise, cartographic latitude rings that fade
                  outward like a globe's meridians rather than flat circles. */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white"
                  style={{ inset: `${i * 10}%`, opacity: 0.06 - i * 0.009 }}
                />
              ))}
              {/* faint crosshair meridians — the "Atlas" coordinate motif */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* ── Two restrained tonal glows for depth. The Aurora already
                 carries the color, so we keep this subtle rather than piling on
                 competing blobs. ── */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float-slow absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#0aa88a]/20 blur-[130px]" />
            <div className="animate-float-slow absolute -right-16 top-8 h-80 w-80 rounded-full bg-[#3E92CC]/15 blur-[140px]" style={{ animationDelay: "1.4s" }} />
          </div>

          {/* ── Floating verification chips in the side gutters (desktop only) ── */}
          <div ref={chipsRef} className="pointer-events-none absolute inset-0 z-[6] hidden will-change-transform xl:block" aria-hidden>
            {[
              { label: "Identity verified", color: "#34D399", pos: "left-[5%] top-[26%]", delay: "0s", check: true },
              { label: "County records", color: "#3E92CC", pos: "left-[8%] top-[42%]", delay: "1.2s" },
              { label: "MVR clean", color: "#F5A524", pos: "right-[5%] top-[26%]", delay: "0.6s" },
              { label: "Watchlist clear", color: "#8B7DE0", pos: "right-[8%] top-[42%]", delay: "1.8s" },
            ].map((c) => (
              <div
                key={c.label}
                className={`animate-float-slow absolute ${c.pos} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[12px] font-medium text-white/90 shadow-lg backdrop-blur-md`}
                style={{ animationDelay: c.delay }}
              >
                {c.check ? (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ backgroundColor: c.color }}>
                    <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8.2l2.4 2.4L12 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : (
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                )}
                {c.label}
              </div>
            ))}
          </div>

          {/* ── Content ── (centered titles) */}
          <div ref={contentRef} className="relative z-10 flex h-auto w-full flex-col items-center justify-start px-5 pb-14 pt-24 text-center will-change-transform sm:h-full sm:justify-center sm:pb-[34vh] sm:px-6 xl:pb-[40vh]">
            <div className="mx-auto max-w-3xl">
              <h1
                className="animate-hero-enter text-4xl font-medium leading-tight tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[4rem]"
                style={{ animationDelay: "100ms" }}
              >
                Background Screening, Defined by{" "}
                {/* Width tracks the current word so the line stays centered and
                    transitions smoothly as words flip. */}
                <span
                  className="relative inline-block overflow-hidden align-bottom transition-[width] duration-300 ease-out"
                  style={{ width: wordWidth }}
                >
                  {/* Off-screen sizer: measures the current word's width */}
                  <span
                    ref={measureRef}
                    aria-hidden
                    className="invisible absolute left-0 top-0 whitespace-nowrap"
                  >
                    {FLIP_WORDS[wordIndex]}
                  </span>
                  <span
                    key={wordIndex}
                    className={`inline-block whitespace-nowrap text-[#3EE8BE] [text-shadow:0_0_28px_rgba(62,232,190,0.35)] ${animClass}`}
                  >
                    {FLIP_WORDS[wordIndex]}
                  </span>
                </span>
              </h1>

              <p
                className="animate-hero-enter mx-auto mt-5 max-w-md text-sm leading-relaxed text-balance text-white/70 sm:mt-6 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg lg:text-base xl:text-lg"
                style={{ animationDelay: "300ms" }}
              >
                Built for employers, property managers, and partners requiring
                accurate, compliant, and timely background reports.
              </p>

              {/* Primary conversion path — the single job of the hero */}
              <div
                className="animate-hero-enter mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
                style={{ animationDelay: "440ms" }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#01463A] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
                >
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
                >
                  See how it works
                </a>
              </div>

              {/* Mobile only: product window in normal flow, below the CTAs
                  (the desktop version floats and straddles the fold instead). */}
              <div className="relative mt-10 sm:hidden">
                {/* soft brand glow seats the device against the dark field */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-6 -top-6 bottom-0 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(62,232,190,0.16),transparent_75%)]"
                />
                <div className="relative rounded-[18px] bg-gradient-to-b from-white/25 to-white/[0.04] p-px shadow-[0_30px_80px_-24px_rgba(1,47,58,0.65)]">
                  <div className="relative overflow-hidden rounded-[17px] border border-white/10 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/app/customer-dashboard.png"
                      alt="Atlas Screening home dashboard tracking a background check in progress"
                      width={880}
                      height={470}
                      className="block h-auto w-full select-none"
                      draggable={false}
                    />
                    {/* one calm sheen pass, matching the desktop device */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="hero-sheen absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Your dashboard, from order to cleared report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product window that straddles the fold: top half sits on the hero,
             bottom half rests on the section below, tying the two together.
             A sibling of the card so it can overflow past the section edge. ── */}
      <div
        ref={mockupRef}
        aria-hidden={false}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden origin-bottom justify-center px-4 [will-change:transform] sm:flex sm:px-6"
        style={{ transform: "translate3d(0, 40%, 0) scale(0.97)" }}
      >
        <div className="animate-hero-enter relative w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px]" style={{ animationDelay: "540ms" }}>
          {/* device: thin gradient edge + deep soft shadow, all corners rounded */}
          <div className="relative rounded-[20px] bg-gradient-to-b from-white/25 to-white/[0.04] p-px shadow-[0_40px_120px_-30px_rgba(1,47,58,0.55)] sm:rounded-[26px]">
            <div className="relative overflow-hidden rounded-[19px] border border-white/10 bg-white sm:rounded-[25px]">
              {/* screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/app/customer-dashboard.png"
                alt="Atlas Screening home dashboard tracking a background check in progress"
                width={880}
                height={470}
                className="block h-auto w-full select-none"
                draggable={false}
              />

              {/* one calm sheen pass */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="hero-sheen absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
