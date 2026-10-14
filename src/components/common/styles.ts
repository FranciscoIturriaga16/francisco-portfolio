import { cn } from "@/lib/utils";

/** Page width container shared by the header, main content and footer. */
export const container = "mx-auto w-full max-w-[1120px] px-6";

const pillBase =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 text-base transition-colors";

/** Large pill shaped call to action (hero, contact). */
export const pillButton = (variant: "primary" | "outline", className?: string) =>
  cn(
    pillBase,
    variant === "primary"
      ? "bg-accent font-semibold text-background hover:bg-accent-soft-foreground"
      : "border border-border-strong font-medium text-foreground hover:border-label hover:bg-raised",
    className,
  );

/** Card surface used by project cards, the contact block and the next project link. */
export const cardSurface = "border border-border bg-surface";
