import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/common/Eyebrow";
import { cardSurface } from "@/components/common/styles";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const NextProject = ({ project }: { project: Project }) => (
  <Link
    to={`/case-study/${project.id}`}
    className={cn(
      cardSurface,
      "group mt-[140px] flex flex-wrap items-center justify-between gap-6 rounded-3xl p-10 text-foreground transition-colors hover:border-border-strong",
    )}
  >
    <div className="min-w-0">
      <Eyebrow tone="label" size="sm">
        Next project
      </Eyebrow>
      <p className="mt-2 text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">{project.title}</p>
      <p className="mt-1.5 text-base text-muted">{project.summary}</p>
    </div>
    <span
      aria-hidden="true"
      className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-background transition-transform group-hover:translate-x-1"
    >
      <ArrowRight className="size-[22px]" strokeWidth={2.2} />
    </span>
  </Link>
);

export default NextProject;
