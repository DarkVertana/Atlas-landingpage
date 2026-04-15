"use client";

import { useRef, useState } from "react";

type Props = {
  poster: string;
  video: string;
  alt: string;
  className?: string;
};

export default function HoverVideo({ poster, video, alt, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleEnter = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    void el.play().then(() => setPlaying(true)).catch(() => {});
  };

  const handleLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  };

  return (
    <div
      className={`absolute inset-0 ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
