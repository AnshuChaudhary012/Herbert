# Herbert Fix Checklist

Work completed in the order listed below. Figma was inspected in view mode only; no design file was edited.

## Figma review and audit notes

- Inspected the supplied Herbert file’s Design and Assets pages, including the desktop/mobile text-style library and the Home/Sources layouts.
- Figma text styles list these desktop sizes: H1 64, SH1 48, SH2 40, SH3 36, T1 32, T2 24, T3 20, BT1 16/150%, BT2 14/150%. Mobile: H1 28, SH1 24, T1 20, T2 16, BT1 14/150%, BT2 12/150%, Button 14.
- Figma’s style library does not expose the font family in the view available here. The font family therefore still needs confirmation before a precise font match can be claimed.
- The Figma connection is view-only. Direct design-context/export access reports that this account lacks edit access. I used the canvas and the existing local reference screenshots for visual comparison; the refreshed Figma frames could not be exported from the restricted connection.
- Asset folders are now documented by purpose: `public/assets/figma` for app artwork, `public/Figma-image` for design screenshots, and `public/figma-img` for this checklist. Production code points consistently to `/assets/figma/...`.
- `community-germany.png` is an orange decorative pattern, not the Brandenburg Gate/group illustration its former alt text described. It is now treated as decorative. The group illustration itself is not present in the local assets and should be replaced when supplied.

## Fix One by One

### 1. Replace placeholder and unrelated copy — Done

- Removed Lorem ipsum from the home page, Sources page and footer.
- Replaced unrelated Team & Resources project-management details with visa-resource topics.
- Simplified claims on the Sources page and added a reminder to check current requirements with the responsible authority.
- Existing product-feature descriptions, plan prices and message counts still need owner confirmation before they are treated as current offers.

### 2. Make each call-to-action match its behavior — Done

- Replaced “Start your conversation” labels with “Explore guidance” links because this project has no chat destination yet.
- Replaced “Contact Us” with “Explore the residence act,” which links to that section.
- Changed FAQ “View All” into an expand/collapse-all button.
- Changed plan actions to “Explore sources.” Updated footer support wording so it no longer promises a contact form.
- Add real chat/contact destinations when those features exist.

### 3. Finish mobile navigation interactions — Done

- `SiteLogo` accepts `onClick`; selecting the logo in the open mobile menu now closes the menu and returns home.
- Consolidated mobile navigation styling into one 700px breakpoint ruleset, with one `.nav-links.is-open` definition.
- Checked the menu and logo route at mobile size and inspected page layout at 320px, 375px and 700px. The FAQ expand-all behavior and Sources route were also exercised in the browser.
- Removed the fixed body minimum width that caused a 15px horizontal scroll at a 320px browser viewport.

### 4. Use Tailwind consistently, starting with shared UI — In progress

- Migrated shared Button styling, Navbar structure, and the Hero layout shell to Tailwind utilities while retaining design-specific CSS for artwork, responsive menu behavior and visual details.
- Added Tailwind v4 typography tokens from the Figma desktop/mobile text-style scale.
- Explicitly restored bold heading weights removed by Tailwind’s heading reset.
- The remaining page sections are still mainly in `src/index.css`; continue moving them one component at a time and compare after each move.

### 5. Compare desktop and mobile layouts against references — Partially done

- Compared the live Home layout with the supplied local desktop/mobile screenshots and corrected heading weight/scale and mobile guide placement/height.
- Inspected the Sources route, navigation, FAQ expansion, and browser console. No browser console errors were reported.
- Exact frame-by-frame comparison with the updated Figma file remains pending because direct export is unavailable in the current view-only connection. The reference screenshots in `public/Figma-image` remain available for continued comparison.

### 6. Improve the 404 link contrast — Done

- Replaced the light cyan link color with the brand color and added a visible keyboard focus outline.

### 7. Standardize the Figma asset location — Done

- Kept production illustrations under `public/assets/figma`, visual reference screenshots under `public/Figma-image`, and the requested checklist under `public/figma-img`.
- Renamed the community artwork mapping to `communityPattern` and corrected its use/alt text to match the actual decorative pattern.
- The absent group illustration and Figma-export restriction are recorded above; no asset was moved or referenced from a mismatched path.

## Verification

- `npm.cmd run lint` — passed with no warnings.
- `npm.cmd run build` — passed.
- Browser review — inspected Home and Sources, opened/closed mobile navigation through the logo, expanded all FAQs, and checked 320px, 375px, 700px and desktop layouts. No console errors were reported.
- Figma was used read-only. No Figma file edits were made.
