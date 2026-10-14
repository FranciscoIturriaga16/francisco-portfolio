import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  image: ProjectImage;
  className?: string;
  /** Use for images below the fold. */
  lazy?: boolean;
}

/**
 * Wraps a screenshot in the frame chosen in the content files.
 * Sizing (width, height or aspect ratio) comes from className.
 */
const DeviceFrame = ({ image, className, lazy }: DeviceFrameProps) => {
  const img = (
    <img
      src={image.src}
      alt={image.alt}
      loading={lazy ? "lazy" : undefined}
      decoding="async"
      className={cn(
        "block h-full w-full",
        image.frame === "plain" ? "object-contain" : "object-cover object-top",
      )}
    />
  );

  if (image.frame === "plain") {
    return <div className={className}>{img}</div>;
  }

  return (
    <div
      className={cn(
        "overflow-hidden border-[6px] border-frame bg-[#0E0F12]",
        image.frame === "phone" ? "rounded-[32px]" : "rounded-2xl",
        className,
      )}
    >
      {img}
    </div>
  );
};

export default DeviceFrame;
