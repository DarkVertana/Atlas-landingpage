"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import Reveal from "./Reveal";

type CTAAction = { label: string; href: string };

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  primary?: CTAAction;
  secondary?: CTAAction;
};

export default function CTASection({
  eyebrow = "Get Started Today",
  title = (
    <>
      Ready to Start<br className="hidden lg:block" /> Screening?
    </>
  ),
  description = "Sign up today and get compliant, accurate background screening for your organization.",
  primary = { label: "Get Started", href: "/contact" },
  secondary = { label: "Contact Sales", href: "/contact?topic=sales" },
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(1200px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <section className="px-5 sm:px-6 py-16 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-2xl px-5 sm:px-8 md:px-16 py-8 sm:py-10 md:py-14 flex items-center shadow-lg hover:shadow-xl"
          style={{
            transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
            willChange: "transform",
          }}
        >
          {/* Background Image */}
          <Image
            src="/assets/banner_cta.webp"
            alt=""
            fill
            className="object-cover"
          />

          {/* Green gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top right, #01463A 30%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <Reveal as="p" className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
              {eyebrow}
            </Reveal>
            <Reveal as="h2" delay={80} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </Reveal>
            <Reveal as="p" delay={160} className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
              {description}
            </Reveal>
            <Reveal delay={240} className="mt-6 flex flex-wrap gap-3">
              <a
                href={primary.href}
                className="inline-flex items-center gap-2 min-h-[44px] bg-white text-[#01463A] px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
              >
                {primary.label}
              </a>
              <a
                href={secondary.href}
                className="inline-flex items-center min-h-[44px] border border-white/30 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
              >
                {secondary.label}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
