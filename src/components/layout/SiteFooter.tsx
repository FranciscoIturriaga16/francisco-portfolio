import { site } from "@/content/site";
import { container } from "@/components/common/styles";
import { cn } from "@/lib/utils";

interface SiteFooterProps {
  /** Shows the short sign off after the copyright line (homepage only in the design). */
  showNote?: boolean;
}

const linkClass = "text-muted transition-colors hover:text-foreground";

const SiteFooter = ({ showNote = false }: SiteFooterProps) => (
  <footer className="mt-24 border-t border-border">
    <div
      className={cn(container, "flex flex-wrap items-center justify-between gap-4 py-8 text-[15px] text-label")}
    >
      <p>
        © {new Date().getFullYear()} {site.name}
        {showNote && ` · ${site.footerNote}`}
      </p>
      <ul className="flex flex-wrap gap-6">
        <li>
          <a href={`mailto:${site.email}`} className={linkClass}>
            Email
          </a>
        </li>
        <li>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
        </li>
        {site.githubUrl && (
          <li>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
        )}
        <li>
          <a href={site.resumePath} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default SiteFooter;
