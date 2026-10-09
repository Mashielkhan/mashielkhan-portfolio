"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function MobileMenu() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    ref.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => ref.current?.close();

  useEffect(() => {
    const dialog = ref.current;
    const mq = window.matchMedia("(min-width: 48rem)");
    const unlock = () => {
      document.documentElement.style.overflow = "";
    };
    const onChange = () => {
      if (mq.matches) dialog?.close(); // resized to desktop while open
    };
    dialog?.addEventListener("close", unlock);
    mq.addEventListener("change", onChange);
    return () => {
      dialog?.removeEventListener("close", unlock);
      mq.removeEventListener("change", onChange);
      unlock();
    };
  }, []);

  const iconButton =
    "flex h-9 w-9 items-center justify-center rounded-chip border border-border text-text-1";

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Open menu"
        className={`${iconButton} md:hidden`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3 5h12M3 9h12M3 13h12" />
        </svg>
      </button>

      <dialog
        ref={ref}
        aria-label="Menu"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-bg-0 p-0 text-text-1 backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col px-5 pb-8">
          <div className="flex h-16 items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-chip border border-border font-mono text-small font-medium">
              MK
            </span>
            <button type="button" onClick={close} aria-label="Close menu" className={iconButton}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 4l10 10M14 4L4 14" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-border-subtle py-4 text-h2 text-text-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button href={site.resumeUrl} size="lg" className="w-full">
            Download resume
          </Button>
        </div>
      </dialog>
    </>
  );
}
