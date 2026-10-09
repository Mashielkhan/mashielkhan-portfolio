"use client";

import { useEffect, useRef } from "react";

export function HoverVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const card = video?.closest(".group");
    if (!video || !card) return;

    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (nav.connection?.saveData || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const play = () => {
      video.style.opacity = "1";
      video.play().catch(() => {});
    };
    const stop = () => {
      video.style.opacity = "0";
      video.pause();
      video.currentTime = 0;
    };

    card.addEventListener("pointerenter", play);
    card.addEventListener("pointerleave", stop);
    card.addEventListener("focusin", play);
    card.addEventListener("focusout", stop);
    return () => {
      card.removeEventListener("pointerenter", play);
      card.removeEventListener("pointerleave", stop);
      card.removeEventListener("focusin", play);
      card.removeEventListener("focusout", stop);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-(--dur-fast)"
    />
  );
}
