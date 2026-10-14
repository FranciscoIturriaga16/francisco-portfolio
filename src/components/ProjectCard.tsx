import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  projectId?: string;
  delay?: number;
  tags?: string[];
  role?: string;
  inDevelopment?: boolean;
}

const ProjectCard = ({ title, subtitle, description, image, link, projectId, delay = 0, tags, role, inDevelopment }: ProjectCardProps) => {
  return (
    <div 
      className="glass-card flex flex-col animate-slide-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="w-full overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 sm:h-56 object-cover object-top"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
            {title}
          </h3>
          {inDevelopment && (
            <span className="shrink-0 text-[10px] sm:text-xs font-semibold text-muted-foreground border border-muted-foreground/30 rounded-full px-2 py-0.5 leading-tight">
              In Development
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
          {subtitle}
        </p>
        {tags && tags.length > 0 && (
          <div className="mb-2">
            <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stack</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {tags.map((tag, index) => (
                <span key={tag} className="text-[10px] sm:text-xs font-medium text-foreground">{tag}{index < tags.length - 1 && ' | '}</span>
              ))}
            </div>
          </div>
        )}
        {role && (
          <div className="mb-4">
            <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</span>
            <p className="text-[10px] sm:text-xs font-medium text-foreground mt-0.5">{role}</p>
          </div>
        )}
        <div className="mt-auto">
          {projectId && (
            <Button 
              asChild
              variant="dark"
              size="sm"
              className="w-full text-xs sm:text-sm"
            >
              <Link to={`/case-study/${projectId}`} onClick={() => window.scrollTo({ top: 0 })}>
                <span>See Project</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
