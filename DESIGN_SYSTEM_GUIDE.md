# Design System Guide

## What We Built

A React component library published as an npm package (`@mohamedsalmaan/design-system`) that you can install in any project and get consistent UI components.

**Current components:** Button (4 variants x 5 colors x 3 sizes + loading/icons) and Typography (10 variants)

---

## Project Structure

```
design_system/
├── packages/
│   ├── tokens/              # Design tokens (colors, spacing, fonts as CSS variables)
│   └── core/                # The actual React components (published to npm)
├── apps/
│   └── storybook/           # Local playground to preview components
├── .changeset/              # Versioning config (for future releases)
├── .github/workflows/       # CI/CD automation (for GitHub)
├── pnpm-workspace.yaml      # Tells pnpm this is a monorepo
├── turbo.json               # Task runner (build/test all packages in order)
└── package.json             # Root config
```

This is a **monorepo** - multiple packages in one repo, managed by `pnpm workspaces` + `Turborepo`. The `tokens` package holds the "raw materials" (colors, spacing) and the `core` package consumes them to build components.

---

## How Components Work

### Before: CSS Modules (didn't work)

We initially used `Button.module.css` files imported as:
```tsx
import styles from './Button.module.css'
// styles.button, styles.primary, styles.solid
```

Problem: `tsup` (our bundler) didn't generate proper class name mappings when CSS was extracted to a separate file. The JS got an empty object `{}`, so no styles applied.

### After: Scoped BEM Class Names

We switched to plain CSS files with `ms-` prefix:
```css
/* Button.css */
.ms-btn { ... }
.ms-btn--solid.ms-btn--primary { ... }
.ms-btn--danger { ... }
```

```tsx
// Button.tsx
import './Button.css'
// Use string literals for class names
className={`ms-btn ms-btn--${variant} ms-btn--${color}`}
```

The CSS is imported for side effects only (the file is bundled into `styles.css`), and the class names are plain strings. No runtime cost, no bundler issues.

---

## The Build Pipeline

1. **`packages/tokens/`** — `tsup` reads `tokens.css` and `tokens.ts`, outputs:
   - `dist/tokens.css` (CSS variables like `--color-primary`)
   - `dist/index.js` (TypeScript constants for JS usage)

2. **`packages/core/`** — `tsup` reads all components, outputs:
   - `dist/index.js` + `dist/index.cjs` (ESM + CommonJS formats)
   - `dist/index.css` (component styles like `.ms-btn`)
   - `dist/index.d.ts` (TypeScript types)

3. **`scripts/build-styles.js`** — merges `tokens.css` + `index.css` into a single `dist/styles.css`

4. **Published file structure:**
   ```
   dist/
   ├── index.js          # ESM bundle
   ├── index.cjs         # CommonJS bundle  
   ├── index.d.ts        # TypeScript types
   ├── styles.css        # ALL styles (tokens + components) — consumer imports this
   ├── index.css         # Component styles only (tsup output)
   └── index.css.map     # Sourcemap
   ```

**Why two CSS imports?** The consumer only needs one: `import '@mohamedsalmaan/design-system/styles.css'`. This gives them the CSS variables (tokens) + component styles together.

---

## How Consumers Use It

```bash
npm install @mohamedsalmaan/design-system
```

```tsx
import { Button, Typography, ThemeProvider } from '@mohamedsalmaan/design-system'
import '@mohamedsalmaan/design-system/styles.css'

function App() {
  return (
    <ThemeProvider>
      <Button variant="solid" color="primary">Click</Button>
      <Button variant="outline" color="danger">Delete</Button>
      <Typography variant="h1">Title</Typography>
    </ThemeProvider>
  )
}
```

The consumer gets:
- Tree-shakeable JS (only used components end up in their bundle)
- CSS variables for theming (they can override `--color-primary` etc.)
- TypeScript autocomplete for all props
- Light/dark mode via `ThemeProvider`

---

## Key Design Decisions

| Decision | Choice | Why |
|---|---|---|
| Bundler | `tsup` (esbuild-based) | Zero-config, fast, outputs ESM + CJS + types |
| Styling | CSS Variables + plain CSS | Zero runtime cost, no dependencies, easy to debug |
| Class naming | `ms-` prefixed BEM | Avoids conflicts with consumer's CSS, no build-time hashing needed |
| Monorepo | `pnpm workspaces` | Share code between packages, one repo for everything |
| Task runner | `Turborepo` | Build packages in dependency order, cache results |
| React | Peer dependency | Never bundle React itself (avoids duplicate React bugs) |

---

## What Each Tool Does

- **`tsup`** — Bundles TypeScript + CSS into npm-ready package files
- **`pnpm`** — Package manager, handles monorepo workspaces
- **`Turborepo`** — Runs build/test/lint across all packages, caches results
- **`Storybook`** — Isolated component development environment at `localhost:6006`
- **`Vitest`** — Runs unit tests (React Testing Library + jsdom)
- **`Changesets`** — Manages version bumps and changelogs for publishing

---

## Publishing to npm

```bash
# 1. Build
pnpm --filter @mohamedsalmaan/design-system build

# 2. Publish
cd packages/core
npm publish --access public
```

**What gets published:** Only the `dist/` folder and `package.json` (configured via `"files": ["dist"]` in package.json). The source code, tests, and node_modules stay local.

**Scoped packages:** `@mohamedsalmaan/design-system` is a scoped package. Scoped packages require:
- The scope (`@mohamedsalmaan`) must match your npm username or org
- `--access public` flag (scoped packages are private by default)
- 2FA handling: either OTP or a granular access token with "bypass 2FA"

**Version bumps:** We used `npm publish` directly with manual version changes. For future releases, `Changesets` can automate versioning + changelogs.

---

## Commands Reference

```bash
# Development
pnpm --filter storybook dev          # Start Storybook at localhost:6006

# Build
pnpm turbo run build                 # Build all packages

# Test
pnpm --filter @mohamedsalmaan/design-system test

# Publish new version
# 1. Update version in packages/core/package.json
# 2. pnpm --filter @mohamedsalmaan/design-system build
# 3. cd packages/core && npm publish --access public
```

---

## Next Steps: Adding a New Component

1. Create `packages/core/src/components/YourComponent/`

2. Create files:
   - `YourComponent.tsx` — component logic with `ms-` prefixed classes
   - `YourComponent.css` — styles with `.ms-your-component { ... }`
   - `YourComponent.test.tsx` — Vitest tests
   - `YourComponent.stories.tsx` — Storybook stories
   - `index.ts` — re-export

3. Export from `packages/core/src/components/index.ts`

4. Build & test: `pnpm turbo run build && pnpm --filter @mohamedsalmaan/design-system test`

5. Bump version, publish
