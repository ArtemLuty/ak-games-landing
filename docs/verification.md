# Portfolio update verification — October 13, 2026

## Build and content

- Production build and TypeScript validation passed with the real GitHub Pages base path, `GITHUB_REPOSITORY=ArtemLuty/ak-games-landing`.
- `npm run check:export` verified 16 HTML files and 392 internal route/asset references. Video sources and posters are included in this check.
- The export has eight project pages, four App Store products, and no Vocabio page, media, HTML references or sitemap entry.
- HOLLOW shows release preparation, App Store review and Steam preparation. ASHVEIL shows In development. ClinicFlow shows Live in clinics and the owner-confirmed finished-product description.
- Live products filtering returned five results, including ClinicFlow; a ClinicFlow search returned one matching project.
- `git diff --check` passed.

## Browser verification

- Checked desktop layouts at 1440 and 1280 px and mobile at 375 px. No horizontal overflow on the checked homepage, catalogue, HOLLOW, ASHVEIL or ClinicFlow pages; no broken loaded images or browser console errors were observed.
- The homepage has two separate video players in addition to the project images. Each game detail page has its own video plus a screenshot gallery.
- Both homepage videos had readyState 0 before entering view. On entering view, both played muted, reached readyState 4 and advanced in time without media errors.
- Clicking Pause stopped HOLLOW while ASHVEIL continued. Leaving the section paused both. Returning resumed ASHVEIL and preserved HOLLOW’s explicit pause. Clicking Play resumed HOLLOW.
- HOLLOW and ASHVEIL detail videos played in the mobile viewport. Enter on the ASHVEIL pause button stopped playback and retained keyboard focus on the updated Play control.
- The homepage Watch gameplay link reached the new section on mobile and desktop.
- Reduced-motion and Save-Data autoplay exclusions were reviewed in source; OS/browser preference emulation was not performed. These checks are browser evidence, not physical-device testing.

## Media and retained flows

- HOLLOW: H.264/AAC, 1280 × 720, 17.5 seconds, 2,032,968 bytes. ASHVEIL: H.264 without audio, 960 × 600, 12.125 seconds, 719,336 bytes. Both are fast-start MP4 files; posters are extracted frames.
- Existing inquiry, privacy and HOLLOW support flows remain. The earlier redesign’s inquiry validation and draft-generation checks are not claimed as new tests in this update. No email is sent by the website itself.
- The existing GitHub Pages workflow builds, verifies and publishes the static export. No hosting migration, analytics or third-party video embed was introduced.
