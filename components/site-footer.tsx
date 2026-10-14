import Link from "next/link";
import { contactDetails } from "@/data/site";
import { Arrow, BrandMark } from "./icons";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-top">
          <Link href="/" className="brand">
            <BrandMark />
            <span>AK STUDIO</span>
          </Link>
          <p>
            Independent by choice.
            <br />
            Thoughtful by design.
          </p>
          <div className="footer-social">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
            <a
              href={contactDetails.appStoreDeveloper}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Artem Kolesnikov · AK Studio</span>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <Link href="/privacy">Privacy policy</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
