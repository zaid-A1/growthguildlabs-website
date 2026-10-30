export type ClassValue = string | false | null | undefined;

/** Tiny className combiner (keeps the dependency list lean). */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
