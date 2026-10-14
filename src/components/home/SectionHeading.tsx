import Eyebrow from "@/components/common/Eyebrow";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
}

const SectionHeading = ({ id, eyebrow, title }: SectionHeadingProps) => (
  <div>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 id={id} className="mt-2 text-[clamp(32px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em]">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
