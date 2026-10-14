# Redesign verification — October 13, 2026

- Production export completed with the actual GitHub Pages base path, `GITHUB_REPOSITORY=ArtemLuty/ak-games-landing`.
- `npm run check:export` verified 17 HTML files and 412 internal route/asset references with no missing targets. The deployment workflow runs this check after building.
- Browser checks covered 375/387 px mobile and 1440 px desktop viewports. Checked pages had no horizontal overflow or missing loaded images.
- Catalogue: Released filter returned five projects; searching Vocabio within it returned one; an unmatched search showed the empty state; reset restored nine projects.
- HOLLOW detail page displayed its beta status and passed project context into the inquiry form.
- Inquiry: required empty name blocked submission; a filled game inquiry generated a reviewable draft with HOLLOW context, correctly encoded recipient/subject/body and a copy fallback. Editing the form invalidated the prior draft. No email was sent.
- Mobile menu opened and closed with Escape, with focus retained on its toggle.
- The production export was served under `/ak-games-landing/` for a final browser check, including deployment-prefixed image and navigation paths.
- Remote commit 72a9c7f was fast-forwarded before publishing. Existing HOLLOW privacy and support URLs and their substantive text were retained, restyled and linked from the portfolio.

## Scope

This is a static portfolio. Inquiries are prepared locally and sent by the visitor through their own mail application. No submission service or analytics was added. Published iOS statuses and assets were checked against Apple's public catalogue; development work is explicitly labelled.

A Next.js development-mode issue with `dynamicParams = false` and static export was encountered and resolved by removing the redundant option; generated production routes are determined by `generateStaticParams`. Both production generation and the detail page were rechecked afterward.
