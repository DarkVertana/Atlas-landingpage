"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";

export default function CTASection() {
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
    <section className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg hover:shadow-xl"
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
            <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
              Get Started Today
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Start<br className="hidden md:block" /> Screening?
            </h2>
            <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
              Sign up today and get enterprise-grade background screening for
              your organization.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
