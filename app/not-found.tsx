import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-shell not-found">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>The project you’re looking for might be in the portfolio.</p>
      <Link href="/projects" className="button button-primary">
        Explore the work →
      </Link>
    </section>
  );
}
