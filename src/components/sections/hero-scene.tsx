"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  dx: number;
  dy: number;
};
type Props = { onStatus: (status: "ready" | "failed") => void };

function hexToRgb(hex: string) {
  const value = hex.trim().replace("#", "");
  const full = value.length === 3 ? [...value].map((c) => c + c).join("") : value;
  if (!/^[0-9a-f]{6}$/i.test(full)) return "108,123,255";
  const number = Number.parseInt(full, 16);
  return `${(number >> 16) & 255},${(number >> 8) & 255},${number & 255}`;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/** The original connected-node Canvas 2D renderer, now mounted once behind the app. */
export default function HeroScene({ onStatus }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef(onStatus);

  useEffect(() => {
    statusRef.current = onStatus;
  }, [onStatus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !host || !ctx) {
      statusRef.current("failed");
      return;
    }

    const surface = canvas;
    const context = ctx;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const rgb = hexToRgb(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent-500") || "#6c7bff",
    );
    const linkDistance = 130;
    let width = 1;
    let height = 1;
    let nodes: Node[] = [];
    let threads: Path2D[] = [];
    let raf = 0;
    let last = 0;
    let disposed = false;
    let shown = false;
    let visible = !document.hidden;
    let reduced = motionQuery.matches;
    let targetProgress = 0;
    let smoothProgress = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let quality = 1;
    let slowFrames = 0;
    const camera = { zoom: 1, roll: 0, x: 0, y: 0, skewX: 0, skewY: 0 };

    const getProgress = () => {
      const limit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return limit > 0 ? clamp(window.scrollY / limit, 0, 1) : 0;
    };
    const onScroll = () => {
      targetProgress = getProgress();
    };

    const build = () => {
      const mobile = width < 768;
      const maxNodes = mobile ? 38 : 90;
      const count = Math.max(15, Math.round(Math.min(maxNodes, (width * height) / 9000) * quality));
      // Same original right-weighted constellation: 25%-100% viewport width.
      nodes = Array.from({ length: count }, () => ({
        x: width * (0.25 + Math.random() * 0.75),
        y: height * Math.random(),
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: 1 + Math.random() * 1.6,
        dx: 0,
        dy: 0,
      }));
      const hubX = width * 0.55;
      const hubY = height * 0.5;
      threads = [0.18, 0.4, 0.62, 0.84].map((fraction) => {
        const path = new Path2D();
        const startY = height * fraction;
        path.moveTo(-10, startY);
        path.bezierCurveTo(width * 0.2, startY, width * 0.3, hubY, hubX, hubY);
        return path;
      });
    };

    const resize = () => {
      if (disposed) return;
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      surface.width = Math.max(1, Math.round(width * dpr));
      surface.height = Math.max(1, Math.round(height * dpr));
      build();
      onScroll();
      if (reduced) render(performance.now(), 1);
    };

    const render = (time: number, delta: number) => {
      const smoothing = 1 - Math.exp(-0.075 * delta);
      const progress = reduced ? 0 : smoothProgress + (targetProgress - smoothProgress) * smoothing;
      smoothProgress = progress;
      // Neutral initial camera preserves original hero composition.
      const targetZoom = 1 + progress * 0.19;
      const targetRoll = Math.sin(progress * Math.PI * 2) * 2.6 * Math.PI / 180;
      const targetX = Math.sin(progress * Math.PI * 1.7) * 26;
      const targetY = Math.sin(progress * Math.PI * 2.3) * 18;
      const targetSkewX = Math.sin(progress * Math.PI * 2) * 0.023;
      const targetSkewY = Math.sin(progress * Math.PI * 1.6) * 0.014;
      camera.zoom += (targetZoom - camera.zoom) * smoothing;
      camera.roll += (targetRoll - camera.roll) * smoothing;
      camera.x += (targetX - camera.x) * smoothing;
      camera.y += (targetY - camera.y) * smoothing;
      camera.skewX += (targetSkewX - camera.skewX) * smoothing;
      camera.skewY += (targetSkewY - camera.skewY) * smoothing;
      pointerX += ((reduced ? 0 : targetPointerX) - pointerX) * smoothing;
      pointerY += ((reduced ? 0 : targetPointerY) - pointerY) * smoothing;

      // Clear the entire bitmap in device-pixel space BEFORE camera transforms.
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, surface.width, surface.height);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.save();
      context.translate(width / 2 + camera.x, height / 2 + camera.y);
      context.rotate(camera.roll);
      context.transform(1, camera.skewY, camera.skewX, 1, 0, 0);
      context.scale(camera.zoom, camera.zoom);
      context.translate(-width / 2, -height / 2);

      // Original incoming Bezier threads and moving highlights.
      context.lineWidth = 1;
      context.strokeStyle = `rgba(${rgb},0.14)`;
      for (const thread of threads) context.stroke(thread);
      if (!reduced) {
        context.setLineDash([60, 520]);
        context.strokeStyle = `rgba(${rgb},0.55)`;
        threads.forEach((thread, i) => {
          context.lineDashOffset = -(time * 0.04 + i * 140);
          context.stroke(thread);
        });
        context.setLineDash([]);
        context.lineDashOffset = 0;
      }

      for (const node of nodes) {
        if (!reduced) {
          node.x += node.vx * delta;
          node.y += node.vy * delta;
          if (node.x < width * 0.25 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        // Small depth offset by original radius; maintains connected visual identity.
        const depth = (node.r - 1) / 1.6;
        node.dx = node.x + pointerX * 16 * node.r / 2.6 + Math.sin(progress * Math.PI * 2) * depth * 18;
        node.dy = node.y + pointerY * 16 * node.r / 2.6 + Math.sin(progress * Math.PI * 2.4) * depth * 12;
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const distance = Math.hypot(dx, dy);
          if (distance >= linkDistance) continue;
          const alpha = (1 - distance / linkDistance) * 0.4;
          context.strokeStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
          context.beginPath();
          context.moveTo(a.dx, a.dy);
          context.lineTo(b.dx, b.dy);
          context.stroke();
        }
      }
      context.fillStyle = `rgba(${rgb},0.9)`;
      for (const node of nodes) {
        context.beginPath();
        context.arc(node.dx, node.dy, node.r, 0, Math.PI * 2);
        context.fill();
      }
      context.restore(); // Matched with save() on every frame.
      if (!shown) {
        shown = true;
        statusRef.current("ready");
      }
    };

    const frame = (time: number) => {
      raf = 0;
      if (disposed || !visible || reduced) return;
      const elapsed = last ? time - last : 16.7;
      last = time;
      const delta = clamp(elapsed / 16.7, 0.1, 2.4);
      if (elapsed > 35) slowFrames++;
      else slowFrames = Math.max(0, slowFrames - 1);
      if (slowFrames > 90 && quality > 0.6) {
        quality = 0.6;
        slowFrames = 0;
        build();
      }
      render(time, delta);
      raf = window.requestAnimationFrame(frame);
    };
    const start = () => {
      if (disposed || raf || !visible) return;
      if (reduced) {
        render(performance.now(), 1);
        return;
      }
      last = 0;
      raf = window.requestAnimationFrame(frame);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) { onScroll(); start(); }
      else stop();
    };
    const onPointer = (event: PointerEvent) => {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const onReducedMotion = (event: MediaQueryListEvent) => {
      reduced = event.matches;
      stop();
      if (reduced) {
        smoothProgress = 0;
        targetProgress = 0;
        targetPointerX = 0;
        targetPointerY = 0;
        Object.assign(camera, { zoom: 1, roll: 0, x: 0, y: 0, skewX: 0, skewY: 0 });
      } else onScroll();
      start();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onReducedMotion);
    resize();
    onScroll();
    start();
    return () => {
      disposed = true;
      stop();
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onReducedMotion);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
