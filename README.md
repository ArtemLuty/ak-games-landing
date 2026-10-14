# AK Games

Independent developer portfolio for Artem Kolesnikov: released mobile apps, original games and product prototypes.

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

## Content

- `data/site.ts`: project details, release states, store links and contact information.
- `public/projects/`: locally hosted product images.
- `docs/content-sources.md`: release verification and asset provenance.
- `app/projects/[slug]/`: statically generated project detail pages.

The catalogue provides category filtering and text search. The contact form prepares an email in the visitor’s email application; it does not imply that a message has been sent and includes a copyable draft fallback. There is no submission backend or analytics integration.

The website supports keyboard navigation, visible focus states, a skip link, reduced motion, mobile navigation, route metadata, a sitemap and robots.txt. Existing privacy policy wording is retained.
