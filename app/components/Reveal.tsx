"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  style?: CSSProperties;
  href?: string;
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  "aria-haspopup"?: boolean | "dialog" | "menu" | "listbox" | "tree" | "grid";
};

const variantClass: Record<Variant, string> = {
  up: "",
  fade: "reveal-fade",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
  style,
  ...rest
}: Props) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  // Start visible: the server-rendered HTML and the first paint show content
  // immediately (critical for LCP and no-JS users). We only *arm* the
  // hidden→animate-in behavior after mount, and only for elements that are
  // still below the fold — so above-the-fold content (e.g. the hero/LCP) is
  // never gated behind JS download + hydration.
  const [visible, setVisible] = useState(true);

  const setRef = useCallback((el: HTMLElement | null) => setNode(el), []);

  useEffect(() => {
    if (!node) return;

    // If the element is already within (or above) the viewport at mount, leave
    // it shown — there is nothing to scroll-reveal and hiding it would only
    // delay paint.
    const rect = node.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.9;
    // Already at/above the fold: it's visible by default — leave it and skip the
    // observer entirely (nothing to scroll-reveal, and we must not gate paint).
    if (!belowFold) return;

    // Below the fold: hide it now (off-screen, so no visible flash) and animate
    // it in when it scrolls into view. This intentionally sets state from the
    // effect — the decision depends on a post-mount DOM measurement that isn't
    // available during render/SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold, rootMargin, once]);

  const mergedStyle: CSSProperties = {
    ...(delay ? { ["--reveal-delay" as string]: `${delay}ms` } : {}),
    ...style,
  };

  const klass = `reveal ${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`.trim();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component ref={setRef} className={klass} style={mergedStyle} {...rest}>
      {children}
    </Component>
  );
}
