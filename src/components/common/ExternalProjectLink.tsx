import { ArrowUpRight } from "lucide-react";
import type { ExternalLink } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Small external link on a project card. Sits above the card's stretched link. */
const ExternalProjectLink = ({ link, className }: { link: ExternalLink; className?: string }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "relative z-10 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-secondary transition-colors hover:text-foreground",
      className,
    )}
  >
    {link.label}
    <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2.2} />
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

export default ExternalProjectLink;
