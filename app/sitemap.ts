import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/contact",
    "/privacy",
    "/hollow/privacy",
    "/hollow/support",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}/` }));
}
