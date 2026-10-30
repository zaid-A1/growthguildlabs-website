import { ORB_COLORS } from "@/components/journey/orbColors";

/**
 * Designed CSS-only fallback for the 3D journey — used when WebGL is
 * unavailable or the visitor prefers reduced motion. Same visual beats,
 * no canvas: everything stays readable and accessible.
 */
export function StaticJourney() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Deep space wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,#071d24_0%,#03090d_58%)]" />

      {/* Faint star speckles */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, rgba(243,250,252,0.7) 50%, transparent 51%)," +
            "radial-gradient(1px 1px at 68% 12%, rgba(0,229,255,0.65) 50%, transparent 51%)," +
            "radial-gradient(1.4px 1.4px at 38% 64%, rgba(243,250,252,0.55) 50%, transparent 51%)," +
            "radial-gradient(1px 1px at 84% 52%, rgba(57,255,101,0.5) 50%, transparent 51%)," +
            "radial-gradient(1px 1px at 22% 82%, rgba(243,250,252,0.4) 50%, transparent 51%)," +
            "radial-gradient(1.2px 1.2px at 56% 34%, rgba(243,250,252,0.5) 50%, transparent 51%)",
          backgroundSize: "640px 640px",
        }}
      />

      {/* Shaded planet (CSS sphere + rim glow) */}
      <div className="absolute bottom-[-18%] left-[-8%] h-[64vmin] w-[64vmin] sm:bottom-[-14%] sm:left-[-4%]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(38% 38% at 34% 30%, #0d3a44 0%, #071d24 48%, #041016 72%, #02090c 100%)",
            boxShadow:
              "inset -6vmin -4vmin 14vmin rgba(0,0,0,0.72), 0 0 9vmin rgba(0,229,255,0.28)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(200deg, transparent 55%, rgba(57,255,101,0.14) 82%)",
          }}
        />
      </div>

      {/* Gateway hint ring (top-right distance) */}
      <div className="absolute right-[6%] top-[12%] hidden h-40 w-40 sm:block lg:h-52 lg:w-52">
        <div
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: "rgba(0,229,255,0.4)",
            boxShadow: "0 0 34px rgba(0,229,255,0.24), inset 0 0 24px rgba(0,229,255,0.14)",
          }}
        />
        <div
          className="absolute inset-5 rounded-full border border-dashed"
          style={{ borderColor: "rgba(57,255,101,0.28)" }}
        />
      </div>

      {/* Norse grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.14) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)",
          backgroundSize: "68px 46px",
          transform: "perspective(340px) rotateX(58deg)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top, black 30%, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 92%)",
        }}
      />

      {/* Five accent orbs */}
      <div className="absolute bottom-[17%] right-[8%] hidden w-52 flex-col gap-4 sm:flex">
        {ORB_COLORS.map((c) => (
          <div key={c} className="flex items-center gap-3">
            <span
              className="size-2.5 rounded-full"
              style={{ background: c, boxShadow: `0 0 14px ${c}` }}
            />
            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        ))}
      </div>

      {/* Vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_40%,rgba(3,9,13,0.82)_100%)]" />
    </div>
  );
}
