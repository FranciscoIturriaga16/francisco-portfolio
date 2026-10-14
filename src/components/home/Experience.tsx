import { FileText } from "lucide-react";
import { site } from "@/content/site";
import { education, experience } from "@/content/resume";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="pt-[140px]">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked" />
      <a
        href={site.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-5 text-[15px] font-medium text-foreground transition-colors hover:border-label hover:bg-raised"
      >
        <FileText aria-hidden="true" className="size-4" />
        Full resume (PDF)
      </a>
    </div>

    <ol className="mt-10 border-t border-border">
      {experience.map((item) => (
        <li
          key={`${item.role}-${item.period}`}
          className="flex flex-wrap gap-x-12 gap-y-2 border-b border-border py-7"
        >
          <p className="shrink grow basis-[180px] pt-[3px] font-mono text-sm text-label">{item.period}</p>
          <div className="min-w-0 shrink grow-[999] basis-[520px]">
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-base text-muted">{item.organization}</p>
            <p className="mt-2 text-base text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>

    <h3 className="mt-16 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-label">Education</h3>
    <ul className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
      {education.map((item) => (
        <li key={item.school} className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-semibold">{item.school}</p>
          <p className="text-base text-muted">{item.credential}</p>
          <p className="mt-2 font-mono text-[13px] text-label">{item.date}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
