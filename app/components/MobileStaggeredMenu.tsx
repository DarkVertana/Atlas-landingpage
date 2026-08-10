"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export interface StaggeredItem {
  label: string;
  link: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: StaggeredItem[];
  /** Accent "pop" colors that sweep in behind the panel, in order. */
  colors?: string[];
  panelColor?: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MobileStaggeredMenu({
  open,
  onClose,
  items,
  colors = ["#0d8368", "#058B74", "#02543f"],
  panelColor = "#01463A",
  accentColor = "#0aa88a",
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const panelRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  layersRef.current = [];
  itemsRef.current = [];

  // Build the timeline once the elements are mounted.
  useEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = layersRef.current;
    const listItems = itemsRef.current;
    const cta = ctaRef.current;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set([...layers, panel], { xPercent: 0 });
        gsap.set([...listItems, cta], { autoAlpha: 1, x: 0, y: 0 });
        return;
      }

      const tl = gsap.timeline({ paused: true });
      tl.set(root, { autoAlpha: 1 });
      tl.fromTo(
        layers,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.5, ease: "power4.out", stagger: 0.08 },
        0
      );
      tl.fromTo(
        panel,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.55, ease: "power4.out" },
        0.14
      );
      tl.fromTo(
        listItems,
        { x: 60, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 },
        0.38
      );
      if (cta) {
        tl.fromTo(cta, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 0.5);
      }
      tl.eventCallback("onReverseComplete", () => gsap.set(root, { autoAlpha: 0 }));
      tlRef.current = tl;
    }, root);

    return () => ctx.revert();
  }, [items]);

  // Play / reverse on open change.
  useEffect(() => {
    const tl = tlRef.current;
    const root = rootRef.current;
    if (!tl) {
      if (root) gsap.set(root, { autoAlpha: open ? 1 : 0 });
      return;
    }
    if (open) tl.play();
    else tl.reverse();
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[60] md:hidden"
      style={{ opacity: 0, visibility: "hidden", pointerEvents: open ? "auto" : "none" }}
      aria-hidden={!open}
    >
      {/* Accent "pop" layers that sweep in behind the panel */}
      {colors.map((c, i) => (
        <div
          key={c + i}
          ref={(el) => {
            if (el) layersRef.current[i] = el;
          }}
          className="absolute inset-0 will-change-transform"
          style={{ background: c }}
        />
      ))}

      {/* Main panel */}
      <aside
        ref={panelRef}
        className="absolute inset-0 flex flex-col will-change-transform"
        style={{ background: panelColor }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-1 flex-col justify-center px-8 pt-24">
          <ul className="flex flex-col gap-1">
            {items.map((item, i) => (
              <li
                key={item.link + item.label}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className="overflow-hidden"
              >
                <Link
                  href={item.link}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-2.5"
                >
                  <span
                    className="w-7 text-sm font-semibold tabular-nums"
                    style={{ color: accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-4xl font-bold tracking-tight text-white transition-colors group-hover:text-white/70">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + footer */}
        <div ref={ctaRef} className="px-8 pb-12" style={{ opacity: 0 }}>
          <Link
            href={ctaHref}
            onClick={onClose}
            className="block w-full rounded-xl bg-white py-3.5 text-center text-sm font-semibold text-[#01463A] transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
          <p className="mt-6 text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Atlas Screening
          </p>
        </div>
      </aside>
    </div>
  );
}
