"use client";

import { useEffect, useState } from "react";
import { sound } from "@/lib/proceduralAudio";

export function AudioToggle() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMuted(sound.getMuted());
  }, []);

  const handleToggle = () => {
    const newMuted = sound.toggleMute();
    setMuted(newMuted);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider transition-all duration-300 ${
        muted
          ? "border-white/10 bg-white/5 text-muted-grey hover:border-white/20 hover:text-mist"
          : "border-cyan-electric/50 bg-cyan-electric/10 text-cyan-electric shadow-[0_0_15px_rgba(0,229,255,0.25)]"
      }`}
      title={muted ? "Enable futuristic sci-fi sound FX" : "Mute audio effects"}
      aria-label={muted ? "Enable audio effects" : "Mute audio effects"}
    >
      {/* Waveform indicator */}
      <span className="flex items-center gap-0.5 h-3">
        <span
          className={`w-0.5 rounded-full bg-current transition-all duration-300 ${
            muted ? "h-1" : "h-3 animate-[pulse_0.8s_ease-in-out_infinite]"
          }`}
        />
        <span
          className={`w-0.5 rounded-full bg-current transition-all duration-300 ${
            muted ? "h-1" : "h-2 animate-[pulse_1.1s_ease-in-out_infinite_0.2s]"
          }`}
        />
        <span
          className={`w-0.5 rounded-full bg-current transition-all duration-300 ${
            muted ? "h-1" : "h-3.5 animate-[pulse_0.9s_ease-in-out_infinite_0.4s]"
          }`}
        />
      </span>
      <span>{muted ? "AUDIO OFF" : "SFX ACTIVE"}</span>
    </button>
  );
}
