"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("force-header-solid");
    return () => document.body.classList.remove("force-header-solid");
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-6 pt-40 pb-28 sm:pt-56 sm:pb-40">
        <div className="max-w-lg w-full text-center">
          <p
            aria-hidden="true"
            className="text-[#01463A]/[0.1] text-[140px] md:text-[200px] font-bold leading-none tracking-tighter select-none mb-2"
          >
            404
          </p>

          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold leading-tight mb-4">
            This page could not be found.
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            The page you requested does not exist or may have moved. Check the URL, or pick up from one of the links below.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#01463A] text-white px-6 py-3 min-h-[44px] rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#01463A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
          >
            Back to home
          </Link>

          <nav aria-label="Helpful links" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="inline-flex items-center min-h-[44px] px-1 rounded-md text-[#058B74] font-semibold hover:text-[#01463A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center min-h-[44px] px-1 rounded-md text-[#058B74] font-semibold hover:text-[#01463A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center min-h-[44px] px-1 rounded-md text-[#058B74] font-semibold hover:text-[#01463A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
