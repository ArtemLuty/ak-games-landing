import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asset, projects, siteUrl } from "@/data/site";
import { ProjectArt } from "@/components/project-art";
import { Arrow } from "@/components/icons";
import { CollaborationCTA } from "@/components/collaboration-cta";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((p) => p.slug === params.slug);
  return {
    title: p?.title ?? "Project",
    description: p?.description,
    alternates: { canonical: `/projects/${params.slug}/` },
    openGraph: {
      title: p?.title,
      description: p?.description,
      url: `${siteUrl}/projects/${params.slug}/`,
      type: "website",
      images: [
        {
          url: `${siteUrl}${p?.image ?? p?.icon ?? "/projects/hollow-cover.jpg"}`,
        },
      ],
    },
  };
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) notFound();
  return (
    <>
      <section className="detail-intro container-shell">
        <Link href="/projects" className="text-link back-link">
          ← All projects
        </Link>
        <div className="detail-title">
          <div>
            <p className="eyebrow">
              {p.category} / {p.status}
            </p>
            <h1>{p.title}</h1>
            <p>{p.tagline}</p>
          </div>
          <div className="detail-actions">
            {p.appStore && (
              <a
                className="button button-primary"
                href={p.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on App Store <Arrow diagonal />
              </a>
            )}
            {p.github && (
              <a
                className="button button-secondary"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source on GitHub <Arrow diagonal />
              </a>
            )}
            {!p.appStore && (
              <Link
                className="button button-primary"
                href={`/contact?project=${encodeURIComponent(p.title)}`}
              >
                Discuss a similar project <Arrow diagonal />
              </Link>
            )}
          </div>
        </div>
        <div className="detail-art">
          <ProjectArt project={p} priority />
        </div>
      </section>
      <section className="container-shell detail-overview">
        <div>
          <p className="eyebrow">THE IDEA</p>
          <h2>{p.tagline}</h2>
        </div>
        <div>
          <p className="overview-copy">{p.overview}</p>
          <div className="tags">
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {p.slug === "hollow" && (
            <div className="tags">
              <Link className="text-link" href="/hollow/support">
                Game support ↗
              </Link>
              <Link className="text-link" href="/hollow/privacy">
                Game privacy ↗
              </Link>
            </div>
          )}
          <h3>Inside the experience</h3>
          <ul className="feature-list">
            {p.features.map((f) => (
              <li key={f}>
                <span>↗</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {p.screenshots && (
        <section className="container-shell screenshots-section">
          <p className="eyebrow">
            A CLOSER LOOK /{" "}
            {p.status === "Released"
              ? "APP STORE SCREENSHOTS"
              : "DEVELOPMENT BUILD"}
          </p>
          <div
            className={`screenshot-gallery ${p.visual === "phones" ? "portrait-gallery" : ""}`}
          >
            {p.screenshots.map((s, i) => (
              <Image
                key={s}
                src={asset(s)}
                alt={`${p.title} ${p.visual === "phones" ? "app" : "gameplay"} screenshot ${i + 1}`}
                width={p.visual === "phones" ? 240 : 1600}
                height={p.visual === "phones" ? 520 : 900}
              />
            ))}
          </div>
        </section>
      )}
      <CollaborationCTA />
    </>
  );
}
