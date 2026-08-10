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

    let w = 0;
    let h = 0;
    let dots: { x: number; y: number; tw: number }[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let t = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = dotSpacing / 2; y < h; y += dotSpacing) {
        for (let x = dotSpacing / 2; x < w; x += dotSpacing) {
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
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
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

    build();
    if (reduced) {
      draw();
      cancelAnimationFrame(raf); // one static frame
    } else {
      draw();
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }

    const ro = new ResizeObserver(() => build());
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
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
