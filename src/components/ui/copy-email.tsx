"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`; // clipboard blocked: fall back
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 font-mono text-small text-text-2 transition-colors duration-(--dur-fast) hover:text-text-1"
    >
      <span>{email}</span>
      <span aria-live="polite" className="text-label text-accent-300">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
