"use client";
import { useState } from "react";
import { projects, isLiveProject } from "@/data/site";
import { ProjectCard } from "./project-card";
const filters = [
  "All work",
  "Apps",
  "Games",
  "Products",
  "Live products",
] as const;
export function ProjectCatalog() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const [query, setQuery] = useState("");
  const matches = (p: (typeof projects)[number], f: (typeof filters)[number]) =>
    f === "All work" ||
    (f === "Apps" && p.category === "App") ||
    (f === "Games" && p.category === "Game") ||
    (f === "Products" && p.category === "Product") ||
    (f === "Live products" && isLiveProject(p));
  const visible = projects.filter(
    (p) =>
      matches(p, filter) &&
      `${p.title} ${p.description} ${p.tech.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="catalog-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f} <span>{projects.filter((p) => matches(p, f)).length}</span>
            </button>
          ))}
        </div>
        <label className="search-field">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="10" cy="10" r="6" />
            <path d="m15 15 5 5" />
          </svg>
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Find a project…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="results-count" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
        {query && ` matching “${query}”`}
      </p>
      <div className="project-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <h2>No projects found.</h2>
          <p>Try another name, category, or technology.</p>
          <button
            className="button button-secondary"
            onClick={() => {
              setFilter("All work");
              setQuery("");
            }}
          >
            Reset filters <span>↗</span>
          </button>
        </div>
      )}
    </>
  );
}
