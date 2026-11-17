# Herbert Fix Checklist

This list is ordered so each fix can be done and checked before moving to the next one.

## Audit Notes

- Reviewed the React pages/components, current styles, local desktop/mobile reference images in `public/Figma-image`, and current lint output.
- The supplied Figma URL could not be inspected in this environment because its browser requires WebGL. Treat the local reference images as the available visual source; verify precise Figma tokens and interaction states when the design file is accessible.
- Tailwind CSS v4 is already installed and enabled through the Vite plugin and `@import "tailwindcss"`. Most page styling still lives in the large `src/index.css`, so the project is not yet consistently using Tailwind.
- The report is in the requested `public/figma-img` directory. Existing production illustrations currently live in `public/assets/figma`; reference screenshots are in `public/Figma-image`.

## Fix One by One

### 1. Replace placeholder and unrelated copy

**What is wrong:** `Lorem ipsum` remains in the home page, sources page, and footer. The home page's Team & Resources section also has generic project-planning text such as "Outsourced development to freelancers" and "Budget: $15,000", which does not describe the visa service.

**How to fix it:** Replace all filler with approved Herbert product copy. Describe the actual immigration guidance, team, and resources. Confirm legal and product claims with the owner rather than inventing them.

**Files:** `src/pages/Home.jsx`, `src/pages/Sources.jsx`, `src/components/Footer.jsx`

### 2. Make each call-to-action do what its label says

**What is wrong:** The Hero's "Start your conversation" button goes to `#features`; the Sources page's "Contact Us" button goes to `#residence`; the home page's "View All" button only goes back to `#faq`. These destinations do not match the labels. The conversation links currently point to page anchors, not a chat or conversation flow.

**How to fix it:** Connect conversation buttons to the real chat URL or implemented conversation section. Point "Contact Us" to a contact form or contact destination. Make "View All" expand all questions or navigate to a complete FAQ view; otherwise rename it to match its current behavior.

**Files:** `src/components/Hero.jsx`, `src/pages/Home.jsx`, `src/pages/Sources.jsx`, `src/components/Navbar.jsx`

### 3. Finish the mobile navigation interactions

**What is wrong:** The mobile menu's `SiteLogo` links home but does not close the menu. The nav stylesheet also has multiple `@media (max-width: 700px)` blocks and repeated `.nav-links.is-open` rules, so layout behavior depends on cascade order.

**How to fix it:** Let `SiteLogo` accept and forward an `onClick` handler, then close the menu when its mobile logo is selected. Consolidate mobile navbar rules into one breakpoint block. Check menu open/close, route changes, focus visibility, and scrolling at 320px, 375px, and 700px widths.

**Files:** `src/components/Navbar.jsx`, `src/components/common/SiteLogo.jsx`, `src/index.css`

### 4. Use Tailwind consistently, starting with shared UI

**What is wrong:** Tailwind is configured, but most layouts and responsive behavior use custom selectors in `src/index.css`. This makes repeated styles and breakpoint overrides harder to track.

**How to fix it:** Migrate one component at a time, beginning with the navbar and shared Button, then Hero and page sections. Use Tailwind utilities and shared theme tokens from Tailwind v4. Keep custom CSS only for artwork, complex illustration styling, or effects that are awkward as utilities. Compare against the local reference images after each migration; avoid a wholesale rewrite that changes the design accidentally.

**Files:** `src/index.css`, `src/components/Navbar.jsx`, `src/components/common/Button.jsx`, page and section components

### 5. Match desktop and mobile layouts against the available references

**What is wrong:** The repository has separate desktop and mobile reference screenshots, but a successful build does not verify visual fidelity. The Figma file itself was inaccessible, so exact typography, measurements, and interactive states remain unverified.

**How to fix it:** Compare the rendered home page, Sources page, and mobile menu side by side with `public/Figma-image/Landing page on desktop.png`, `Mobile Version of landing page.png`, `Menu on mobile version.png`, and the two Sources screenshots. Fix layout, typography, spacing, image cropping, and responsive ordering one section at a time. Recheck at 320px, 375px, tablet, and desktop sizes.

**Files:** `src/index.css`, `src/components/`, `src/pages/`

### 6. Improve the 404 link contrast

**What is wrong:** `src/pages/NotFound.jsx` styles "Return home" with `text-cyan-300`, which is too light against the light page background for readable link contrast.

**How to fix it:** Use a darker brand color with sufficient contrast, and retain a visible keyboard-focus style.

**File:** `src/pages/NotFound.jsx`

### 7. Standardize the Figma asset location

**What is wrong:** The app illustrations are referenced from `public/assets/figma`, while screenshots are in `public/Figma-image`. The requested lowercase `public/figma-img` did not previously exist.

**How to fix it:** Decide which directory is for production artwork and which is for visual reference screenshots. If production artwork should live in `public/figma-img`, move/copy the approved assets there and update `src/utility/figmaImages.js` paths together. Keep the case consistent because deployment filesystems may be case-sensitive. Do not move assets without updating and testing every reference.

**Files:** `src/utility/figmaImages.js`, `public/assets/figma`, `public/Figma-image`

## Verification

- `npm run lint`: passed during this audit.
- `npm run build`: passed in the previous implementation check; rerun after applying fixes.
- The browser page could be opened, but browser contents/screenshots were unavailable in this environment, so visual comparison is still pending.
