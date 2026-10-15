import Image from "next/image";
import Link from "next/link";
import { asset, spotlightProject } from "@/data/site";
import { Arrow } from "./icons";
import { GameplayVideo } from "./gameplay-video";

export function ProjectSpotlight() {
  const project = spotlightProject;
  return (
    <section
      className="latest-project container-shell"
      id="latest-project"
      aria-labelledby="latest-project-heading"
    >
      <div className="spotlight-panel">
        <div className="spotlight-copy">
          <p className="eyebrow">LATEST PROJECT / MOBILE ARCADE</p>
          <h2 id="latest-project-heading">{project.title}</h2>
          <p className="spotlight-tagline">{project.tagline}</p>
          <p className="spotlight-description">
            Three orbs. Fifteen seconds. Every round you survive becomes another
            ghost to dodge. Your past moves make the next round harder.
          </p>
          <div className="spotlight-tags" aria-label="Game highlights">
            <span>One thumb</span>
            <span>Ghost replays</span>
            <span>Daily challenge</span>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="button button-primary"
          >
            Explore AFTERSELF <Arrow diagonal />
          </Link>
          <p className="spotlight-status">{project.releaseNote}</p>
        </div>
        <div className="spotlight-media">
          <div className="spotlight-video">
            <p className="spotlight-media-label">GAMEPLAY / IN MOTION</p>
            <GameplayVideo project={project} />
          </div>
          <figure className="spotlight-still">
            <Image
              src={asset(project.screenshots![0])}
              alt="AFTERSELF round eleven: neon ghost trails and pulse mines surround the player"
              width={646}
              height={1400}
            />
            <figcaption>IN-GAME SCREENSHOT / ROUND 11</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
