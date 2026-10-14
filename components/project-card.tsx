import Link from "next/link";
import { isLiveProject, type Project } from "@/data/site";
import { ProjectArt } from "./project-art";
import { Arrow } from "./icons";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-link"
        aria-label={`Explore ${project.title}`}
      >
        <div className="project-card-media">
          <ProjectArt project={project} />
          {project.status === "Live in clinics" && (
            <span className="project-live-label">
              <span className="availability-dot" />
              In daily clinical use
            </span>
          )}
          <span className="project-open-hint" aria-hidden="true">
            Explore project <Arrow diagonal />
          </span>
        </div>
        <div className="project-meta">
          <span>
            {project.category === "Product"
              ? "Clinical software"
              : project.category === "App"
                ? "Mobile application"
                : "Game development"}
          </span>
          <span
            className={`status ${isLiveProject(project) ? "released" : ""}`}
          >
            <i />
            {project.status}
          </span>
        </div>
        <div className="project-title">
          <h3>{project.title}</h3>
          <span className="circle-arrow">
            <Arrow diagonal />
          </span>
        </div>
        <p>{project.description}</p>
      </Link>
    </article>
  );
}
