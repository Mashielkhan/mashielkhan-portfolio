"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; dx: number; dy: number };
type Props = { onStatus: (s: "ready" | "failed") => void };

function hexToRgb(hex: string) {
  const v = hex.replace("#", "");
  const full =
    v.length === 3
      ? v
          .split("")
          .map((c) => c + c)
          .join("")
      : v;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

export default function HeroScene({ onStatus }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const host = canvas?.parentElement;
    if (!canvas || !ctx || !host) {
      onStatus("failed");
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // GPU guardrail
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent-500").trim() ||
      "#6c7bff";
    const rgb = hexToRgb(accent);
    const LINK = 130;

    let w = 0,
      h = 0;
    let nodes: Node[] = [];
    let paths: Path2D[] = [];
    let density = 1;
    let raf = 0,
      last = 0,
      frames = 0,
      acc = 0;
    let announced = false,
      inView = true,
      tabVisible = !document.hidden;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const count = Math.round(Math.min(90, (w * h) / 9000) * density);
      nodes = Array.from({ length: count }, () => ({
        x: w * (0.25 + Math.random() * 0.75),
        y: h * Math.random(),
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: 1 + Math.random() * 1.6,
        dx: 0,
        dy: 0,
      }));
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // "threads" entering from the left and converging on the network hub
      const hubX = w * 0.55,
        hubY = h * 0.5;
      paths = [0.18, 0.4, 0.62, 0.84].map((f) => {
        const p = new Path2D();
        const y0 = h * f;
        p.moveTo(-10, y0);
        p.bezierCurveTo(w * 0.2, y0, w * 0.3, hubY, hubX, hubY);
        return p;
      });
      build();
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      const dtMs = last ? t - last : 16.7;
      last = t;
      const dt = Math.min(dtMs, 40) / 16.7;

      // FPS watchdog: halve density once, then give up and fall back to the poster
      acc += dtMs;
      if (++frames === 90) {
        const avg = acc / frames;
        frames = 0;
        acc = 0;
        if (avg > 26) {
          if (density > 0.5) {
            density = 0.5;
            build();
          } else {
            stop();
            onStatus("failed");
            return;
          }
        }
      }

      pointer.x += (pointer.tx - pointer.x) * 0.06 * dt;
      pointer.y += (pointer.ty - pointer.y) * 0.06 * dt;
      const px = pointer.x * 16,
        py = pointer.y * 16;

      ctx.clearRect(0, 0, w, h);

      // threads: faint base + a travelling highlight
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${rgb},0.14)`;
      for (const p of paths) ctx.stroke(p);
      ctx.setLineDash([60, 520]);
      ctx.strokeStyle = `rgba(${rgb},0.55)`;
      paths.forEach((p, i) => {
        ctx.lineDashOffset = -(t * 0.04 + i * 140);
        ctx.stroke(p);
      });
      ctx.setLineDash([]);

      // update nodes (depth-scaled parallax via radius)
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < w * 0.25 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.dx = n.x + (px * n.r) / 2.6;
        n.dy = n.y + (py * n.r) / 2.6;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.dx - b.dx,
            dy = a.dy - b.dy;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.4;
            ctx.strokeStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.dx, a.dy);
            ctx.lineTo(b.dx, b.dy);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = `rgba(${rgb},0.9)`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.dx, n.dy, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!announced) {
        announced = true;
        onStatus("ready");
      }
    };

    const start = () => {
      if (raf || !inView || !tabVisible) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) start();
      else stop();
    });
    const onVisibility = () => {
      tabVisible = !document.hidden;
      if (tabVisible) start();
      else stop();
    };
    const onMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const ro = new ResizeObserver(resize);

    io.observe(canvas);
    ro.observe(host);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onMove, { passive: true });
    resize();
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="h-full w-full" />;
}
