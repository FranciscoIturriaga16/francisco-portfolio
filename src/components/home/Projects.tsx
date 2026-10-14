import { useState } from "react";
import { categoryLabels, projects, type ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "development", label: categoryLabels.development },
  { value: "ux", label: categoryLabels.ux },
];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  const featured = visible.find((project) => project.featured);
  const rest = visible.filter((project) => project !== featured);

  return (
    <section id="work" aria-labelledby="work-title" className="pt-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading id="work-title" eyebrow="Selected work" title="Projects" />
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map(({ value, label }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(value)}
                className={cn(
                  "min-h-10 rounded-full border px-[18px] text-[15px] font-medium transition-colors",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border-strong text-secondary hover:border-label hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {featured && <FeaturedProjectCard project={featured} />}

      {rest.length > 0 && (
        <ul className="mt-6 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {rest.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;
