import { ArrowDown, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { pillButton } from "@/components/common/styles";

const Hero = () => (
  <section aria-labelledby="hero-title" className="pb-24 pt-[120px]">
    <p className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-1.5 text-sm text-secondary">
      <span aria-hidden="true" className="size-2 rounded-full bg-green" />
      {site.hero.badge}
    </p>
    <h1
      id="hero-title"
      className="mt-7 max-w-[960px] text-[clamp(44px,7vw,84px)] font-bold leading-[1.02] tracking-[-0.04em]"
    >
      {site.hero.title} <span className="text-accent">{site.hero.titleAccent}</span>
    </h1>
    <p className="mt-7 max-w-[620px] text-[clamp(18px,2vw,21px)] leading-[1.55] text-muted">{site.hero.subtitle}</p>
    <div className="mt-10 flex flex-wrap gap-3">
      <Link to="/#work" className={pillButton("primary")}>
        View my work
        <ArrowDown aria-hidden="true" className="size-[18px]" strokeWidth={2.2} />
      </Link>
      <a href={site.resumePath} download className={pillButton("outline")}>
        Download resume
        <Download aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </a>
    </div>
  </section>
);

export default Hero;
