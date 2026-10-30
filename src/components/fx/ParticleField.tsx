"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number; alphaDir: number; color: string;
}

const COLORS = ["#00e5ff", "#39ff65", "#7c5cff", "#ffb300", "#ff1744"];

/**
 * Ambient particle field — hundreds of tiny floating dots that react to
 * the pointer and connect nearby particles with hairline edges.
 * Uses a single <canvas> element so the DOM stays clean.
 * Completely off for prefers-reduced-motion users.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const particles: Particle[] = [];
    const COUNT = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 14000));
    const LINK_DIST = 130;
    const MOUSE_FORCE = 90;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const spawn = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 1 + Math.random() * 1.5,
          alpha: 0.2 + Math.random() * 0.5,
          alphaDir: Math.random() > 0.5 ? 1 : -1,
          color,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_FORCE) {
          const f = (1 - d / MOUSE_FORCE) * 0.06;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }

        // Velocity damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Breathing alpha
        p.alpha += p.alphaDir * 0.003;
        if (p.alpha > 0.7 || p.alpha < 0.1) p.alphaDir *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x, ey = p.y - q.y;
          const dist = Math.sqrt(ex * ex + ey * ey);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `${p.color}${Math.round(opacity * 255).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", () => { resize(); spawn(); });

    resize();
    spawn();
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  );
}
