// Sound effects synthesizer using browser Web Audio API.
// No external MP3/WAV files required. Zero latency, zero missing asset errors.

type SoundType = "hover" | "click" | "terminal" | "warp" | "toggle" | "scan";

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;
  private initialized: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("ggl_audio_fx");
      // Default to muted to respect user preference until enabled
      this.enabled = stored === "true";
    }
  }

  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("ggl_audio_fx", String(this.enabled));
    }
    if (this.enabled) {
      this.initContext();
      this.play("toggle");
    }
    return this.enabled;
  }

  public play(type: SoundType) {
    if (!this.enabled || typeof window === "undefined") return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      switch (type) {
        case "hover": {
          // Subtle high-tech blip (1200Hz to 1600Hz, 40ms)
          osc.type = "sine";
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(1800, now + 0.04);
          gain.gain.setValueAtTime(0.015, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
          osc.start(now);
          osc.stop(now + 0.04);
          break;
        }
        case "click": {
          // Sharp cyber click (800Hz to 200Hz)
          osc.type = "triangle";
          osc.frequency.setValueAtTime(950, now);
          osc.frequency.exponentialRampToValueAtTime(280, now + 0.06);
          gain.gain.setValueAtTime(0.04, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
          osc.start(now);
          osc.stop(now + 0.06);
          break;
        }
        case "terminal": {
          // Retro keystroke chirp
          osc.type = "sine";
          osc.frequency.setValueAtTime(1600 + Math.random() * 200, now);
          gain.gain.setValueAtTime(0.012, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
          osc.start(now);
          osc.stop(now + 0.025);
          break;
        }
        case "toggle": {
          // Dual harmonic power-on chime
          osc.type = "sine";
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
          gain.gain.setValueAtTime(0.03, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
          osc.start(now);
          osc.stop(now + 0.14);
          break;
        }
        case "warp": {
          // Sweeping resonant transition
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.exponentialRampToValueAtTime(720, now + 0.18);
          gain.gain.setValueAtTime(0.02, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
          osc.start(now);
          osc.stop(now + 0.22);
          break;
        }
        case "scan": {
          osc.type = "sine";
          osc.frequency.setValueAtTime(2200, now);
          osc.frequency.exponentialRampToValueAtTime(1100, now + 0.08);
          gain.gain.setValueAtTime(0.018, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
          break;
        }
      }
    } catch {
      // AudioContext could be blocked by browser policy prior to gesture
    }
  }
}

export const sound = new SoundEngine();
