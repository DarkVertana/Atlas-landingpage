"use client";

/* ReactBits — TiltedCard
   Cursor-driven 3D tilt with a soft spring feel. Dependency-free (CSS
   transforms + transition). Tilt is disabled under reduced-motion and on
   coarse pointers so it never fights readability on touch devices. */

import { useRef, useState, MouseEvent, ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  rotateAmplitude?: number;
  scale?: number;
  style?: CSSProperties;
};

export default function TiltedCard({
  children,
  className = "",
  rotateAmplitude = 6,
  scale = 1.015,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, s: 1 });

  const allowTilt = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !allowTilt()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * rotateAmplitude, ry: px * rotateAmplitude, s: scale });
  };

  const reset = () => setT({ rx: 0, ry: 0, s: 1 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{
        ...style,
        transform: `perspective(1200px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.s})`,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
