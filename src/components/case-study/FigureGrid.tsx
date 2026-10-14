import DeviceFrame from "@/components/common/DeviceFrame";
import type { Figure } from "@/content/caseStudies";

const frameSize = {
  phone: "h-[360px] w-[240px] max-w-full rounded-[28px]",
  screen: "max-h-[360px] w-full",
  plain: "h-full w-full",
};

/** Captioned screenshots shown below a section. Always below the fold, so images load lazily. */
const FigureGrid = ({ figures }: { figures: Figure[] }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 pt-16">
    {figures.map((figure) => (
      <figure key={figure.image.src}>
        <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[20px] border border-border bg-surface p-6">
          <DeviceFrame image={figure.image} lazy className={frameSize[figure.image.frame]} />
        </div>
        <figcaption className="mt-3 text-[15px] text-label">
          <span className="font-medium text-foreground">{figure.captionTitle}</span> {figure.caption}
        </figcaption>
      </figure>
    ))}
  </div>
);

export default FigureGrid;
