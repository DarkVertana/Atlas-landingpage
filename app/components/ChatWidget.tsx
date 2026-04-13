"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hi there! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");

    // Bot auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for reaching out! Our team will get back to you shortly. You can also email us at support@atlasscreening.com",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${
          open
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden flex flex-col h-[480px]">
          {/* Header */}
          <div className="bg-[#01463A] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Atlas Support</p>
                <p className="text-white/50 text-[11px]">We typically reply in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.from === "user"
                      ? "bg-[#01463A] text-white rounded-2xl rounded-br-md"
                      : "bg-white text-gray-700 rounded-2xl rounded-bl-md border border-gray-100 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-4 py-3 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#01463A]/30 focus:ring-1 focus:ring-[#01463A]/10 transition-all"
              />
              <button
                type="submit"
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#01463A] text-white hover:bg-[#01463A]/90 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </button>
            </form>
            <p className="text-[10px] text-gray-300 text-center mt-2">
              Powered by Atlas Screening
            </p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Need help?"}
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
          {open ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M5 15L15 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          ) : (
            "?"
          )}
        </span>
      </button>
    </>
  );
}
