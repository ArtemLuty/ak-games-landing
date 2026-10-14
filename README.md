# AK Studio

Independent developer portfolio for Artem Kolesnikov: released mobile apps, original games and software in daily use.

## Development

```sh
npm install
npm run dev
```

## Build and hosting

```sh
npm run build
```

Next.js exports static pages into `out/`. The existing GitHub Actions workflow builds and publishes GitHub Pages on pushes to `main`. `next.config.mjs` sets the repository base path for that build; local development uses `/`. Images use the same base path via the `asset` helper.

`NEXT_PUBLIC_SITE_URL` can override the canonical site URL for a separate hosting build. Set it before building so metadata, social images, the sitemap and robots.txt all reference the intended public address. A Cloudflare Pages build must run without `GITHUB_ACTIONS=true`, so assets and routes start at `/`.

## Content

- `data/site.ts`: project details, release states, store links and contact information.
- `public/projects/`: locally hosted product images and optimized gameplay videos.
- `docs/content-sources.md`: release verification and asset provenance.
- `app/projects/[slug]/`: statically generated project detail pages.

The catalogue provides category filtering and text search. The contact form prepares an email in the visitor’s email application; it does not imply that a message has been sent and includes a copyable draft fallback. There is no submission backend or analytics integration.

The website supports keyboard navigation, visible focus states, a skip link, reduced motion, mobile navigation, route metadata, a sitemap and robots.txt. Existing privacy policy wording is retained apart from the AK Studio brand name.

HOLLOW and ASHVEIL each have separate screenshots and a gameplay video, both on the homepage showcase and their own project page. Videos start muted when visible, pause offscreen, respect manual pause, and do not autoplay with reduced motion or data saving enabled. Native controls, a keyboard-accessible play/pause button and text descriptions remain available. No third-party video embed or tracking is used.
