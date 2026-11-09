/**
 * Radial spotlight that follows the pointer inside a card.
 * Uses usePointerVelocity to avoid per-frame React re-renders.
 */
export function RadialSpotlight({ cx, cy }: { cx: number; cy: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-card"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(15,23,42,0.6) 70%)",
        transform: `translate(-${cx}px, -${cy}px)`,
        transition: "none",
      }}
    />
  );
}
