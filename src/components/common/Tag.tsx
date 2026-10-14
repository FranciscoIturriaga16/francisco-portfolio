import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  variant?: "outline" | "featured";
  /** Adds a colored status dot before the text. */
  dot?: "amber" | "green";
  /** The case study hero uses a slightly larger dot. */
  dotSize?: "sm" | "md";
  className?: string;
}

const Tag = ({ children, variant = "outline", dot, dotSize = "sm", className }: TagProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] leading-snug",
      variant === "featured" ? "bg-accent-soft text-accent-soft-foreground" : "border border-border-strong text-secondary",
      className,
    )}
  >
    {dot && (
      <span aria-hidden="true" className={cn("rounded-full", dotSize === "md" ? "size-2" : "size-1.5", dot === "amber" ? "bg-amber" : "bg-green")} />
    )}
    {children}
  </span>
);

export default Tag;
