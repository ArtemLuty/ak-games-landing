import Link from "next/link";

import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      className="group glass-panel relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/16 hover:bg-white/[0.07]"
    >
      <div
        className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${project.accent} opacity-70 blur-2xl transition duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-lg font-semibold text-white/85">
              {project.title
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="mt-2 inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-slate-200">
                {project.status}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            href={project.links.appStore}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            App Store
          </Link>
          <Link
            href={project.links.googlePlay}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            Google Play
          </Link>
          <Link
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            GitHub
          </Link>
          <Link
            href={project.links.learnMore}
            className="rounded-full bg-white px-4 py-2 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}
