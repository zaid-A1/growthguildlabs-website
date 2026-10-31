"use client";

import { SOCIAL_LINKS } from "@/lib/site";
import { sound } from "@/lib/soundFx";

interface SocialDetail {
  platform: string;
  badge: string;
  highlight: string;
  color: string;
  icon: string;
}

const SOCIAL_DETAILS: Record<string, SocialDetail> = {
  Instagram: {
    platform: "Instagram",
    badge: "VISUAL LOGS & REELS",
    highlight: "Behind-the-scenes UI breakdowns, hardware voice tests & PyQt6 releases",
    color: "#E1306C",
    icon: "IG",
  },
  YouTube: {
    platform: "YouTube",
    badge: "LONGFORM DEMOS & BENCHMARKS",
    highlight: "Full live walkthroughs of ULTRON 2.0 & JARVIS voice interactions",
    color: "#FF0000",
    icon: "YT",
  },
  Threads: {
    platform: "Threads",
    badge: "DEV NOTES & ARCHITECTURE",
    highlight: "Fast engineering dispatches, skill additions & raw commit notes",
    color: "#00E5FF",
    icon: "TH",
  },
  Facebook: {
    platform: "Facebook",
    badge: "COMMUNITY & ANNOUNCEMENTS",
    highlight: "Official guild updates and binary release announcements",
    color: "#1877F2",
    icon: "FB",
  },
};

export function SocialShowcase() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SOCIAL_LINKS.map((s) => {
        const detail = SOCIAL_DETAILS[s.platform] ?? {
          platform: s.platform,
          badge: "OFFICIAL CHANNEL",
          highlight: "Connect with the Growth Guild Labs builders",
          color: "#00E5FF",
          icon: s.platform.slice(0, 2).toUpperCase(),
        };

        return (
          <a
            key={s.platform}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.play("hover")}
            onClick={() => sound.play("click")}
            className="holo-card group relative flex flex-col justify-between overflow-hidden p-6 no-underline"
            style={{
              "--holo-accent": detail.color,
            } as React.CSSProperties}
          >
            {/* Accent glow top */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${detail.color}88, transparent)`,
              }}
            />

            {/* Top row */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="grid size-8 place-items-center rounded-lg font-mono text-[0.65rem] font-bold border"
                    style={{
                      color: detail.color,
                      borderColor: `${detail.color}44`,
                      background: `${detail.color}15`,
                    }}
                    aria-hidden="true"
                  >
                    {detail.icon}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider"
                    style={{
                      backgroundColor: `${detail.color}15`,
                      color: detail.color,
                      border: `1px solid ${detail.color}35`,
                    }}
                  >
                    {s.platform}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-grey transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-electric">
                  ↗
                </span>
              </div>

              <h4 className="mt-4 font-display text-lg font-semibold text-ice-white group-hover:text-cyan-electric transition-colors">
                {s.handle}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-mist">
                {detail.highlight}
              </p>
            </div>

            {/* Bottom status */}
            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-3 font-mono text-[0.6rem] text-muted-grey">
              <span>{detail.badge}</span>
              <span
                className="font-bold"
                style={{ color: detail.color }}
              >
                LIVE
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
