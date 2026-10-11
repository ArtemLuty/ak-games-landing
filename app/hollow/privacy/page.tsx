import type { Metadata } from "next";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "HOLLOW: The Last Echo — Privacy Policy | AK Games",
  description: "Privacy policy for the game HOLLOW: The Last Echo.",
};

const sections = [
  {
    title: "No data collected",
    body: "HOLLOW: The Last Echo does not collect, store, share or sell any personal data. The game has no accounts, no advertising, no analytics, no tracking and makes no network connections during play.",
  },
  {
    title: "What stays on your device",
    body: "Your progress, settings, achievements and an optional playtest journal are saved only on your device. You can delete them at any time with “Start a new journey” and “Clear journal” in Settings, or by deleting the app. A playtest report is only shared if you export it and send it yourself.",
  },
  {
    title: "Children",
    body: "The game does not knowingly collect any information from anyone, including children.",
  },
  {
    title: "Українською",
    body: "HOLLOW: The Last Echo не збирає, не зберігає, не передає і не продає жодних персональних даних. У грі немає акаунтів, реклами, аналітики, і під час гри вона не підключається до мережі. Поступ, налаштування та необов'язковий журнал тестування зберігаються лише на твоєму пристрої.",
  },
];

export default function HollowPrivacyPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <div className="glass-panel p-8 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow">HOLLOW: The Last Echo</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300">Effective October 10, 2026.</p>
          </div>
          <div className="mt-12 space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-7"
              >
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{section.body}</p>
              </section>
            ))}
            <section className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-7">
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                <a className="underline" href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
