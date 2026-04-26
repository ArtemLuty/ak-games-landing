import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails, featuredProject, principles, projects, technologies } from "@/data/site";

export default function HomePage() {
  return (
    <div>
      <section className="section-space overflow-hidden">
        <div className="container-shell">
          <div className="relative glass-panel mesh-panel bg-hero-radial overflow-hidden p-8 sm:p-10 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,156,255,0.12),transparent_24%),radial-gradient(circle_at_80%_25%,rgba(155,140,255,0.12),transparent_28%)]" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
              <div className="animate-appear">
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="surface-label">Indie Mobile Product Studio</span>
                  <span className="surface-label">Flutter-first execution</span>
                  <span className="surface-label">Open for startup collaborations</span>
                </div>
                <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Indie Mobile Apps &amp; Games
                  <span className="gradient-text"> Crafted with Precision</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  AK Games is a personal indie development brand focused on mobile games, utility
                  apps, and experimental digital products built with Flutter, clean UX, and
                  practical ideas.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Contact / Collaborate
                  </Link>
                  <Link
                    href={contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 bg-black/20 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    View GitHub
                  </Link>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["5+ years", "Programming and product building"],
                    ["Flutter", "Primary mobile stack across apps and games"],
                    ["App Store", "Shipping, testing, and release workflow experience"],
                  ].map(([value, label]) => (
                    <div
                      key={value}
                      className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5"
                    >
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-float rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-glow">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.28em] text-white/45">
                      AK Games
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Shipping Mobile Products
                    </span>
                  </div>
                  <div className="mt-10 space-y-5">
                    {[
                      "Games with focused mechanics",
                      "Utility apps with real use cases",
                      "MVPs and startup prototypes",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm leading-7 text-slate-400">
                    Designed for clarity, performance, and products that feel intentional from the
                    first interaction.
                  </p>
                  <div className="mt-8 rounded-[22px] border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                      Primary Channels
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={contactDetails.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-label transition hover:bg-white/10"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        href={contactDetails.appStoreDeveloper}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-label transition hover:bg-white/10"
                      >
                        App Store
                      </Link>
                      <Link
                        href={`mailto:${contactDetails.email}`}
                        className="surface-label transition hover:bg-white/10"
                      >
                        Email
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="glass-panel mesh-panel overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div>
                <p className="eyebrow">Featured Project</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {featuredProject.title}
                  </h2>
                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-100">
                    {featuredProject.status}
                  </span>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  {featuredProject.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={featuredProject.links.learnMore}
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Explore Project
                  </Link>
                  <Link
                    href={featuredProject.links.contact}
                    className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Discuss Collaboration
                  </Link>
                  <Link
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 bg-black/20 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    GitHub Repo
                  </Link>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Core Experience</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/35">
                    Mobile First
                  </span>
                </div>
                <div className="space-y-3">
                  {featuredProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Why it matters</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Freedom Player is the clearest expression of the AK Games direction: utility,
                    polish, strong UX restraint, and a product surface that can grow into a
                    meaningful standalone brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Projects"
            title="Released products, prototypes, and experiments"
            description="The portfolio spans casual games, utility apps, and concept-driven products. Each one is treated like a serious mobile build with focused UX, practical scope, and a clear path to iteration."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel mesh-panel p-8 sm:p-10">
              <SectionHeading
                eyebrow="Technology"
                title="Built with modern mobile tooling"
                description="AK Games focuses on Flutter-first product development with the supporting stack needed to ship polished experiences, move quickly, and iterate without chaos."
              />
            </div>
            <div className="glass-panel mesh-panel p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/8"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel mesh-panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="About"
              title="Independent by structure, serious by execution"
              description="AK Games is created by an independent Flutter developer with 5+ years of programming experience. The focus is on building practical, clean, and enjoyable mobile products, from retro-style games to experimental music and utility apps."
            />
          </div>
          <div className="glass-panel mesh-panel p-8 sm:p-10">
            <p className="eyebrow">Development Philosophy</p>
            <div className="mt-6 space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container-shell">
          <div className="glass-panel mesh-panel overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="eyebrow">Collaboration</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Open to startup collaborations, mobile MVPs, and creative product builds
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  AK Games works with startups, indie creators, and product teams looking for
                  Flutter development, mobile prototypes, MVPs, or fresh app ideas that need
                  thoughtful execution.
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Contact AK Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
