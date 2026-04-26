import Link from "next/link";

import { contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-background/75 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85 transition hover:text-white"
          >
            AK Games
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <nav className="flex flex-wrap items-center gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={contactDetails.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="/contact"
              className="w-fit rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Collaborate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
