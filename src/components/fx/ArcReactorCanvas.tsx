"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a live pulsing arc-reactor ring in a <canvas>.
 * Used in the hero and on product pages as an ambient ambient glow element.
 * No Three.js — pure 2D canvas so it's lightweight for inner-page use.
 */
export function ArcReactorCanvas({
  color = "#00e5ff",
  size = 320,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2;
    let raf = 0;
    let t = 0;

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
    const rgb = hexToRgb(color);

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, size, size);

      const pulse = 0.7 + 0.3 * Math.sin(t * 1.8);
      const rotate = t * 0.4;

      // Outer glow ring
      const grad = ctx.createRadialGradient(cx, cy, size * 0.28, cx, cy, size * 0.5);
      grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.12 * pulse})`);
      grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      // Rings
      const RINGS = [
        { r: size * 0.42, w: 1.5, alpha: 0.55 * pulse },
        { r: size * 0.35, w: 0.8, alpha: 0.35 * pulse },
        { r: size * 0.27, w: 1.0, alpha: 0.45 * pulse },
        { r: size * 0.18, w: 2.5, alpha: 0.65 * pulse },
      ];
      for (const ring of RINGS) {
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${ring.alpha})`;
        ctx.lineWidth = ring.w;
        ctx.stroke();
      }

      // Rotating spokes
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotate);
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * size * 0.18, Math.sin(angle) * size * 0.18);
        ctx.lineTo(Math.cos(angle) * size * 0.35, Math.sin(angle) * size * 0.35);
        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.5 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // Triangular core
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-rotate * 0.7);
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 6;
        const r = size * 0.1;
        ctx[i === 0 ? "moveTo" : "lineTo"](Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.8 * pulse})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Fill with glow
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.15 * pulse})`;
      ctx.fill();
      ctx.restore();

      // Core dot
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.06);
      coreGrad.addColorStop(0, `rgba(255,255,255,${0.95 * pulse})`);
      coreGrad.addColorStop(0.4, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.6 * pulse})`);
      coreGrad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.06, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
