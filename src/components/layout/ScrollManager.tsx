import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Handles scrolling on every navigation:
 * a URL with a hash (/#work) scrolls to that section, including when arriving from another page;
 * any other navigation starts at the top of the page.
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const samePage = previousPathname.current === pathname;
    previousPathname.current = pathname;
    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    // Smooth only within the same page; a new page should simply start at the top.
    window.scrollTo({ top: 0, left: 0, behavior: samePage ? behavior : "auto" });
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
