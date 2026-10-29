import { Link } from "react-router-dom";
import type { Project } from "@/content/projects";
import { cardSurface, stretchedLink } from "@/components/common/styles";
import ExternalProjectLink from "@/components/common/ExternalProjectLink";
import { cn } from "@/lib/utils";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    className={cn(
      cardSurface,
      "group relative flex w-full flex-col overflow-hidden rounded-[20px] text-foreground transition-colors hover:border-border-strong",
    )}
  >
    <div className="h-60 overflow-hidden bg-raised">
      <img
        src={project.cardImage.src}
        alt={project.cardImage.alt}
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
    <div className="flex flex-col gap-2.5 p-7">
      <ProjectTags project={project} />
      <h3 className="text-2xl font-semibold tracking-[-0.02em]">
        <Link to={`/case-study/${project.id}`} className={stretchedLink("after:rounded-[20px]")}>
          {project.title}
        </Link>
      </h3>
      <p className="text-base text-muted">{project.summary}</p>
      <p className="font-mono text-[13px] text-label">{project.stack.join(" · ")}</p>
      {project.link && <ExternalProjectLink link={project.link} className="self-start" />}
    </div>
  </article>
);

export default ProjectCard;
