"use client";

import { useMemo } from "react";

const TECH_ITEMS = [
  { label: "PYTHON 3.12 CORE", icon: "⚡" },
  { label: "PYQT6 CYBERNETIC HUD", icon: "🖥️" },
  { label: "VOSK OFFLINE SPEECH ASR", icon: "🎙️" },
  { label: "GEMINI MULTIMODAL LIVE", icon: "🧠" },
  { label: "FASTMCP TOOL ORCHESTRATION", icon: "⚙️" },
  { label: "ANDROID JETPACK COMPOSE", icon: "📱" },
  { label: "THREE.JS GLSL SHADER PIPELINE", icon: "✨" },
  { label: "HARDWARE TELEMETRY & RADAR", icon: "📡" },
  { label: "LOCAL TCP/UDP COMPANION BRIDGE", icon: "🔗" },
  { label: "SHA-256 SIGNED BINARY PAYLOADS", icon: "🛡️" },
];

export function TechMarquee() {
  const doubled = useMemo(() => [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS], []);

  return (
    <div className="relative w-full overflow-hidden border-y border-hairline bg-void/80 py-3.5 backdrop-blur-md">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-8 hover:[animation-play-state:paused]">
        {doubled.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.25em] text-muted-grey transition-colors hover:text-cyan-electric"
          >
            <span className="text-sm opacity-80">{item.icon}</span>
            <span className="font-semibold">{item.label}</span>
            <span className="ml-5 text-cyan-electric/40">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
