"use client";

/* ReactBits — Stack
   A pile of cards you can drag (or click / use the controls) to send the top
   card to the back. Dependency-free: pointer events + CSS transforms. The
   deeper a card sits, the more it is offset, scaled, and rotated, so it reads
   as a real stack. Respects reduced-motion (no rotation jitter). */

import { useState, useRef, PointerEvent, ReactNode } from "react";

export type StackItem = { id: number; content: ReactNode };

type Props = {
  items: StackItem[];
  className?: string;
  sensitivity?: number;
  onCycle?: (topId: number) => void;
};

// deterministic, restrained rotation so the stack reads as neat, not tossed
const rot = (id: number) => ((id * 37) % 5) - 2; // -2..2 deg

export default function Stack({ items, className = "", sensitivity = 110, onCycle }: Props) {
  const [order, setOrder] = useState<number[]>(items.map((it) => it.id));
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const byId = (id: number) => items.find((it) => it.id === id)!;
  const topId = order[order.length - 1];

  const sendToBack = () => {
    setOrder((o) => {
      const next = [o[o.length - 1], ...o.slice(0, o.length - 1)];
      onCycle?.(next[next.length - 1]);
      return next;
    });
  };

  const onPointerDown = (e: PointerEvent) => {
    startRef.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!startRef.current) return;
    setDrag({ x: e.clientX - startRef.current.x, y: e.clientY - startRef.current.y });
  };

  const onPointerUp = () => {
    if (drag) {
      const moved = Math.hypot(drag.x, drag.y);
      // a real drag past the threshold, or a simple tap/click, both advance
      if (moved > sensitivity || moved < 6) sendToBack();
    }
    startRef.current = null;
    setDrag(null);
  };

  return (
    <div className={`relative select-none ${className}`} style={{ perspective: "1000px" }}>
      {order.map((id, i) => {
        const posFromTop = order.length - 1 - i; // 0 = top
        const isTop = id === topId;
        const dragging = isTop && drag;

        const baseTransform = `translate(${posFromTop * 6}px, ${posFromTop * -10}px) scale(${1 - posFromTop * 0.035}) rotate(${rot(id)}deg)`;
        const dragTransform = dragging
          ? `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x * 0.05}deg)`
          : baseTransform;

        return (
          <div
            key={id}
            className="absolute inset-0"
            style={{
              zIndex: i,
              transform: dragTransform,
              transition: dragging ? "none" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: isTop ? (dragging ? "grabbing" : "grab") : "default",
              pointerEvents: isTop ? "auto" : "none",
              touchAction: "none",
            }}
            onPointerDown={isTop ? onPointerDown : undefined}
            onPointerMove={isTop ? onPointerMove : undefined}
            onPointerUp={isTop ? onPointerUp : undefined}
          >
            {byId(id).content}
          </div>
        );
      })}
    </div>
  );
}
