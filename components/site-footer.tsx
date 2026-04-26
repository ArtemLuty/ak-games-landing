import Link from "next/link";

import { contactDetails, socialLinks } from "@/data/site";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">AK Games © 2026</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Indie mobile apps and games crafted with precision, built for people who value speed,
            clarity, and thoughtful execution.
          </p>
          <Link
            href={`mailto:${contactDetails.email}`}
            className="mt-3 inline-block text-sm text-slate-300 transition hover:text-white"
          >
            {contactDetails.email}
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
