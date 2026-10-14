import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contactDetails } from "@/data/site";
import { Arrow } from "@/components/icons";
export const metadata: Metadata = {
  title: "Let’s build something",
  description:
    "Work directly with Artem Kolesnikov on a mobile app, game or product MVP. Tell me what you have in mind.",
  alternates: { canonical: "/contact/" },
};
export default function ContactPage() {
  return (
    <section className="contact-page container-shell">
      <div className="contact-copy">
        <p className="eyebrow">LET’S MAKE SOMETHING GOOD</p>
        <h1>
          Your idea.
          <br />
          Our next
          <br />
          <span className="accent">chapter.</span>
        </h1>
        <p>
          You don’t need a perfect brief. A problem, a rough idea, or a product
          you want to improve is a good place to start.
        </p>
        <a className="contact-email" href={`mailto:${contactDetails.email}`}>
          {contactDetails.email}
          <Arrow diagonal />
        </a>
        <div className="contact-social">
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <div className="next-steps">
          <p className="eyebrow">A SIMPLE START</p>
          <ol>
            <li>
              <span>01</span>Tell me what you have in mind.
            </li>
            <li>
              <span>02</span>We discuss the scope and what matters most.
            </li>
            <li>
              <span>03</span>Agree on a practical next step.
            </li>
          </ol>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
