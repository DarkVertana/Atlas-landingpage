"use client";

/* ReactBits — CardSwap (GSAP)
   A stacked 3D deck whose front card drops, the rest promote forward, and the
   old front returns to the back — on an interval. Pauses on hover so the
   mockups are readable. Static (no rotation) under reduced-motion. */

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

type CardProps = React.HTMLAttributes<HTMLDivElement> & { customClass?: string };

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { customClass = "", style, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={`absolute left-1/2 top-1/2 [transform-style:preserve-3d] ${customClass}`}
      style={style}
      {...rest}
    />
  );
});

type Slot = { x: number; y: number; z: number; zIndex: number };

const makeSlot = (i: number, cd: number, vd: number, total: number): Slot => ({
  x: i * cd,
  y: -i * vd,
  z: -i * cd * 1.5,
  zIndex: total - i,
});

const place = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

type Props = {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  children: React.ReactNode;
  className?: string;
  /** Fires with the child index now at the front of the deck. */
  onFront?: (index: number) => void;
};

export default function CardSwap({
  width = 360,
  height = 320,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  skewAmount = 5,
  children,
  className = "",
  onFront,
}: Props) {
  const cfg = { ease: "power1.inOut", durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement[], [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    if (total === 0) return;
    order.current = Array.from({ length: total }, (_, i) => i);

    refs.forEach((r, i) => r.current && place(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));
    onFront?.(order.current[0]);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || total < 2) return;

    const swap = () => {
      const [front, ...rest] = order.current;
      const elFront = refs[front]?.current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, { y: "+=500", duration: cfg.durDrop, ease: cfg.ease });
      tl.addLabel("promote", `-=${cfg.durDrop * cfg.promoteOverlap}`);

      rest.forEach((idx, i) => {
        const el = refs[idx]?.current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: cfg.durMove, ease: cfg.ease }, `promote+=${i * 0.15}`);
      });

      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
      tl.addLabel("return", `promote+=${cfg.durMove * cfg.returnDelay}`);
      tl.call(() => gsap.set(elFront, { zIndex: backSlot.zIndex }), undefined, "return");
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(elFront, { y: backSlot.y, duration: cfg.durReturn, ease: cfg.ease }, "return");
      tl.call(() => {
        order.current = [...rest, front];
        onFront?.(order.current[0]);
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    let el: HTMLDivElement | null = null;
    const pause = () => {
      tlRef.current?.pause();
      clearInterval(intervalRef.current);
    };
    const resume = () => {
      tlRef.current?.play();
      intervalRef.current = window.setInterval(swap, delay);
    };
    if (pauseOnHover && container.current) {
      el = container.current;
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", resume);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (el) {
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", resume);
      }
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, refs, onFront, cfg.durDrop, cfg.durMove, cfg.durReturn, cfg.ease, cfg.promoteOverlap, cfg.returnDelay]);

  return (
    <div
      ref={container}
      className={`absolute bottom-0 right-0 origin-bottom-right [transform-style:preserve-3d] ${className}`}
      style={{ width, height, perspective: 900 }}
    >
      {childArr.map((child, i) => {
        if (!isValidElement(child)) return child;
        const childStyle = (child.props as CardProps).style || {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return cloneElement(child as ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: { width, height, ...childStyle },
        });
      })}
    </div>
  );
}
