import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  tone?: "lit" | "calm";
  className?: string;
}

/** Small truthful status chip (availability / version / platform). */
export function StatusBadge({
  label,
  tone = "lit",
  className,
}: StatusBadgeProps) {
  const dot =
    tone === "lit" ? "bg-neon-green" : "bg-muted-grey";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1",
        "font-mono text-micro uppercase tracking-[0.18em]",
        tone === "lit"
          ? "border-[#39ff6555] bg-[#39ff650f] text-ice-white"
          : "border-hairline-strong bg-void/60 text-muted-grey",
        className
      )}
    >
      <span
        className={cn("inline-block size-1.5 rounded-full", dot, "animate-pulse-soft")}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
