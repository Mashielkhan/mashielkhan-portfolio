"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ease, dur, fadeInUp, staggerContainer, createStaggerItem } from "@/lib/motion";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    setIsOpen(true);
    ref.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    // Standard dialog close happens via the "close" event listener below
    // but we can also trigger it manually after animation if preferred.
    // However, the native Escape key will trigger "close" which we handle.
    setTimeout(() => {
      if (ref.current?.open) {
        ref.current?.close();
      }
    }, dur.base * 1000);
  };

  useEffect(() => {
    const dialog = ref.current;
    const mq = window.matchMedia("(min-width: 48rem)");

    const handleClose = () => {
      setIsOpen(false);
      document.documentElement.style.overflow = "";
    };

    const onChange = () => {
      if (mq.matches && dialog?.open) {
        dialog.close();
      }
    };

    dialog?.addEventListener("close", handleClose);
    mq.addEventListener("change", onChange);

    return () => {
      dialog?.removeEventListener("close", handleClose);
      mq.removeEventListener("change", onChange);
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
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: dur.base, ease: ease.out }}
              className="flex h-full flex-col px-5 pb-8"
            >
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

              <m.nav
                aria-label="Mobile"
                className="mt-8 flex flex-1 flex-col"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {site.nav.map((item, i) => (
                  <m.div
                    key={item.href}
                    variants={fadeInUp}
                    {...createStaggerItem(i)}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block border-b border-border-subtle py-4 text-h2 text-text-1"
                    >
                      {item.label}
                    </Link>
                  </m.div>
                ))}
              </m.nav>

              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: dur.base }}
              >
                <Button asChild size="lg" className="w-full">
                  <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                    Download resume
                  </a>
                </Button>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </dialog>
    </>
  );
}
