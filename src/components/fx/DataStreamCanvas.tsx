"use client";

import { useEffect, useRef } from "react";

/**
 * Animated DNA / data-stream helix.
 * Pure canvas — no dependencies.  Used as an ambient section divider.
 */
export function DataStreamCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio, 2);
    let w = 0, h = 0, raf = 0, t = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      t += 0.018;
      ctx.clearRect(0, 0, w, h);

      const COLS = Math.floor(w / 28);
      const dropH = h;

      for (let col = 0; col < COLS; col++) {
        const x = col * 28 + 14;
        const speed = 0.6 + (col % 3) * 0.25;
        const offset = col * 0.55;
        const wave = Math.sin(t * speed + offset) * (h * 0.3);
        const cy = h * 0.5 + wave;

        // Draw vertical data column
        const CHARS = ["0", "1", "A", "F", "∞", "◈", "⬡", "▲", "■"];
        const rows = Math.floor(dropH / 20);

        for (let row = 0; row < rows; row++) {
          const fy = cy - (rows / 2) * 20 + row * 20;
          if (fy < 0 || fy > h) continue;

          const distFromCenter = Math.abs(fy - cy) / (rows * 10);
          const alpha = Math.max(0, 0.6 - distFromCenter * 1.5);
          if (alpha <= 0) continue;

          const char = CHARS[Math.floor((t * 3 + col + row) % CHARS.length)];
          const isBright = row === Math.floor(rows * (0.5 + Math.sin(t * speed + offset) * 0.5));

          const hue = col % 2 === 0 ? "0,229,255" : "57,255,101";
          ctx.font = `${isBright ? "bold" : ""} 10px monospace`;
          ctx.fillStyle = isBright
            ? `rgba(255,255,255,${alpha})`
            : `rgba(${hue},${alpha * 0.7})`;
          ctx.textAlign = "center";
          ctx.fillText(char, x, fy);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none w-full ${className}`}
    />
  );
}
