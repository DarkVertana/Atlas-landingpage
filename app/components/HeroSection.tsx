"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FLIP_WORDS = ["Trust.", "Accuracy.", "Compliance."];
const FLIP_INTERVAL = 2200; // ms per word
const FLIP_DURATION = 560; // ms — must match .hero-word-in / .hero-word-out

export default function HeroSection() {
  // Flip state. `index` is the word in flow; `outgoing` is the word being
  // crossfaded out (rendered absolutely on top). Locking the flip word to its
  // OWN centered line means its width never changes the headline's line count,
  // so there is zero layout shift at any viewport — and, being centered, it
  // hugs its own text with no dead space around it.
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const cur = indexRef.current;
      const next = (cur + 1) % FLIP_WORDS.length;
      indexRef.current = next;
      setOutgoing(cur);
      setIndex(next);
    }, FLIP_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Retire the outgoing word once its crossfade has finished so only one node
  // stays in the DOM between transitions.
  useEffect(() => {
    if (outgoing === null) return;
    const t = setTimeout(() => setOutgoing(null), FLIP_DURATION + 40);
    return () => clearTimeout(t);
  }, [outgoing]);

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const reducedMotion = useRef(false);

  // Layered scroll parallax: the copy drifts up and fades out as you scroll,
  // while the background (gradient + orbs + aurora) flows at a slower rate —
  // classic depth stacking on one rAF pass. Transform + opacity only
  // (compositor-only, no layout/paint), so there's no reflow while scrolling.
  const updateFrame = useCallback(() => {
    if (!sectionRef.current) return;
    if (reducedMotion.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const h = sectionRef.current.offsetHeight;
    const progress = Math.max(0, Math.min(-rect.top / (h * 0.5), 1));
    const eased = 1 - Math.pow(1 - progress, 3);

    // Foreground: content rises and thins out — a calm, composed amount so it
    // reads as settling, not flying away.
    if (contentRef.current) {
      contentRef.current.style.transform = `translate3d(0, ${-56 * eased}px, 0)`;
      contentRef.current.style.opacity = `${1 - Math.min(progress * 1.3, 1)}`;
    }
    // Background: gradient + orbs + aurora drift slower and breathe outward —
    // the parallax gap between the two layers creates the depth.
    if (bgRef.current) {
      bgRef.current.style.transform = `translate3d(0, ${-24 * eased}px, 0) scale(${1 + 0.04 * eased})`;
      bgRef.current.style.opacity = `${1 - 0.35 * eased}`;
    }
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    let onScreen = true;

    // Only schedule a parallax frame while the hero is on screen AND the user
    // is actually scrolling. Once the hero scrolls away we stop computing
    // frames entirely; the IntersectionObserver re-syncs on re-entry.
    const onScroll = () => {
      if (!onScreen) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateFrame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) {
          updateFrame(); // resync position on re-entry
        } else {
          cancelAnimationFrame(rafId.current);
        }
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
    <section
      ref={sectionRef}
      className="relative flex min-h-svh w-full flex-col justify-center overflow-hidden bg-[#020c08]"
    >
      {/* ── Background — one calm, precise, layered field.
           Deep-green brand gradient → soft mint/teal orb glows → restored
           orbital rings → Aurora glow → faint dot grid → contrast scrim.
           The scrim stays last so the headline always reads crisp. ── */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {/* Brand gradient — the canvas (brand hues, per DESIGN_SPEC: deep
            green → midnight). Kept deep and desaturated so the field reads as
            near-black with a subtle green cast, never a saturated green wash. */}
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,#0b4638_0%,#052a20_38%,#03140d_74%,#020a07_100%)]" />

        {/* Two restrained tonal orbs (mint + teal) — the "circles" glow that
            gives the field depth. Deliberately soft and low-opacity so they
            never read as an AI gradient blob; they only warm the corners. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="hero-mesh-a absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#0aa88a]/10 blur-[150px]" />
          <div className="hero-mesh-b absolute -right-20 top-4 h-80 w-80 rounded-full bg-[#3E92CC]/10 blur-[150px]" />
        </div>

        {/* Restored orbital rings — the cartographic "Atlas" circle motif that
            sat behind the pre-redesign hero, refined for the current centered
            composition: concentric latitude rings that fade outward around a
            soft mint core, slowly breathing, parallaxed with this layer. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden>
          <div
            className="hero-orbit relative mt-[-8%] h-[540px] w-[540px] will-change-transform sm:h-[860px] sm:w-[860px]"
            style={{
              maskImage: "radial-gradient(circle, black 46%, transparent 76%)",
              WebkitMaskImage: "radial-gradient(circle, black 46%, transparent 76%)",
            }}
          >
            {/* Soft mint core — gives the ring field depth and warmth. */}
            <div
              className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(62,232,190,0.16), transparent)" }}
            />
            {/* Concentric rings — fade outward like a globe's meridians.
                Kept perceptible but low enough that the center scrim still wins
                behind the headline (contrast preserved). */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{ inset: `${i * 10}%`, opacity: 0.12 - i * 0.015 }}
              />
            ))}
            {/* Faint crosshair meridians — the coordinate motif. */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          </div>
        </div>

        {/* CSS aurora wash — screen-blended, brand glow (mint → blue →
            violet) that adds light on top of the gradient. Pure CSS (no WebGL),
            so it's lightweight, always renders, and stays smooth on low-end
            devices. Confined to the top band where the former shader glowed. */}
        <div
          aria-hidden
          className="hero-aurora pointer-events-none absolute inset-x-0 top-0 h-[72%] opacity-[0.55] mix-blend-screen"
        />

        {/* Precision dot grid — faint technical texture (SPEC-approved hero
            depth motif) so the canvas reads as software, not decoration. */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(80% 60% at 50% 30%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(80% 60% at 50% 30%, black 20%, transparent 100%)",
          }}
        />

        {/* Contrast scrim: darkens the center band behind the copy so the
            headline + CTAs read crisp, while the edges keep their glow. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(72% 58% at 50% 36%, rgba(2,10,7,0.82) 0%, rgba(2,10,7,0.5) 44%, transparent 74%)",
          }}
        />
      </div>

      {/* ── Content — one tethered composition, vertically centered.
           Rhythm (8pt grid): eyebrow → title 20 → subtitle 24 → CTAs 36 →
           trust 44. A tight, near-simultaneous enter stagger keeps it reading
           as a single block rather than parts arriving separately. ── */}
      <div
        ref={contentRef}
        className="relative z-10 flex w-full flex-col items-center justify-center px-5 py-24 text-center will-change-transform sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow: plain uppercase label — feeds directly into the title. */}
          <p
            className="animate-hero-enter mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[#3EE8BE]/85"
            style={{ animationDelay: "0ms" }}
          >
            FCRA-compliant consumer reporting
          </p>

          {/* Title. The flip word is locked to its own centered line so the
              headline's line count is identical for every word — no reflow at
              any width — and the word, being centered, sits flush with no dead
              space. Tight leading keeps the three lines reading as one unit. */}
          <h1
            className="animate-hero-enter text-4xl font-medium leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] sm:text-5xl md:text-[3.5rem] lg:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Background Screening, Defined by
            {/* Own-line flip slot. Incoming word is in flow (defines the line
                height); the outgoing word is layered absolutely on top and both
                crossfade on the same curve — one continuous, buttery swap. */}
            <span className="relative mt-1 block">
              <span
                key={`in-${index}`}
                className="hero-word-in inline-block whitespace-nowrap font-semibold text-[#3EE8BE] [text-shadow:0_0_14px_rgba(62,232,190,0.28)]"
              >
                {FLIP_WORDS[index]}
              </span>
              {outgoing !== null && outgoing !== index && (
                <span
                  key={`out-${outgoing}`}
                  aria-hidden
                  className="hero-word-out absolute left-1/2 top-0 -translate-x-1/2 inline-block whitespace-nowrap font-semibold text-[#3EE8BE] [text-shadow:0_0_14px_rgba(62,232,190,0.28)]"
                >
                  {FLIP_WORDS[outgoing]}
                </span>
              )}
            </span>
          </h1>

          {/* Subtitle: bridges the title and CTAs; optical width matches the
              headline block above (centered, balanced). */}
          <p
            className="animate-hero-enter mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-balance text-white/70 sm:text-base md:max-w-3xl md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Built for employers, property managers, and partners requiring
            accurate, compliant, and timely background reports.
          </p>

          {/* Primary conversion path — the single job of the hero */}
          <div
            className="animate-hero-enter mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-white px-8 py-3.5 text-sm font-semibold text-[#01463A] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
            >
              See how it works
            </a>
          </div>

          {/* Trust row: the composition's calm foundation line — plain text +
              hairline separators only (no pills, no badges), same optical width
              as the block above. */}
          <div
            className="animate-hero-enter mt-11 flex flex-wrap items-center justify-center gap-x-0 gap-y-3 text-[13px] text-white/55"
            style={{ animationDelay: "300ms" }}
          >
            {[
              "Conducted under the FCRA & state law",
              "Human-adjudicated reports",
              "Consumer dispute rights preserved",
            ].map((item, i) => (
              <span key={item} className="inline-flex items-center">
                {i > 0 && (
                  <span aria-hidden className="mx-6 hidden h-3.5 w-px bg-white/20 sm:inline-block" />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
