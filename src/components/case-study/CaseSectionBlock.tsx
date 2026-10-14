import { Check } from "lucide-react";
import Eyebrow from "@/components/common/Eyebrow";
import type { CaseSection } from "@/content/caseStudies";
import { cn } from "@/lib/utils";
import FigureGrid from "./FigureGrid";

interface CaseSectionBlockProps {
  id: string;
  number: string;
  title: string;
  section: CaseSection;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** One numbered case study section: label column on the left, content on the right (stacked on small screens). */
const CaseSectionBlock = ({ id, number, title, section }: CaseSectionBlockProps) => {
  const { comparison } = section;
  const headingId = `${id}-title`;

  return (
    <>
      <section id={id} aria-labelledby={headingId} className="flex flex-wrap gap-x-16 gap-y-6 pt-[120px]">
        <div className="shrink grow basis-[220px]">
          <p className="font-mono text-[13px] text-accent">{number}</p>
          <h2 id={headingId} className="mt-2 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em]">
            {title}
          </h2>
        </div>

        <div className="min-w-0 shrink grow-[999] basis-[560px] [&>*:first-child]:mt-0">
          {section.lead && <p className="text-[22px] leading-[1.5] tracking-[-0.01em]">{section.lead}</p>}

          {section.body?.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-muted">
              {paragraph}
            </p>
          ))}

          {section.points && (
            <dl className="mt-8 flex flex-col gap-5">
              {section.points.map((point) => (
                <div key={point.term}>
                  <dt className="font-semibold">{point.term}</dt>
                  <dd className="mt-1 text-base text-muted">{point.text}</dd>
                </div>
              ))}
            </dl>
          )}

          {section.quote && (
            <blockquote className="mt-10 rounded-2xl border border-border bg-surface p-8">
              <Eyebrow tone="label" size="sm">
                {section.quote.source ?? "From a user interview"}
              </Eyebrow>
              <p className="mt-3 text-2xl leading-[1.4] tracking-[-0.01em]">{section.quote.text}</p>
              <footer className="mt-4 text-[15px] text-label">{section.quote.attribution}</footer>
            </blockquote>
          )}

          {section.highlights && (
            <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
              {section.highlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-border bg-panel p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-base text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          )}

          {section.profiles && (
            <ul className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
              {section.profiles.map((profile) => (
                <li key={profile.title} className="rounded-2xl border border-border bg-surface p-7">
                  {profile.eyebrow && (
                    <Eyebrow tone={profile.primary ? "accent" : "label"} size="sm" className="mb-3">
                      {profile.eyebrow}
                    </Eyebrow>
                  )}
                  <h3 className="text-[22px] font-semibold tracking-[-0.01em]">{profile.title}</h3>
                  <p className="mt-2 text-base text-muted">{profile.text}</p>
                </li>
              ))}
            </ul>
          )}

          {section.insights && (
            <ol className="mt-8 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {section.insights.map((insight, index) => (
                <li key={insight.title} className="flex gap-5 bg-panel px-7 py-6">
                  <span aria-hidden="true" className="pt-0.5 font-mono text-[15px] text-accent">
                    {letters[index]}
                  </span>
                  <div>
                    <h3 className="font-semibold">{insight.title}</h3>
                    <p className="mt-1 text-base text-muted">{insight.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {comparison && (
            <>
              <h3 className="mt-12 text-xl font-semibold">{comparison.title}</h3>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[520px] border-collapse text-base">
                  <thead>
                    <tr className="bg-surface text-left">
                      {comparison.columns.map((column) => (
                        <th key={column} scope="col" className="px-5 py-3.5 font-medium text-label">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row) => (
                      <tr key={row.name} className={cn("border-t border-border", row.highlight && "bg-highlight")}>
                        <th scope="row" className={cn("px-5 py-3.5 text-left", row.highlight ? "font-semibold" : "font-normal")}>
                          {row.name}
                        </th>
                        <td className={cn("px-5 py-3.5", !row.highlight && "text-muted")}>{row.values[0]}</td>
                        <td className={cn("px-5 py-3.5", row.highlight ? "font-semibold text-accent" : "text-label")}>
                          {row.values[1]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {comparison.note && <p className="mt-4 text-base text-muted">{comparison.note}</p>}
            </>
          )}

          {section.featureGroups && (
            <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-8">
              {section.featureGroups.map((group, index) => (
                <div key={group.label ?? index}>
                  {group.label && (
                    <Eyebrow as="h3" tone="label" size="sm" className="mb-4">
                      {group.label}
                    </Eyebrow>
                  )}
                  <ul className="flex flex-col gap-3 text-base">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check aria-hidden="true" className="mt-1 size-[18px] flex-none text-accent" strokeWidth={2.2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {section.outro && <p className="mt-8 text-muted">{section.outro}</p>}

          {section.nextSteps && (
            <div className="mt-8 rounded-2xl border border-border bg-surface p-7">
              <Eyebrow as="h3" tone="label" size="sm">
                Up next
              </Eyebrow>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {section.nextSteps.map((step) => (
                  <li key={step} className="rounded-full border border-border-strong px-4 py-2 text-[15px] leading-snug">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {section.figures && <FigureGrid figures={section.figures} />}
    </>
  );
};

export default CaseSectionBlock;
