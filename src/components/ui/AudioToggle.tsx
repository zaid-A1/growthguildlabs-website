"use client";

import { useEffect, useState } from "react";
import { sound } from "@/lib/soundFx";

export function AudioToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const active = sound.isEnabled();
    if (active) {
      const raf = requestAnimationFrame(() => setEnabled(true));
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  const handleToggle = () => {
    const next = sound.toggle();
    setEnabled(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`group relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] transition-all duration-300 ${
        enabled
          ? "border-cyan-electric/60 bg-cyan-electric/10 text-cyan-electric shadow-[0_0_12px_rgba(0,229,255,0.25)]"
          : "border-hairline bg-void/60 text-muted-grey hover:border-hairline-strong hover:text-mist"
      }`}
      aria-label={enabled ? "Mute HUD Sound Effects" : "Enable HUD Sound Effects"}
      title={enabled ? "Mute HUD Audio FX" : "Enable Interactive HUD Audio FX"}
    >
      <span className="relative flex h-3 w-3 items-center justify-between">
        <span
          className={`h-full w-0.5 rounded-full transition-all duration-200 ${
            enabled ? "animate-[soundbar_0.8s_ease-in-out_infinite] bg-cyan-electric" : "h-1 bg-muted-grey"
          }`}
          style={{ animationDelay: "0ms" }}
        />
        <span
          className={`h-full w-0.5 rounded-full transition-all duration-200 ${
            enabled ? "animate-[soundbar_0.6s_ease-in-out_infinite] bg-cyan-electric" : "h-2 bg-muted-grey"
          }`}
          style={{ animationDelay: "150ms" }}
        />
        <span
          className={`h-full w-0.5 rounded-full transition-all duration-200 ${
            enabled ? "animate-[soundbar_0.9s_ease-in-out_infinite] bg-cyan-electric" : "h-1 bg-muted-grey"
          }`}
          style={{ animationDelay: "300ms" }}
        />
      </span>
      <span className="hidden sm:inline">
        {enabled ? "AUDIO ON" : "AUDIO FX"}
      </span>
    </button>
  );
}
