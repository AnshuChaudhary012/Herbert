# Herbert Visual Review Fixes

## Design references

- Figma review file: [Herbert testing](https://www.figma.com/design/y2uq4gXj3f5bf0VjZECiIa/Herbert--testing-?node-id=0-1)
- Local desktop and mobile comparisons: `public/Figma-image/`
- Existing Figma character and logo images: `public/assets/figma/` and `src/assets/images/logo.png`
- The logo file already contains the Germany mark, Herbert wordmark and tagline. Keep it as one image; do not add separate logo text.

## Review comments implemented

1. **Hero** — Removed the extra HTML “Hello!” badge because the supplied waving Herbert image already includes it. Updated the hero and mobile menu CTA labels to match the design.
2. **Feature section** — Reordered items to 1) visa choice, 2) document checklist, 3) CV / motivation letter, 4) interview preparation, 5) German practice and 6) settling in. Added a crop of the full work/tourism signpost illustration from the Figma reference screenshot.
3. **Plans** — Updated the buttons to “Upgrade to Basic”, “Upgrade to Standard” and “Upgrade to Premium”. The project still has no payment or subscription flow; the buttons currently lead to Sources.
4. **Team & Resources** — Added a desktop group illustration crop from the reference and use the supplied waving Herbert image on mobile. Restored the three text bullets visible in the Figma frame.
5. **FAQ** — Reordered the cards on mobile to match the reference and renamed the expand-all control “View All”. The existing expand/collapse behavior remains.
6. **Final CTA** — Updated the heading and button labels. The first button now uses the white fill and orange label shown in Figma; the second remains outlined.
7. **Footer** — Replaced the extra Explore links with the Follow Us heading and three circular brand icons. Kept the project’s full-logo image as one image.
8. **Sources page** — Removed the second “Hello!” overlay, replaced the mismatched decorative pattern with crops of the gate/group and employment illustrations, and updated the hero link to “Contact Us”. Added a Vercel SPA rewrite so direct `/sources` requests resolve to the React app after deployment.

## Assets and constraints

The project’s local Figma screenshots contain the reference artwork as flattened images. The new group and signpost PNGs in `public/assets/figma/` are high-resolution crops from those screenshots, not original transparent exports. Figma MCP export calls were unavailable because the connected Starter plan had reached its daily tool-call limit. Replace the crops with original transparent Figma exports if those become available.

The Figma style library shows desktop and mobile type sizes, but did not expose the exact font family in the available read-only view. The current Arial stack is unchanged until the correct family can be confirmed; exact font matching is still pending.

## Checks completed

- `npm.cmd run build` — passed.
- `npm.cmd run lint` — passed.
- Opened the local home page and `/sources` route in a browser. The route rendered in the local Vite preview.
- The Vercel rewrite has not been deployed yet. The live site will continue to use its current deployment until the project is redeployed.
