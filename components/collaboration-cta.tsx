import Link from "next/link";
import { Arrow } from "./icons";
export function CollaborationCTA() {
  return (
    <section className="collaboration-section container-shell">
      <div className="collaboration-inner">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>
            Have something
            <br />
            in mind<span className="accent">?</span>
          </h2>
          <p>
            A new product, a better experience, or an idea
            <br className="desktop-break" /> that needs its first working
            version. Let’s build it.
          </p>
        </div>
        <Link href="/contact" className="big-cta">
          Start a conversation <Arrow diagonal />
        </Link>
      </div>
    </section>
  );
}
