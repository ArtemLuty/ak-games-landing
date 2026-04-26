import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AK Games",
  description: "General privacy policy for AK Games mobile apps and products.",
};

const sections = [
  {
    title: "Introduction",
    body: "AK Games publishes mobile apps and games under a general privacy approach focused on clarity and restraint. This page acts as the general privacy policy for AK Games products. Some apps may have small differences depending on their features, but this page covers the standard approach used across the portfolio.",
  },
  {
    title: "Information We Collect",
    body: "AK Games apps may collect limited information that is needed to run, improve, and support a product. Depending on the app, this can include basic device information, app usage data, crash logs, in-app preferences, and information required by third-party services or external APIs.",
  },
  {
    title: "How We Use Information",
    body: "Information may be used to keep apps working correctly, improve performance, understand product usage, diagnose crashes, deliver core features, and maintain a safe and reliable experience. AK Games does not collect more data than is reasonably necessary for the app to function or improve.",
  },
  {
    title: "Third-Party Services",
    body: "Some AK Games apps may use third-party services such as Firebase, analytics tools, advertising networks, payment providers, or external APIs. These services may process data according to their own privacy policies. The exact services used can vary by app.",
  },
  {
    title: "Firebase, Analytics, and Crash Reporting",
    body: "If an app uses Firebase or similar tools, they may collect diagnostic information such as crash logs, device type, app version, and aggregated usage events. This helps identify bugs, improve stability, and understand how features are used. Not every AK Games app uses the same analytics or reporting setup.",
  },
  {
    title: "Children’s Privacy",
    body: "AK Games does not knowingly collect personal information from children in a way that violates applicable law. If a specific app is intended for a younger audience, additional care should be taken to limit data collection and use only age-appropriate third-party services where needed.",
  },
  {
    title: "Data Security",
    body: "Reasonable technical and organizational steps are taken to protect information used by AK Games products. No system can guarantee absolute security, but care is taken to use trusted services, keep dependencies current, and avoid unnecessary data handling.",
  },
  {
    title: "Changes to This Policy",
    body: "This privacy policy may be updated from time to time as products evolve, services change, or legal requirements shift. Updates will be posted on this page with the latest applicable version reflected in the live site.",
  },
  {
    title: "Contact",
    body: "Questions about privacy, data handling, or a specific AK Games app can be directed through the contact page on this website. If a product has app-specific privacy notes, those should be read together with this general policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <div className="glass-panel p-8 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow">AK Games Policy</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300">
              This is the general privacy policy for AK Games mobile apps and games. Individual
              apps may differ slightly depending on their features, but this page describes the
              standard approach used across AK Games products.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-7"
              >
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
