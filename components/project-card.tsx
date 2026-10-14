import Link from "next/link";
import type { Project } from "@/data/site";
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
        <ProjectArt project={project} />
        <div className="project-meta">
          <span>
            {project.category === "Product"
              ? "Product development"
              : project.category === "App"
                ? "Mobile application"
                : "Game development"}
          </span>
          <span
            className={`status ${project.status === "Released" ? "released" : ""}`}
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
