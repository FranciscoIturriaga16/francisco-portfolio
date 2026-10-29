import { cn } from "@/lib/utils";

/** The FI monogram, same artwork as public/favicon.svg. Decorative: always sits next to the name. */
const Monogram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={cn("shrink-0", className)}>
    <rect x="1" y="1" width="62" height="62" rx="14" fill="#161A27" stroke="#2A3145" strokeWidth="2" />
    <path d="M19.5 48V19.5H37M19.5 33H33" stroke="#E8EAF0" strokeWidth="7" fill="none" />
    <rect x="41" y="16" width="7" height="32" fill="#7C95FF" />
  </svg>
);

export default Monogram;
