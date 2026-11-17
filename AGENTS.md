# AGENTS.md — Project Development Guidelines

## 1. Project Design Reference

**Project Name:** Herbert

**Primary Figma Design:**

https://www.figma.com/design/SAc7cJNhfmUt57GCu85NJG/Herbert?node-id=0-1

### Instructions

- Treat this Figma file as the primary source of truth.
- Inspect the complete design before starting development.
- Inspect all relevant pages, frames, components and assets.
- Check desktop and mobile layouts.
- Use original Figma assets wherever possible.
- Do not ask the user to provide the Figma link again unless it changes or cannot be accessed.
- If Figma access fails, explain the problem instead of guessing the design.
- Always inspect the actual design before making implementation decisions.

## 2. Project Objective

Build high-quality, responsive React websites based on the supplied Figma design.

The Figma file is the single source of truth for:

- Layout and dimensions
- Typography and font weights
- Colors and backgrounds
- Spacing and alignment
- Images, icons and illustrations
- Borders, shadows and border radii
- Responsive behavior
- Interactive states and animations

The goal is to reproduce the design as closely as possible, not redesign or reinterpret it.

Prioritize:
1. Design accuracy
2. Responsive behavior
3. Functional interactions
4. Clean and maintainable code
5. Beginner-friendly implementation

## 3. Technology Stack

Use the following stack unless the project explicitly requires otherwise:

- React
- Vite
- JavaScript (JSX)
- Tailwind CSS v4
- Lucide React for icons when appropriate

### Styling Rules

- Use Tailwind CSS as the primary styling solution.
- Use plain CSS only when Tailwind is impractical.
- Avoid unnecessary dependencies.
- Do not introduce additional frameworks without a clear reason.
- Keep the implementation simple and maintainable.

Plain CSS is acceptable for:

- Complex animations
- Unusual visual effects
- Custom scrollbar styling
- Specialized pseudo-elements
- Styling that becomes unnecessarily complicated with utility classes

## 4. Tailwind CSS Architecture

Use Tailwind CSS v4 conventions.

- Configure Tailwind using `@tailwindcss/vite`.
- Import Tailwind using `@import "tailwindcss";`.
- Define reusable theme tokens inside `@theme` in the main CSS file.
- Use meaningful color and typography variables.
- Avoid unnecessary configuration files from older Tailwind versions.
- Prefer standard Tailwind utilities over custom CSS.
- Do not create duplicate theme tokens.

Example configuration:

```css
@import "tailwindcss";

@theme {
  /* Brand colors */
  --color-primary: #c2603a;
  --color-primary-hover: #a34e2c;
  --color-dark: #2b2622;
  --color-muted: #7a6f65;
  --color-body-bg: #faf6f0;

  /* Typography */
  --text-13: 13px;
  --text-15: 15px;
  --text-22: 22px;
  --text-32: 32px;
  --text-44: 44px;
  --text-52: 52px;
  --text-68: 68px;

  /* Line heights */
  --leading-112: 112%;
  --leading-119: 119%;
  --leading-160: 160%;
}
```

Important:

- These are example values, not mandatory project colors.
- Extract actual colors and typography from Figma.
- Use the correct Tailwind v4 theme namespaces.
- Verify that custom utilities are generated correctly.
- Do not blindly reuse example tokens in a new design.

## 5. Container System

Use a consistent container-based layout throughout the website.

Default pattern:

```jsx
<div className="mx-auto w-full max-w-360 px-4 sm:px-10 lg:px-20">
  {/* Content */}
</div>
```

Create a reusable `Container.jsx` component.

Example:

```jsx
export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-4 sm:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
```

### Container Rules

- Maintain consistent horizontal alignment across sections.
- Use Flexbox and CSS Grid for layouts.
- Use responsive padding.
- Avoid arbitrary margins or positioning to compensate for incorrect layouts.
- Verify the actual maximum width against the Figma design.
- Ensure custom width utilities are supported by the Tailwind theme.

The container pattern is a starting point. Adjust it when the Figma design requires a different width or layout.

## 6. Reusable Components

Create common UI components when they are genuinely reused.

Suggested components:

- Container
- Heading
- Paragraph
- Info
- Button

### Component Guidelines

Keep components:

- Small
- Reusable
- Readable
- Easy to modify
- Consistent with the design system

Do not over-engineer simple elements or create unnecessary abstractions.

Use component props for variations instead of duplicating nearly identical components.

Use semantic HTML and appropriate HTML elements.

## 7. Project Structure

Use a clean and understandable folder structure.

Suggested structure:

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── common/
│   │   ├── Container.jsx
│   │   ├── Heading.jsx
│   │   ├── Paragraph.jsx
│   │   ├── Info.jsx
│   │   └── Button.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/
├── pages/
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

Adjust the structure according to project size.

Do not create empty folders or unnecessary files.

## 8. Figma Inspection Before Development

Before writing code:

1. Inspect the complete Figma file.
2. Identify all relevant pages, frames and components.
3. Inspect desktop and mobile designs.
4. Identify typography, colors, spacing and dimensions.
5. Inspect image assets and illustrations.
6. Identify reusable components and repeated patterns.
7. Check available interactive states.
8. Understand the complete page structure.
9. Identify differences between desktop and mobile layouts.
10. Note any missing or inaccessible design information.

Do not start coding based on a quick visual glance.

Do not guess missing design details when they can be inspected in Figma.

## 9. Figma-to-Code Implementation Rules

Before implementing any design:

1. Retrieve the Figma design context and inspect the relevant frames.
2. Identify the exact desktop and mobile frame dimensions.
3. Inspect available assets and use original images, SVGs and illustrations.
4. Extract design tokens instead of guessing colors, typography or spacing.
5. Create a section-by-section implementation plan.
6. Implement one section at a time.
7. Compare browser screenshots with the corresponding Figma frames.
8. Correct visual differences before moving forward.

### Important Rules

- Do not use placeholder images when original assets are available.
- Do not approximate typography when the correct font information is available.
- Do not consider a section complete just because it looks acceptable.
- Verify actual browser rendering, not just JSX or CSS code.
- If a Figma detail is inaccessible or ambiguous, report it rather than inventing it.
- Preserve the original design's proportions and visual hierarchy.

### Progress Tracking

Maintain a simple checklist of:

- Completed sections
- Pending sections
- Sections awaiting verification
- Known design differences

Do not mark a section as verified until it has been visually compared against Figma.

## 10. Development Workflow

Build the project in small, logical stages.

Recommended order:

1. Project setup
2. Global styles and theme
3. Container and common components
4. Header / Navbar
5. Hero section
6. Main content sections
7. Cards and repeated components
8. Footer
9. Responsive adjustments
10. Interactions and animations
11. Final visual verification

Complete and verify each major section before moving to the next.

Do not rush through the entire website in one large implementation step.

## 11. Design Accuracy

Pay close attention to:

- Exact section widths and heights
- Container alignment
- Padding and margins
- Font family, size, weight and line height
- Image dimensions and crop behavior
- Button dimensions and radius
- Background colors
- Borders and shadows
- Grid and Flexbox alignment
- Desktop and mobile differences

### Image and Asset Rules

- Prefer original Figma assets over approximations.
- Preserve image aspect ratios.
- Use appropriate `object-fit` and `object-position`.
- Do not replace supplied images with random alternatives.
- Do not use emoji as substitutes for actual design icons.
- Keep assets organized inside the assets directory.

Do not add unnecessary visual elements that are absent from the design.

## 12. Responsive Design

The website must work properly on:

- Mobile: 320px–639px
- Tablet: 640px–1023px
- Desktop: 1024px and above

These are testing ranges, not mandatory breakpoints.

Use mobile-first Tailwind classes.

Check:

- Navigation behavior
- Text wrapping
- Image scaling
- Grid column changes
- Button alignment
- Section spacing
- Horizontal overflow
- Responsive typography
- Mobile menu behavior

Do not simply shrink the desktop design to fit mobile.

Follow the mobile Figma layout when available.

## 13. Coding Standards

- Use functional React components.
- Use meaningful component and variable names.
- Keep components focused on one responsibility.
- Avoid unnecessary state and effects.
- Avoid duplicated code.
- Use semantic HTML.
- Use accessible buttons, links and form labels.
- Add meaningful image alt text.
- Keep code beginner-friendly and readable.
- Avoid extremely long one-line JSX.
- Avoid unnecessary abstractions.
- Do not use hacks to hide layout problems.
- Keep files organized and responsibilities clear.

Use best practices rather than choosing the easiest implementation that merely works.

When multiple approaches are possible, choose the maintainable and straightforward approach.

## 14. Interactions and Animations

Every visible interactive element should work as intended.

Verify:

- Navigation links
- Buttons
- Dropdowns
- Mobile menus
- Forms
- Hover states
- Active states
- Loading or feedback states

### Animation Rules

- Use CSS transitions for basic hover and interaction effects.
- Use GSAP when the design requires more advanced animation.
- Use ScrollTrigger only when scroll-based animation is required.
- Avoid unnecessary animation libraries.
- Keep animations smooth and responsive.
- Respect reduced-motion preferences.
- Do not invent animations that change the intended design.

## 15. Testing and Quality Checks

After implementation:

1. Run the development server.
2. Check the browser console for errors.
3. Check the terminal for build errors.
4. Run the production build.
5. Inspect the page at mobile, tablet and desktop widths.
6. Check for horizontal scrolling.
7. Verify images and assets load correctly.
8. Test all interactive elements.
9. Compare screenshots against Figma.
10. Fix visual differences before declaring the work complete.

Do not claim the project is finished if it has not been tested.

## 16. Final Completion Checklist

Before completing the project, verify:

- [ ] All relevant Figma sections are implemented.
- [ ] Layout closely matches the reference.
- [ ] Correct images and icons are used.
- [ ] Typography and colors match.
- [ ] Spacing and alignment are consistent.
- [ ] Responsive layouts work.
- [ ] Buttons and links work.
- [ ] Mobile navigation works.
- [ ] No console errors.
- [ ] No build errors.
- [ ] No unintended horizontal overflow.
- [ ] Code is organized and understandable.
- [ ] Browser screenshots have been compared against Figma.

## 17. Important Rules

1. Never sacrifice design accuracy for coding convenience.
2. Never guess when the original design or asset can be inspected.
3. Never unnecessarily change the technology stack.
4. Never install dependencies without a clear reason.
5. Never rewrite working code without understanding its purpose.
6. Never claim something works without testing it.
7. Explain important technical decisions briefly.
8. Prioritize maintainability, readability and accuracy over clever code.
9. Ask the user only when an important requirement cannot be determined from the available project context.
10. Preserve existing working functionality when modifying a project.

---

## Primary Objective

Build a visually accurate, responsive, functional and maintainable website based on the supplied Figma design.

Use React for structure and functionality, Tailwind CSS for styling, and reusable components for consistency.

Keep the code simple, understandable and maintainable while achieving the highest practical level of design accuracy.