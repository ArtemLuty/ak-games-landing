import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";

// Validate the deliverable rather than only the framework's route manifest.
const root = path.resolve("out");
const prefix =
  process.env.GITHUB_ACTIONS === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ak-games-landing"}`
    : "";
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory()
          ? files(path.join(dir, e.name))
          : path.join(dir, e.name),
      ),
    )
  ).flat();
}
const htmlFiles = (await files(root)).filter((f) => f.endsWith(".html"));
const missing = new Set();
let checked = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^\"]*)"/g)) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    if (prefix && !url.startsWith(`${prefix}/`) && url !== prefix) {
      missing.add(
        `${path.relative(root, file)}: missing deployment prefix: ${url}`,
      );
      continue;
    }
    const relative = decodeURIComponent(url.slice(prefix.length));
    const candidate = path.join(
      root,
      relative,
      relative.endsWith("/") || !path.extname(relative) ? "index.html" : "",
    );
    checked++;
    try {
      await access(candidate);
    } catch {
      missing.add(`${path.relative(root, file)}: ${url}`);
    }
  }
}
if (missing.size) {
  console.error([...missing].join("\n"));
  process.exit(1);
}
console.log(
  `Export verified: ${htmlFiles.length} HTML pages, ${checked} internal route and asset references; no missing targets.`,
);
