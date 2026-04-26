import type { Metadata } from "next";
import Link from "next/link";

import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | AK Games",
  description: "Start a conversation with AK Games about Flutter apps, games, MVPs, and collaborations.",
};

const collaborationAreas = [
  "Flutter app development",
  "Game prototypes and casual mobile concepts",
  "Startup MVPs and rapid product validation",
  "Audio, utility, or experiment-driven app ideas",
];

export default function ContactPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="glass-panel p-8 sm:p-10 lg:p-14">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build a thoughtful mobile product
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              AK Games is open to collaborations with startups, indie founders, creators, and
              product teams looking for Flutter expertise, mobile MVP development, or experimental
              product execution with a clean technical foundation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`mailto:${contactDetails.email}`}
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {contactDetails.email}
              </Link>
              <Link
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn Profile
              </Link>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Email is the fastest way to reach AK Games for product work, startup collaboration,
              and Flutter development inquiries.
            </p>
          </section>

          <section className="glass-panel p-8 sm:p-10">
            <p className="eyebrow">Collaboration Fit</p>
            <div className="mt-6 space-y-4">
              {collaborationAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-medium text-white">Preferred conversation starters</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                New app ideas, feature MVPs, prototypes for fundraising, mobile game experiments,
                or product cleanups that need stronger UX and faster execution.
              </p>
            </div>
            <div className="mt-4 rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-medium text-white">Direct links</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:bg-white/10"
                >
                  GitHub
                </Link>
                <Link
                  href={contactDetails.appStoreDeveloper}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:bg-white/10"
                >
                  App Store
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
