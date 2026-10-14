import { Mail } from "lucide-react";
import Eyebrow from "@/components/common/Eyebrow";
import { cardSurface, pillButton } from "@/components/common/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const [emailUser, emailDomain] = site.email.split("@");

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className={cn(cardSurface, "mt-[140px] rounded-[28px] p-[clamp(32px,6vw,72px)]")}
  >
    <Eyebrow>Contact</Eyebrow>
    <h2
      id="contact-title"
      className="mt-3 max-w-[760px] text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.05] tracking-[-0.035em]"
    >
      {site.contact.title}
    </h2>
    <p className="mt-5 max-w-[560px] text-muted">{site.contact.text}</p>
    <div className="mt-9 flex flex-wrap gap-3">
      <a href={`mailto:${site.email}`} className={pillButton("primary", "min-w-0 py-2")}>
        <Mail aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={2} />
        {/* Lets the address wrap after the @ on narrow screens instead of mid word. */}
        <span>
          {emailUser}@<wbr />
          {emailDomain}
        </span>
      </a>
      <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={pillButton("outline")}>
        LinkedIn
      </a>
      {site.githubUrl && (
        <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className={pillButton("outline")}>
          GitHub
        </a>
      )}
    </div>
  </section>
);

export default Contact;
