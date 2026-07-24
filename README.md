# @mohamedsalmaan/design-system

A modern, lightweight React component library with built-in dark mode support, zero runtime styling cost, and comprehensive TypeScript types.

[![npm version](https://img.shields.io/npm/v/@mohamedsalmaan/design-system?color=blue&label=npm)](https://www.npmjs.com/package/@mohamedsalmaan/design-system)
[![CI](https://github.com/MohamedSalmaan25/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/MohamedSalmaan25/design-system/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/@mohamedsalmaan/design-system?color=blue)](https://www.npmjs.com/package/@mohamedsalmaan/design-system)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-workspaces-orange)](https://pnpm.io/)

---

## Features

- **40+ production-ready components** — Button, Typography, Dialog, Tabs, Autocomplete, Data Grid, and more
- **Dark mode built in** — Wrap your app in `ThemeProvider` and toggle with `useTheme`
- **Zero runtime styling** — CSS variables + plain CSS, no CSS-in-JS overhead
- **Tree-shakeable** — Import only what you use, your bundle stays lean
- **TypeScript first** — Full type safety with auto-complete for all props
- **Customizable** — Override design tokens via CSS custom properties
- **Accessible** — ARIA attributes, keyboard navigation, focus management
- **Lightweight** — No external runtime dependencies (peer deps: React 18+)

---

## Installation

```bash
npm install @mohamedsalmaan/design-system
```

```bash
yarn add @mohamedsalmaan/design-system
```

```bash
pnpm add @mohamedsalmaan/design-system
```

---

## Quick Start

```tsx
import { Button, Typography, ThemeProvider } from '@mohamedsalmaan/design-system'
import '@mohamedsalmaan/design-system/styles.css'

function App() {
  return (
    <ThemeProvider>
      <Typography variant="h1">Welcome</Typography>
      <Button variant="solid" color="primary">
        Get Started
      </Button>
    </ThemeProvider>
  )
}
```

---

## Dark Mode

Wrap your app with `ThemeProvider` and use the `useTheme` hook to toggle:

```tsx
import { ThemeProvider, useTheme, Button } from '@mohamedsalmaan/design-system'

function ToggleButton() {
  const { theme, toggleTheme } = useTheme()
  return <Button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'} Mode</Button>
}

function App() {
  return (
    <ThemeProvider>
      <ToggleButton />
    </ThemeProvider>
  )
}
```

---

## Components

| Category | Components |
|---|---|
| **Inputs** | Button, ButtonGroup, Checkbox, Fab, NumberField, RadioGroup, Rating, Select, Slider, Switch, TextField, ToggleButton |
| **Data Display** | Avatar, Badge, Chip, Divider, List, Paper, Skeleton, Table, Typography |
| **Feedback** | Alert, Backdrop, Dialog, LinearProgress, Snackbar, Spinner |
| **Navigation** | BottomNav, Breadcrumbs, Drawer, Link, Menu, Menubar, Pagination, Stepper, Tabs |
| **Layout** | Box, Container, Card, Grid |
| **Utilities** | Accordion, Autocomplete, Tooltip, TransferList |

---

## Theming with CSS Variables

Override any design token in your own stylesheet:

```css
:root {
  --color-primary: #6366f1;
  --color-danger: #ef4444;
  --font-size-lg: 1.25rem;
  --radius-md: 8px;
}
```

---

## Development

This monorepo uses pnpm workspaces and Turborepo.

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm --filter storybook dev

# Build all packages
pnpm turbo run build

# Run tests
pnpm turbo run test

# Lint
pnpm turbo run lint

# Type check
pnpm turbo run typecheck
```

---

## Project Structure

```
design-system/
├── packages/
│   ├── tokens/          # Design tokens (colors, spacing, typography as CSS vars)
│   └── core/            # React components (published as @mohamedsalmaan/design-system)
├── apps/
│   └── storybook/       # Component preview at localhost:6006
├── .github/workflows/   # CI / Release automation
└── package.json         # Monorepo root
```

---

## Contributing

Contributions are welcome! Please open an issue or pull request on [GitHub](https://github.com/MohamedSalmaan25/design-system).

---

## License

[MIT](LICENSE) &copy; 2026 Mohamed Salmaan
