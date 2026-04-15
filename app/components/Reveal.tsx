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
  const [visible, setVisible] = useState(false);

  const setRef = useCallback((el: HTMLElement | null) => setNode(el), []);

  useEffect(() => {
    if (!node) return;

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
