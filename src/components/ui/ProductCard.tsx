"use client";

import Image from "next/image";
import Link from "next/link";
import { ACCENTS, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Tilt } from "@/components/ui/Tilt";
import { sound } from "@/lib/soundFx";

interface ProductCardProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

/**
 * Directory card for a product. Reads everything from the typed product so
 * cards never drift out of sync with detail pages. The card leans toward
 * the pointer on fine-pointer devices (see <Tilt/>).
 */
export function ProductCard({ product, className, priority }: ProductCardProps) {
  const accent = ACCENTS[product.accent];

  return (
    <Tilt className="h-full" max={3}>
      <Link
        href={`/products/${product.id}`}
        onMouseEnter={() => sound.play("hover")}
        onClick={() => sound.play("click")}
        className={cn(
          "panel group relative flex h-full flex-col overflow-hidden",
          "p-6 transition-[transform,border-color,box-shadow] duration-500 ease-(--ease-cinematic)",
          "hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,currentColor_35%,transparent)]",
          "hover:shadow-(--shadow-glow-cyan)",
          className
        )}
        style={
          {
            "--accent": accent.color,
            borderColor: `${accent.color}26`,
          } as React.CSSProperties
        }
      >
        {/* accent wash */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`, opacity: 0.4 }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(60% 55% at 70% 8%, ${accent.soft}, transparent 70%)` }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              {product.platform}
            </p>
            <h3 className="mt-2 font-display text-[1.35rem] leading-tight text-ice-white">
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-mist">{product.role}</p>
          </div>

          <span
            className={cn(
              "hud-frame relative size-20 shrink-0 overflow-hidden rounded-xl border border-hairline bg-void/70",
              "transition-transform duration-500 group-hover:scale-105"
            )}
            style={{ "--frame-accent": `${accent.color}99` } as React.CSSProperties}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="80px"
              className="object-contain p-2 [image-rendering:auto]"
              priority={priority}
            />
          </span>
        </div>

        {/* truth footer */}
        <div className="relative mt-6 flex flex-wrap items-center gap-2">
          {product.chips.slice(0, 3).map((chip) => (
            <span
              key={chip}
              className="spec-chip"
              style={{ color: `${accent.color}d9` }}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-hairline pt-4">
          <span className="font-mono text-micro uppercase tracking-[0.24em] text-muted-grey">
            {product.status.state}
          </span>
          <span
            aria-hidden="true"
            className="font-mono text-sm transition-transform duration-500 group-hover:translate-x-1"
            style={{ color: accent.color }}
          >
            →
          </span>
        </div>
      </Link>
    </Tilt>
  );
}
