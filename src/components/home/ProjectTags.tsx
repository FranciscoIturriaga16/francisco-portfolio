import Tag from "@/components/common/Tag";
import { categoryLabels, statusDots, type Project } from "@/content/projects";

interface ProjectTagsProps {
  project: Project;
  showFeatured?: boolean;
}

const ProjectTags = ({ project, showFeatured = false }: ProjectTagsProps) => (
  <div className="flex flex-wrap gap-2">
    {showFeatured && project.featured && <Tag variant="featured">Featured</Tag>}
    <Tag>{categoryLabels[project.category]}</Tag>
    {project.tags?.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
    {project.status && <Tag dot={statusDots[project.status]}>{project.status}</Tag>}
  </div>
);

export default ProjectTags;
