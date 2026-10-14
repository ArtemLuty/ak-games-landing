"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow, BrandMark } from "./icons";
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" aria-label="AK Games home" className="brand">
          <BrandMark />
          <span>
            AK GAMES
            <span className="brand-plus" aria-hidden="true">
              +
            </span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link
            href="/projects"
            aria-current={pathname.startsWith("/projects") ? "page" : undefined}
          >
            Selected work
          </Link>
          <Link href="/#studio" onClick={() => setOpen(false)}>
            The studio
          </Link>
          <Link
            href="/contact"
            className="header-cta"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Let’s talk <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  );
}
