import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { CollaborationCTA } from "@/components/collaboration-cta";
import { GameplayShowcase } from "@/components/gameplay-showcase";
import {
  asset,
  projects,
  releasedProjects,
  selectedProjects,
} from "@/data/site";
export default function HomePage() {
  return (
    <>
      <section className="hero container-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" /> INDEPENDENT DEVELOPER &
            CREATIVE PARTNER
          </p>
          <h1>
            Thoughtful apps.
            <br />
            <span className="hero-serif">Memorable</span>
            <br />
            <span className="accent">play.</span>
          </h1>
          <p className="hero-description">
            I’m Artem. I turn ideas into mobile products,
            <br className="desktop-break" /> useful tools, and worlds worth
            getting lost in.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore the work <Arrow />
            </a>
            <Link href="/contact" className="text-link">
              Let’s build something <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-heading">
            <span>MOBILE PRODUCTS</span>
            <span>DESIGNED & BUILT BY ARTEM</span>
          </div>
          <div className="hero-phones">
            <Link
              href="/projects/snake-reflex"
              className="hero-phone back-phone"
              aria-label="Explore Snake Reflex"
            >
              <Image
                src={asset("/projects/snake-reflex-1.jpg")}
                alt="Snake Reflex game on an iPhone"
                width={240}
                height={520}
                priority
              />
            </Link>
            <Link
              href="/projects/pupwhistle"
              className="hero-phone front-phone"
              aria-label="Explore PupWhistle"
            >
              <Image
                src={asset("/projects/pupwhistle-1.jpg")}
                alt="PupWhistle dog-training app on an iPhone"
                width={240}
                height={520}
                priority
              />
            </Link>
          </div>
          <div className="showcase-caption">
            <div>
              <span className="availability-dot" />
              Snake Reflex + PupWhistle
            </div>
            <span>Available on the App Store</span>
          </div>
        </div>
        <div className="hero-foot">
          <span>
            PRODUCT DESIGN <span aria-hidden="true">/</span> DEVELOPMENT{" "}
            <span aria-hidden="true">/</span> INDEPENDENT GAMES
          </span>
          <a href="#gameplay">
            <span className="play-outline" aria-hidden="true">
              ▶
            </span>{" "}
            Watch gameplay <Arrow />
          </a>
        </div>
      </section>
      <section
        className="release-strip container-shell"
        aria-label="Published apps"
      >
        <div className="release-intro">
          <strong>{String(releasedProjects.length).padStart(2, "0")}</strong>
          <span>
            released apps.
            <br />
            Live on the App Store.
          </span>
        </div>
        <div className="release-apps">
          {releasedProjects.map((p) => (
            <a
              key={p.slug}
              href={p.appStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on the App Store (opens in new tab)`}
            >
              <Image src={asset(p.icon!)} alt="" width={42} height={42} />
              <span>{p.title}</span>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>
      <section className="work-section container-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Different ideas.
              <br />
              Same attention to detail.
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects{" "}
            <span className="count">
              {String(projects.length).padStart(2, "0")}
            </span>
            <Arrow />
          </Link>
        </div>
        <div className="project-grid selected-grid">
          {selectedProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <GameplayShowcase />
      <section className="studio-section" id="studio">
        <div className="container-shell studio-grid">
          <div>
            <p className="eyebrow">03 / THE PERSON BEHIND THE PRODUCTS</p>
            <h2>
              A small studio.
              <br />
              <span className="muted">A hands-on partner.</span>
            </h2>
            <div className="maker-signature">
              <span className="maker-avatar">ak.</span>
              <div>
                <strong>Artem Kolesnikov</strong>
                <span>Independent developer · AK Games</span>
              </div>
            </div>
          </div>
          <div className="studio-copy">
            <p>
              I like making complex things feel simple. Sometimes that means a
              tool that keeps a clinic’s day running smoothly. Sometimes it
              means a forest that remembers your footsteps.
            </p>
            <p>
              AK Games is my independent practice. I work across product design
              and development, connecting the first idea, the interface, and the
              code that brings it to life.
            </p>
            <div className="studio-values">
              <span>Direct collaboration</span>
              <span>Clear product thinking</span>
              <span>Care beyond launch</span>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section container-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / WHAT WE CAN BUILD</p>
            <h2>
              From “what if”
              <br />
              to something real.
            </h2>
          </div>
          <p className="section-description">
            Bring an idea, a rough prototype, or a product
            <br className="desktop-break" /> ready for its next chapter.
          </p>
        </div>
        <div className="services-grid">
          {[
            {
              n: "01",
              symbol: "↗",
              title: "Mobile products",
              copy: "Focused iOS and Android experiences. From everyday utilities to products people come back to.",
              tags: "Flutter · Dart · Firebase",
            },
            {
              n: "02",
              symbol: "+",
              title: "Games & interactions",
              copy: "Distinct worlds, satisfying mechanics, and the small details that make play feel good.",
              tags: "Godot · Flutter · Canvas",
            },
            {
              n: "03",
              symbol: "□",
              title: "MVPs & product tools",
              copy: "Turn a complex workflow into a useful first release. Build, learn, and improve with a clear direction.",
              tags: "Product design · Web · APIs",
            },
          ].map((s) => (
            <article key={s.n}>
              <div className="service-index">
                <span>{s.n}</span>
                <span>{s.symbol}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <span className="service-tags">{s.tags}</span>
            </article>
          ))}
        </div>
      </section>
      <CollaborationCTA />
    </>
  );
}
