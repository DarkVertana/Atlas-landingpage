"use client";

import Image from "next/image";
import { useState } from "react";

const QUICK_REPLIES = [
  "How do I order a check?",
  "What does it cost?",
  "How fast are results?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/20">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-[#01463A] to-[#058B74] px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-inset ring-white/25">
              <Image
                src="/assets/atlas-assistant.png"
                alt="Atlas Assistant"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Atlas Assistant</p>
              <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                Online
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-4">
            <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-700">
              Hi there, I&apos;m the Atlas Assistant. Ask me about our
              screening services, pricing, or turnaround times.
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {QUICK_REPLIES.map((q) => (
                <a
                  key={q}
                  href={`/contact?q=${encodeURIComponent(q)}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-left text-sm text-[#01463A] transition-colors hover:border-[#058B74]/50 hover:bg-[#058B74]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74]"
                >
                  {q}
                </a>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            action="/contact"
            className="flex items-center gap-2 border-t border-gray-100 px-4 py-3"
          >
            <input
              name="q"
              placeholder="Ask a question…"
              aria-label="Ask a question"
              className="min-w-0 flex-1 rounded-md bg-transparent px-1 text-sm text-[#01463A] placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74]"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74] text-white transition-colors hover:bg-[#01463A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Floating bot button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg shadow-[#01463A]/25 ring-1 ring-[#058B74]/15 transition-all duration-300 hover:scale-105"
      >
        {!open && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#4ade80] ring-2 ring-white" />
          </span>
        )}
        <Image
          src="/assets/atlas-assistant.png"
          alt="Open assistant"
          width={44}
          height={44}
          className={`h-11 w-11 object-contain transition-all duration-300 ${
            open ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <svg
          className={`absolute h-6 w-6 text-[#01463A] transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
}
