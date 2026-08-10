"use client";

import { useRef, useState } from "react";

type Props = {
  poster: string;
  video: string;
  alt: string;
  className?: string;
};

/**
 * Decorative b-roll video. It is purely visual and never the sole carrier of
 * meaning, so the media itself is aria-hidden. Playback is offered on hover
 * (pointer) AND on tap/click + keyboard (Enter/Space) so touch and keyboard
 * users get the same experience instead of hover-only.
 */
export default function HoverVideo({ poster, video, alt, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    void el.play().then(() => setPlaying(true)).catch(() => {});
  };

  const stop = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? stop() : play());

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={playing ? `Pause preview: ${alt}` : `Play preview: ${alt}`}
      aria-pressed={playing}
      className={`absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${className}`}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
