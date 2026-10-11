import type { Metadata } from "next";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "HOLLOW: The Last Echo — Support | AK Games",
  description: "Help and contact for the game HOLLOW: The Last Echo.",
};

const answers = [
  {
    title: "Controls",
    body: "On iPhone and iPad use the on-screen arrows to move, the large button to jump, the echo button to leave an echo and the hand to turn levers or lift crates. Xbox, PlayStation and MFi controllers are supported: A jumps, X leaves an echo, Y uses levers and crates, Menu pauses.",
  },
  {
    title: "Stuck on a puzzle?",
    body: "Every chapter's exit opens once all fireflies are found. Pause and choose “Return to checkpoint” to reset a room without losing collected fireflies. Assist mode in Settings makes the echo last twelve seconds and slows blades and hedgehogs.",
  },
  {
    title: "Progress",
    body: "Progress is saved automatically on your device after each chapter. “Start a new journey” in Settings clears it.",
  },
];

export default function HollowSupportPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <div className="glass-panel p-8 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow">HOLLOW: The Last Echo</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Support
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Questions, bugs or ideas? Write to{" "}
              <a className="underline" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
              . Please include your device model and the chapter number.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {answers.map((item) => (
              <section
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-7"
              >
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
