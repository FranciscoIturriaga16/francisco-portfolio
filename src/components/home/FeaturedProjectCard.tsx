import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/content/projects";
import { cardSurface } from "@/components/common/styles";
import { cn } from "@/lib/utils";
import ProjectTags from "./ProjectTags";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const phones = project.caseStudyImages.filter((image) => image.frame === "phone").slice(0, 2);

  return (
    <Link
      to={`/case-study/${project.id}`}
      className={cn(
        cardSurface,
        "group mt-10 flex flex-wrap overflow-hidden rounded-3xl text-foreground transition-colors hover:border-border-strong",
      )}
    >
      <div className="flex min-h-[400px] min-w-0 shrink grow-[999] basis-[520px] items-end justify-center gap-5 bg-raised px-6 pt-12">
        {phones.length > 0 ? (
          phones.map((image, index) => (
            <div
              key={image.src}
              className={cn(
                "min-w-0 max-w-[180px] flex-1 overflow-hidden rounded-t-[26px] border-[6px] border-b-0 border-frame bg-[#0E0F12]",
                index === 0 ? "h-[340px]" : "h-[300px]",
              )}
            >
              <img src={image.src} alt={image.alt} className="block h-full w-full object-cover object-top" />
            </div>
          ))
        ) : (
          <img
            src={project.cardImage.src}
            alt={project.cardImage.alt}
            className="block max-h-[352px] w-full rounded-t-2xl object-cover object-top"
          />
        )}
      </div>
      <div className="flex shrink grow basis-[340px] flex-col justify-center gap-4 p-10">
        <ProjectTags project={project} showFeatured />
        <h3 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em]">{project.title}</h3>
        <p className="text-muted">{project.summary}</p>
        <p className="font-mono text-[13px] text-label">{project.stack.join(" · ")}</p>
        <span className="mt-2 inline-flex items-center gap-2 font-medium text-accent">
          Read case study
          <ArrowRight aria-hidden="true" className="size-[18px] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;
