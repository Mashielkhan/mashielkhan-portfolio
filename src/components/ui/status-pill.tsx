export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex h-7 items-center gap-2 rounded-full border border-border bg-bg-2/60 px-3 font-mono text-label text-text-2">
      <span aria-hidden className="size-1.5 rounded-full bg-success" />
      {children}
    </p>
  );
}
