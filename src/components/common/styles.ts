import { cn } from "@/lib/utils";

/** Page width container shared by the header, main content and footer. The side padding clears notches in landscape. */
export const container =
  "mx-auto w-full max-w-[1120px] pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]";

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

/**
 * Makes a card's title link cover the whole card (the card needs `relative`), so the card can
 * also hold other links. The focus ring is drawn inset on the covering layer, since cards clip overflow.
 */
export const stretchedLink = (rounded: string) =>
  cn(
    "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent",
    rounded,
  );
