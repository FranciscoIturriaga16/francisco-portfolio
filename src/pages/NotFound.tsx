import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Eyebrow from "@/components/common/Eyebrow";
import { container, pillButton } from "@/components/common/styles";
import { cn } from "@/lib/utils";

const NotFound = () => (
  <>
    <SiteHeader />
    <main id="main" className={cn(container, "pb-12 pt-[120px]")}>
      <Eyebrow>Error 404</Eyebrow>
      <h1 className="mt-4 text-[clamp(44px,7vw,84px)] font-bold leading-[1.02] tracking-[-0.04em]">Page not found</h1>
      <p className="mt-6 max-w-[560px] text-[clamp(18px,2vw,21px)] text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className={pillButton("primary", "mt-10")}>
        <ArrowLeft aria-hidden="true" className="size-[18px]" strokeWidth={2.2} />
        Back to home
      </Link>
    </main>
    <SiteFooter />
  </>
);

export default NotFound;
