import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { container } from "@/components/common/styles";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSectionBlock from "@/components/case-study/CaseSectionBlock";
import NextProject from "@/components/case-study/NextProject";
import { getCaseStudy } from "@/content/caseStudies";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import NotFound from "./NotFound";

const pad = (value: number) => String(value).padStart(2, "0");

const CaseStudy = () => {
  const { projectId } = useParams();
  const index = projects.findIndex((project) => project.id === projectId);
  const project = projects[index];
  const caseStudy = getCaseStudy(projectId);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} case study | ${site.name}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project || !caseStudy) return <NotFound />;

  // The last project wraps around to the first.
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main id="main" className={container}>
        <CaseHero project={project} caseStudy={caseStudy} number={pad(index + 1)} />
        {caseStudy.sections.map((section, position) => (
          <CaseSectionBlock key={section.id} number={pad(position + 1)} section={section} />
        ))}
        <NextProject project={nextProject} />
      </main>
      <SiteFooter />
    </>
  );
};

export default CaseStudy;
