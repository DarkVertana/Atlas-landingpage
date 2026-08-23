"use client";

/* ReactBits — CountUp
   Eases a number from 0 to its target when it scrolls into view. Dependency-free
   (rAF). Supports prefix/suffix and thousands separators. Skips animation under
   reduced-motion. */

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
};

export default function CountUp({
  to,
  duration = 1400,
  prefix = "",
  suffix = "",
  separator = false,
  className = "",
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  // Reduced-motion check is derived at render (not synced in an effect — the
  // react-hooks/set-state-in-effect rule forbids setState directly in an effect
  // body). Under reduced motion we render the target value directly.
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) return; // no animation — render `to` directly
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, reduceMotion]);

  const shown = reduceMotion ? to : value;
  const display = separator ? shown.toLocaleString("en-US") : String(shown);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
