import Tag from "@/components/common/Tag";
import { categoryLabels, type Project } from "@/content/projects";

interface ProjectTagsProps {
  project: Project;
  showFeatured?: boolean;
}

const ProjectTags = ({ project, showFeatured = false }: ProjectTagsProps) => (
  <div className="flex flex-wrap gap-2">
    {showFeatured && project.featured && <Tag variant="featured">Featured</Tag>}
    <Tag>{categoryLabels[project.category]}</Tag>
    {project.status && <Tag dot="amber">{project.status}</Tag>}
  </div>
);

export default ProjectTags;
