import Link from "next/link";

export default function ChatWidget() {
  return (
    <Link
      href="/contact"
      aria-label="Need help? Contact us"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
    >
      {/* Liquid blur layers */}
      <span className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-xl" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent mix-blend-overlay" />
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
      <span className="absolute inset-0 rounded-full shadow-lg shadow-black/30" />

      {/* Animated liquid blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-full opacity-50 blur-xl animate-[spin_8s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,255,255,0.25), rgba(0,0,0,0.0), rgba(255,255,255,0.15), rgba(255,255,255,0.3), rgba(255,255,255,0.25))",
        }}
      />

      {/* Icon */}
      <span className="relative z-10 text-white font-bold text-xl leading-none select-none transition-all duration-300 group-hover:[text-shadow:0_0_14px_rgba(255,255,255,0.95),0_0_28px_rgba(255,255,255,0.6)] group-hover:scale-110">
        ?
      </span>
    </Link>
  );
}
