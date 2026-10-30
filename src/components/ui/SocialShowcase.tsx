"use client";

import { SOCIAL_LINKS } from "@/lib/site";
import { sound } from "@/lib/soundFx";

interface SocialDetail {
  platform: string;
  badge: string;
  highlight: string;
  color: string;
}

const SOCIAL_DETAILS: Record<string, SocialDetail> = {
  Instagram: {
    platform: "Instagram",
    badge: "VISUAL LOGS & REELS",
    highlight: "Behind-the-scenes UI breakdowns, hardware voice tests & PyQt6 releases",
    color: "#E1306C",
  },
  YouTube: {
    platform: "YouTube",
    badge: "LONGFORM DEMOS & BENCHMARKS",
    highlight: "Full live walkthroughs of ULTRON 2.0 & JARVIS voice interactions",
    color: "#FF0000",
  },
  Threads: {
    platform: "Threads",
    badge: "DEV NOTES & ARCHITECTURE",
    highlight: "Fast engineering dispatches, skill additions & raw commit notes",
    color: "#00E5FF",
  },
  Facebook: {
    platform: "Facebook",
    badge: "COMMUNITY & ANNOUNCEMENTS",
    highlight: "Official guild updates and binary release announcements",
    color: "#1877F2",
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
        };

        return (
          <a
            key={s.platform}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.play("hover")}
            onClick={() => sound.play("click")}
            className="panel group relative flex flex-col justify-between overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-electric/50 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)]"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider"
                  style={{
                    backgroundColor: `${detail.color}18`,
                    color: detail.color,
                    border: `1px solid ${detail.color}40`,
                  }}
                >
                  {s.platform}
                </span>
                <span className="font-mono text-xs text-muted-grey transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-electric">
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
            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-3 font-mono text-[0.62rem] text-muted-grey">
              <span>{detail.badge}</span>
              <span className="text-cyan-electric">VERIFIED</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
