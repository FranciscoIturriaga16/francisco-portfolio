import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Element to render, so the label can double as a heading. Defaults to a paragraph. */
  as?: ElementType;
  tone?: "accent" | "label";
  size?: "sm" | "md";
  className?: string;
  id?: string;
}

/** Small uppercase monospace label that sits above headings. */
const Eyebrow = ({ children, as: Component = "p", tone = "accent", size = "md", className, id }: EyebrowProps) => (
  <Component
    id={id}
    className={cn(
      "font-mono font-normal uppercase tracking-[0.08em]",
      size === "md" ? "text-[13px]" : "text-xs",
      tone === "accent" ? "text-accent" : "text-label",
      className,
    )}
  >
    {children}
  </Component>
);

export default Eyebrow;
