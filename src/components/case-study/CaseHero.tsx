import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/common/Eyebrow";
import Tag from "@/components/common/Tag";
import DeviceFrame from "@/components/common/DeviceFrame";
import type { Project } from "@/content/projects";
import type { CaseStudy } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

interface CaseHeroProps {
  project: Project;
  caseStudy: CaseStudy;
  /** Two digit position of the project, for example "01". */
  number: string;
}

/** Phone sizes from the design: the middle phone is slightly larger. */
const phoneSizes = [
  "max-w-[220px] aspect-[220/460]",
  "max-w-[240px] aspect-[240/500]",
  "max-w-[220px] aspect-[220/460] hidden sm:block",
];

const HeroVisual = ({ project }: { project: Project }) => {
  const images = project.caseStudyImages;
  const phones = images.filter((image) => image.frame === "phone");

  return (
    <figure className="flex items-end justify-center gap-4 rounded-3xl border border-border bg-surface px-6 py-12 sm:gap-8">
      {phones.length > 0
        ? phones.slice(0, 3).map((image, index) => (
            <DeviceFrame
              key={image.src}
              image={image}
              className={cn("min-w-0 flex-1", phoneSizes[index], index === 1 && "rounded-[34px]")}
            />
          ))
        : images.slice(0, 1).map((image) => (
            <DeviceFrame key={image.src} image={image} className="w-full max-w-[880px]" />
          ))}
    </figure>
  );
};

const CaseHero = ({ project, caseStudy, number }: CaseHeroProps) => {
  const meta = [
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.join(" · ") },
    { label: "Platform", value: caseStudy.platform },
  ];

  return (
    <>
      <section aria-labelledby="case-title" className="pb-12 pt-14">
        <Link
          to="/#work"
          className="inline-flex min-h-11 items-center gap-2 text-[15px] text-nav transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All projects
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Eyebrow>Case study · {number}</Eyebrow>
          {project.status && (
            <Tag dot="amber" dotSize="md" className="gap-2">
              {project.status}
            </Tag>
          )}
        </div>
        <h1 id="case-title" className="mt-4 text-[clamp(48px,8vw,96px)] font-bold leading-none tracking-[-0.04em]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[720px] text-[clamp(20px,2.4vw,26px)] leading-[1.4] tracking-[-0.01em] text-secondary">
          {caseStudy.tagline}
        </p>

        <dl className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {meta.map(({ label, value }) => (
            <div key={label} className="bg-panel px-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-label">{label}</dt>
              <dd className="mt-1.5 text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <HeroVisual project={project} />
    </>
  );
};

export default CaseHero;
