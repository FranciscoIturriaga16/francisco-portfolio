import Eyebrow from "@/components/common/Eyebrow";
import { site } from "@/content/site";
import { skillGroups } from "@/content/resume";
import { cn } from "@/lib/utils";

const About = () => {
  const [lead, ...rest] = site.about.paragraphs;
  const { photo } = site;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={cn("flex flex-wrap gap-x-16 gap-y-8 pt-[140px]", !photo && "flex-col gap-y-5")}
    >
      <div className={cn(photo && "shrink grow basis-[260px]")}>
        <Eyebrow as="h2" id="about-title">
          About
        </Eyebrow>
        {photo && (
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            className="mt-5 aspect-[4/5] w-full max-w-[280px] rounded-[20px] border border-border bg-raised object-cover"
          />
        )}
      </div>

      <div className="min-w-0 shrink grow-[999] basis-[520px]">
        <p className="text-[clamp(22px,2.6vw,28px)] leading-[1.45] tracking-[-0.015em]">{lead}</p>
        {rest.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-muted">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <Eyebrow as="h3" tone="label" size="sm">
                {group.label}
              </Eyebrow>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full bg-raised px-3.5 py-1.5 text-[15px] leading-snug">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-[15px] text-label">{site.about.languages}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
