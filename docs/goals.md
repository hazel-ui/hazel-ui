# Goals

Hazel UI's design philosophy, inspirations, and the reasoning behind our decisions.

---

## Philosophy

### Framework-agnostic by default

Hazel UI uses Tailwind internally as a build-time design token system - the curated colors, spacing, radii, and shadows compile into plain CSS. Consumers never need Tailwind installed. Every component accepts `className`, so the library composes naturally with Tailwind, plain CSS, CSS Modules, or anything else.

### Great defaults, fully configurable

Components ship with sensible defaults out of the box. Nothing is hardcoded — all visual decisions (colors, fonts, spacing) are expressed as CSS custom properties that consumers can override. Dark mode, custom themes, and brand colors are handled entirely by redefining variables.

### Zero runtime

No CSS-in-JS, no style injection, no JavaScript executing on the critical path for styling. Components are styled via CSS Modules compiled at build time.

Component CSS loads automatically when a component is imported — consumers never write a CSS import per component. This works via `"sideEffects": ["*.css"]` in `package.json`: bundlers (Next.js, Vite) detect the CSS side effect and include it automatically. The only manual import consumers ever write is an optional `theme.css` for hazel-ui's default visual theme. See [Performance Rationale](#performance-rationale) for the full reasoning.

### CSS variables for appearance, `className` for placement

Every component exposes its visual properties — color, radius, padding, font size, border — as CSS custom properties. These are the **primary styling API**. Consumers change how a component looks by overriding its variables, not by fighting its internal CSS.

```css
/* Plain CSS */
.my-section {
  --hz-button-bg: hotpink;
  --hz-button-radius: 9999px;
}
```

Tailwind exposes all design tokens as [CSS theme variables](https://tailwindcss.com/docs/theme) (`--color-*`, `--radius-*`, `--spacing-*`, etc.), so consumers already using Tailwind can reference them directly.

```css
/* Tailwind */
.my-section {
  --hz-button-bg: var(--color-pink-500);
  --hz-button-radius: var(--radius-full);
}
```

`className` is for **contextual placement** — things the component cannot know about itself: margin, `flex-grow`, `grid-area`, `position`. If you find yourself using `className` to change how a component *looks* rather than where it *sits*, that's a missing CSS variable — [file an issue](https://github.com/hazel-ui/hazel-ui/issues).

Spacing between siblings belongs to the parent container (`gap`, grid columns), not to the child via margin — this keeps components self-contained and layout-agnostic.

### Built to be wrapped

Teams building restrictive design systems (to enforce brand guidelines) on top of hazel-ui can ban `className` entirely on their wrappers and ship a `Box` component for layout. hazel-ui intentionally leaves the layout abstraction layer to the downstream system:

```tsx
// Downstream restrictive system
<Box mt={4} display="flex" gap={2}>
  <Button variant="primary" />
  <Button variant="secondary" />
</Box>
```

### RSC-first

All components are React Server Component compatible by default. No `"use client"` boundary required unless interactivity demands it.

### Zero dependencies

No runtime dependencies. The compiled CSS is self-contained. Only React is required as a peer.

---

## Why CSS Custom Properties

CSS custom properties (CSS variables) are the right primitive for a component library's styling API:

- **Browser-native** — no library, no runtime, no build step required to use them. Any environment that runs CSS understands them.
- **Cascade-aware** — they follow normal CSS cascade and inheritance rules. Set a variable on a parent and it flows down to all children automatically.
- **Scopeable** — override at any level: globally (`:root`), per-page, per-section, or per-instance.
- **Framework-agnostic** — a Tailwind consumer overrides them with `@theme`, a plain CSS consumer uses `:root {}`, a CSS Modules consumer uses a local scope.
- **Dark mode for free** — swap variable values under a `[data-theme="dark"]` selector. The component never needs to know.
- **Zero JS** — appearance changes have zero JavaScript involvement. No re-renders, no style recalculation triggered by JS.

Every visual property of every hazel-ui component is expressed as a CSS variable. The CSS variable surface is the public API for styling. Internal implementation details (the compiled class names, the specificity, the exact selectors) are private and subject to change.

Consumers who want hazel-ui's default look import one optional file:

```tsx
// app/layout.tsx — optional, for hazel-ui's default visual theme
import "hazel-ui/theme.css";
```

Consumers building their own design system on top can skip this and define their own values for hazel-ui's CSS variables.

---

## Performance Rationale

### No runtime CSS-in-JS

The widely-cited post ["Why We're Breaking Up with CSS-in-JS"](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) documented the concrete costs of runtime CSS-in-JS: style serialization on every render, insertion into the CSSOM on every mount, SSR bloat from embedding styles inline, and incompatibility with browser caching. These showed measurable slowdowns in production. hazel-ui has no runtime style work whatsoever. Styles are static CSS compiled at build time.

### CSS variables are paint-only changes

The Chrome team's [web.dev documentation on CSS custom properties](https://web.dev/articles/css-variables) notes that updating a CSS variable value triggers only a **paint** update — not layout recalculation. Changing `background-color` via a CSS variable is faster than changing it via a JS class swap, which triggers style recalculation.

### RSC compatibility eliminates hydration cost

The React team's guidance on [CSS-in-JS and Server Components](https://react.dev/reference/rsc/server-components#using-third-party-packages-and-providers) explicitly states that runtime CSS-in-JS libraries require the `"use client"` boundary, pulling components out of the server rendering pipeline and into client-side hydration. hazel-ui components are RSC-compatible by default — no hydration cost for styling, no client JS for visual presentation.

### Zero JS bundle contribution

The [HTTP Archive Web Almanac](https://almanac.httparchive.org/) consistently identifies JavaScript weight as the primary performance concern on the web — not CSS. Runtime CSS-in-JS libraries (emotion, styled-components) contribute to the JS bundle both directly (library code) and indirectly (component styles serialized as JS). hazel-ui adds nothing to the consumer's JS bundle for styling.

### Tree-shakeable JS and CSS

Each component is available as a nested import (`import { Button } from "hazel-ui/Button"`), so consumers only pull in the JS and CSS for components they actually use. Unused components are never bundled — no tree-shaking analysis required, the bundler simply never encounters them.

### CSS size at scale

CSS Modules output is not atomic — each component emits its own declarations. The concern that this bloats the CSS bundle at scale is largely addressed by two factors: (1) automatic compression that every modern web server and CDN applies — repetitive CSS text compresses extremely well since the same declarations appear across components, and (2) CSS parse time being negligible compared to JavaScript.

## Inspirations

### [shadcn/ui](https://ui.shadcn.com/)
"Great defaults, fully configurable" as a philosophy. Consumers own the styling, nothing is a black box. Hazel UI takes this approach to API design while shipping as an npm package.

### [GitHub Primer](https://primer.style/)
CSS Modules, `className` passthrough on every component, CSS custom properties for theming. Close to the architecture we're building.

### [Mantine](https://mantine.dev/)
Comprehensive component library with CSS Modules. Good reference for component API surface and variant design.

### [Radix Themes](https://www.radix-ui.com/themes)
CSS custom properties as the theming API. Clean separation between unstyled primitives (Radix) and opinionated defaults (Themes).

### [React Spectrum](https://react-spectrum.adobe.com/) _by Adobe_
Enterprise-scale accessibility patterns and component architecture. Strong reference for keyboard navigation, ARIA, and internationalization.

### [Ariakit](https://ariakit.com/) _(formerly Reakit)_
Accessibility-first, unstyled primitives with optional styling layer. Validated the oxlint + oxfmt toolchain (migrated from Biome). Inspirational for the unstyled/styled layering model.

### [Fluent UI](https://react.fluentui.dev/) _by Microsoft_
Component API design at scale across Microsoft 365. Useful reference for prop patterns, composition, and how a design system serves many product teams.

---

## Styling Decisions — What Got Ruled Out and Why

| Approach | Why we didn't pick it |
|---|---|
| **Runtime CSS-in-JS** (emotion, styled-components) | Style injection on every render. SSR complexity. No streaming. The industry is moving away from this. See [Why We're Breaking Up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) and the [React RSC docs](https://react.dev/reference/rsc/server-components#using-third-party-packages-and-providers). |
| **vanilla-extract** | Zero Rolldown/tsdown engagement on GitHub. No major design system uses it. We're betting on Rolldown, and a bundler plugin with no Rolldown maintainer interest is a risk we can't accept. |
| **StyleX** (Meta) | Compelling, but zero adoption outside Meta multiple years after release. Build-time CSS-in-JS tools (Griffel, Panda, StyleX) are each captive to a single design system — nobody else adopts them. |
| **Panda CSS** | Requires consumer-side configuration. |
| **tailwind-variants / CVA** | Couples consumers to Tailwind. CVA is v0 and effectively abandoned. |
| **Tailwind as consumer requirement** | Forces consumers to install and configure Tailwind. Hazel UI is framework-agnostic — consumers can use Tailwind via `className`, but should never be required to. |
