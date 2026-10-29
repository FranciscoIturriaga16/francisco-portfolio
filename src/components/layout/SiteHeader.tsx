import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { container } from "@/components/common/styles";
import Monogram from "@/components/common/Monogram";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
];

const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
    <nav
      aria-label="Main"
      className={cn(container, "flex flex-wrap items-center justify-between gap-4 py-4")}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2.5 text-base font-semibold tracking-[-0.01em] text-foreground transition-colors hover:text-accent-soft-foreground"
      >
        <Monogram className="size-7" />
        {site.name}
      </Link>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] uppercase tracking-[0.06em] sm:gap-x-7">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-nav transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/#contact"
            className="inline-block rounded-full bg-accent px-4 py-2 font-medium text-background transition-colors hover:bg-accent-soft-foreground"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default SiteHeader;
