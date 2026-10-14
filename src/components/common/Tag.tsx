import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  variant?: "outline" | "featured";
  /** Adds a colored status dot before the text. */
  dot?: "amber" | "green";
  className?: string;
}

const Tag = ({ children, variant = "outline", dot, className }: TagProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] leading-snug",
      variant === "featured" ? "bg-accent-soft text-accent-soft-foreground" : "border border-border-strong text-secondary",
      className,
    )}
  >
    {dot && (
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", dot === "amber" ? "bg-amber" : "bg-green")} />
    )}
    {children}
  </span>
);

export default Tag;
