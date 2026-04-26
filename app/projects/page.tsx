import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProject, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects | AK Games",
  description:
    "Explore AK Games projects across mobile games, audio tools, and experimental Flutter products.",
};

export default function ProjectsPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects built for mobile-first products and sharp execution"
          description="AK Games combines playful mechanics, practical utility, and polished Flutter engineering. The lineup below includes released games, prototypes, and long-term product experiments."
        />

        <div
          id="freedom-player"
          className="glass-panel mt-12 overflow-hidden p-8 sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Flagship In Progress</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featuredProject.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                {featuredProject.description}
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-white">Product Direction</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Designed as a premium mobile music experience with simple controls, category-based
                discovery, streaming support, and room for future AI-generated music layers.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link
                  href={featuredProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  GitHub
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Collaborate
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
