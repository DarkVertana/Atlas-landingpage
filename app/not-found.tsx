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
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pt-56 pb-40">
        <div className="max-w-lg w-full text-center">
          <p className="text-[#01463A]/[0.06] text-[140px] md:text-[200px] font-bold leading-none tracking-tighter select-none mb-2">
            404
          </p>

          <h1 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-4">
            This page could not be found.
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            The resource you requested does not exist or has been moved to a new location. Please verify the URL or return to the homepage.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#01463A]/20"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
