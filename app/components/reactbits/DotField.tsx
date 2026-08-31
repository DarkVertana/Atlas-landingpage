"use client";

/* ReactBits-style — DotField
   An interactive dot grid on a canvas. Dots near the cursor bulge outward and
   glow; optional ambient wave and sparkle. Pointer is tracked at the window
   level so the canvas can stay pointer-events:none and never block the UI on
   top of it. Falls back to a static field under reduced-motion. */

import { useEffect, useRef } from "react";

type Props = {
  dotRadius?: number;
  dotSpacing?: number;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  cursorRadius?: number;
  color?: string; // base dot color, "r,g,b"
  glowColor?: string; // glow color, "r,g,b"
  baseAlpha?: number;
  className?: string;
};

export default function DotField({
  dotRadius = 1.5,
  dotSpacing = 22,
  bulgeStrength = 26,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  cursorRadius = 220,
  color = "255,255,255",
  glowColor = "95,227,192",
  baseAlpha = 0.14,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Hard cap on dot count: thousands of per-frame canvas fills freeze weak
    // GPUs. If the requested spacing would exceed this, we widen the spacing.
    const MAX_DOTS = 2600;

    let w = 0;
    let h = 0;
    let step = dotSpacing;
    let dots: { x: number; y: number; tw: number }[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let rect = canvas.getBoundingClientRect(); // cached; refreshed on scroll/resize
    let raf = 0;
    let running = false;
    let visible = true;
    let t = 0;

    const build = () => {
      rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Widen spacing until the grid fits under the dot cap.
      step = dotSpacing;
      while (w > 0 && h > 0 && (w / step) * (h / step) > MAX_DOTS) step += 2;
      dots = [];
      for (let y = step / 2; y < h; y += step) {
        for (let x = step / 2; x < w; x += step) {
          dots.push({ x, y, tw: Math.random() * Math.PI * 2 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      for (const d of dots) {
        let px = d.x;
        let py = d.y;
        let r = dotRadius;
        let alpha = baseAlpha;
        let rgb = color;

        if (waveAmplitude > 0) {
          py += Math.sin(d.x * 0.02 + t) * waveAmplitude;
          px += Math.cos(d.y * 0.02 + t) * waveAmplitude * 0.5;
        }

        if (sparkle) {
          alpha = baseAlpha * (0.6 + 0.4 * Math.sin(t * 2 + d.tw));
        }

        if (pointer.active) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < cursorRadius) {
            const inf = 1 - dist / cursorRadius;
            const push = inf * inf * bulgeStrength;
            px += (dx / dist) * push;
            py += (dy / dist) * push;
            r += inf * dotRadius * 1.1;
          }
          if (dist < glowRadius) {
            const g = 1 - dist / glowRadius;
            alpha = Math.min(1, alpha + (0.9 - alpha) * g);
            r += g * 0.8;
            rgb = glowColor;
          }
        }

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();
      }
    };

    const frame = () => {
      draw();
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    // Keep the cached rect fresh as the page scrolls (cheap, passive).
    const onScroll = () => {
      rect = canvas.getBoundingClientRect();
    };

    build();
    if (reduced) {
      draw(); // one static frame, no loop
      return () => {};
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Only animate while the canvas is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "120px" }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      build();
      if (visible) start();
    });
    ro.observe(canvas);

    return () => {
      stop();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      ro.disconnect();
    };
  }, [
    dotRadius,
    dotSpacing,
    bulgeStrength,
    glowRadius,
    sparkle,
    waveAmplitude,
    cursorRadius,
    color,
    glowColor,
    baseAlpha,
  ]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%", display: "block" }} />;
}
