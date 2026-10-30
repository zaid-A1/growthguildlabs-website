import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

/** Standard chapter/story heading used across the site. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={cn(
          "font-display text-ice-white",
          "text-[clamp(1.9rem,3.4vw,3.1rem)] leading-[1.06] tracking-[-0.01em]"
        )}
      >
        {title}
      </Tag>
      {lead ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-grey text-pretty sm:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
