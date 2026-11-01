"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hologram3DCanvas } from "@/components/fx/Hologram3DCanvas";
import { PRODUCTS, getProduct } from "@/lib/products";
import { getReleaseByProductId } from "@/lib/releases";
import { sound } from "@/lib/proceduralAudio";

const PRODUCT_THEMES: Record<string, { color: string; bgGlow: string; label: string }> = {
  "ultron-2": {
    color: "#FFD700",
    bgGlow: "rgba(255, 215, 0, 0.12)",
    label: "Quantum Core OS Intelligence",
  },
  "ultron-2-connector": {
    color: "#00E5FF",
    bgGlow: "rgba(0, 229, 255, 0.12)",
    label: "Encrypted Companion Gateway",
  },
  "jarvis-2": {
    color: "#FF1744",
    bgGlow: "rgba(255, 23, 68, 0.12)",
    label: "3D Hologram Face Avatar & Mark 85 Core",
  },
  "jarvis-2-phone": {
    color: "#7C5CFF",
    bgGlow: "rgba(124, 92, 255, 0.12)",
    label: "Offline Vosk ASR & Android Agent",
  },
  "friday-ai": {
    color: "#00FF88",
    bgGlow: "rgba(0, 255, 136, 0.12)",
    label: "Gemini Live Native Audio Engine",
  },
};

export function InteractiveEcosystemShowcase() {
  const [activeId, setActiveId] = useState<string>("ultron-2");
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  const product = getProduct(activeId) || PRODUCTS[0];
  const release = getReleaseByProductId(activeId);
  const theme = PRODUCT_THEMES[activeId] || PRODUCT_THEMES["ultron-2"];

  const handleSelect = (id: string) => {
    setActiveId(id);
    sound.playSwitch();
    setCopiedHash(false);
  };

  const handleCopyHash = (hash: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hash).then(() => {
        setCopiedHash(true);
        sound.playSuccess();
        setTimeout(() => setCopiedHash(false), 2500);
      });
    }
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-void/80 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Background Dynamic Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[550px] rounded-full blur-[140px] transition-colors duration-700"
        style={{ backgroundColor: theme.bgGlow }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[550px] rounded-full blur-[140px] transition-colors duration-700"
        style={{ backgroundColor: theme.bgGlow }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-grey uppercase tracking-widest">
            <span className="size-2 rounded-full animate-ping" style={{ backgroundColor: theme.color }} />
            <span>Interactive 3D Holographic Telemetry</span>
          </div>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-ice-white">
            Inspect System Core in Real Time
          </h3>
        </div>

        {/* 5 Product Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {PRODUCTS.map((p) => {
            const pTheme = PRODUCT_THEMES[p.id];
            const isSelected = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelect(p.id)}
                onMouseEnter={() => sound.playHover()}
                className={`relative rounded-xl px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "border text-ice-white shadow-lg"
                    : "border border-white/5 bg-white/5 text-mist hover:border-white/20 hover:text-ice-white"
                }`}
                style={
                  isSelected
                    ? {
                        borderColor: pTheme.color,
                        backgroundColor: `${pTheme.color}1a`,
                        boxShadow: `0 0 20px ${pTheme.color}33`,
                      }
                    : {}
                }
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Dual Stage: 3D Hologram Canvas + Live Architecture Telemetry */}
      <div className="relative z-10 mt-8 grid gap-10 lg:grid-cols-[1.1fr_1.3fr] items-center">
        {/* Left: 3D WebGL Hologram Model */}
        <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-4">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-[0.65rem] tracking-wider text-muted-grey">
            <span className="text-cyan-electric">●</span>
            <span>3D ROTATION: DRAG / GYRO ACTIVE</span>
          </div>

          {/* 3D WebGL Canvas */}
          <div className="my-2">
            <Hologram3DCanvas color={theme.color} size={360} />
          </div>

          <div className="mt-2 flex items-center justify-between w-full border-t border-white/5 pt-3 font-mono text-[0.68rem] text-muted-grey">
            <span style={{ color: theme.color }}>{theme.label}</span>
            <span className="text-muted-grey">ROTATE / TILT 360°</span>
          </div>
        </div>

        {/* Right: Live Telemetry & Verified Specs */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div>
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  color: theme.color,
                  borderColor: `${theme.color}44`,
                  backgroundColor: `${theme.color}0f`,
                }}
              >
                {product.platform}
              </span>
              <span className="font-mono text-xs text-muted-grey">
                {product.status.state}
              </span>
            </div>

            <h4
              className="mt-4 font-display text-3xl font-black transition-colors"
              style={{ color: theme.color }}
            >
              {product.name}
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-mist font-light">
              {product.summary}
            </p>
          </div>

          {/* Architecture Spec Matrix */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-grey">
                Primary Runtime
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-ice-white">
                {product.stack[0]?.value || "PyQt6 Architecture Shell"}
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-grey">
                AI Neural Layer
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-ice-white">
                {product.stack[2]?.value || "Gemini Live Voice Pipeline"}
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-grey">
                Executable Package
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-ice-white truncate">
                {release?.fileName || product.packaging}
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-grey">
                Package Size
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-ice-white">
                {release?.fileSizeFormatted || "Verified Standalone"}
              </p>
            </div>
          </div>

          {/* Cryptographic Verification Bar */}
          {release && (
            <div className="rounded-xl border border-white/10 bg-void/90 p-3.5">
              <div className="flex items-center justify-between text-[0.68rem] font-mono text-muted-grey">
                <span>SHA-256 INTEGRITY DIGEST:</span>
                <button
                  type="button"
                  onClick={() => handleCopyHash(release.sha256)}
                  className="text-cyan-electric hover:underline cursor-pointer"
                >
                  {copiedHash ? "✓ COPIED TO CLIPBOARD" : "[COPY HASH]"}
                </button>
              </div>
              <p className="mt-1.5 font-mono text-[0.62rem] text-mist/80 break-all select-all bg-white/[0.03] p-1.5 rounded border border-white/5">
                {release.sha256}
              </p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {release?.downloadUrl && (
              <a
                href={release.downloadUrl}
                download
                onClick={() => sound.playClick()}
                className="btn-neon font-bold text-xs px-6 py-3 shadow-lg"
                style={{
                  borderColor: theme.color,
                  color: theme.color,
                }}
              >
                Download {product.name} ↓
              </a>
            )}
            <Link
              href={`/products/${product.id}`}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-ice-white transition-colors py-3"
            >
              <span>Full System Profile</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
