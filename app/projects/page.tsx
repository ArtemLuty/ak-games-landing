import type { Metadata } from "next";
import { ProjectCatalog } from "@/components/project-catalog";
import { CollaborationCTA } from "@/components/collaboration-cta";
export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Explore independent apps, games and software by Artem Kolesnikov. Four published iOS apps, a live clinical product and original game worlds.",
  alternates: { canonical: "/projects/" },
};
export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro container-shell">
        <p className="eyebrow">THE AK GAMES PORTFOLIO</p>
        <h1>
          Made with curiosity.
          <br />
          <span className="muted">Built with purpose.</span>
        </h1>
        <p>
          Published apps, software in daily use, and worlds coming to life.
          <br />A closer look at what I make and how I think.
        </p>
      </section>
      <section
        className="container-shell catalog-section"
        aria-label="Project catalogue"
      >
        <h2 className="sr-only">Explore projects</h2>
        <ProjectCatalog />
      </section>
      <CollaborationCTA />
    </>
  );
}
