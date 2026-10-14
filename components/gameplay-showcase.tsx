import Link from "next/link";
import { gameplayProjects } from "@/data/site";
import { GameplayVideo } from "./gameplay-video";
import { Arrow } from "./icons";

export function GameplayShowcase() {
  return (
    <section
      className="gameplay-section container-shell"
      id="gameplay"
      aria-labelledby="gameplay-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / WORLDS IN MOTION</p>
          <h2 id="gameplay-heading">
            Better seen.
            <br />
            <span className="muted">Even better played.</span>
          </h2>
        </div>
        <p className="section-description">
          Two different worlds.
          <br />A glimpse of the games in action.
        </p>
      </div>
      <div className="gameplay-grid">
        {gameplayProjects.map((project) => (
          <article className="gameplay-card" key={project.slug}>
            <div className="gameplay-card-heading">
              <Link href={`/projects/${project.slug}`}>
                <h3>{project.title}</h3>
                <Arrow diagonal />
              </Link>
              <span className="gameplay-label">
                <span aria-hidden="true">▶</span> Gameplay
              </span>
            </div>
            <GameplayVideo project={project} />
            <p className="gameplay-release-note">{project.releaseNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
