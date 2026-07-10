# React Workshop

An interactive workshop app for teaching React and state management. Each lesson pairs a **live code editor** with a **real-time preview** so learners can edit code and see state changes immediately.

Built for developer presentations and hands-on workshops, deployable to Vercel.

## Features

- **Interactive Sandpack editor** — edit `App.tsx` in the browser and see results instantly
- **Side-by-side layout** — code on the left, preview on the right
- **Hamburger navigation** — switch lessons via a slide-out menu (shadcn `Sheet`)
- **State inspector** — each lesson preview shows live state values
- **Objectives & hints** — sidebar with learning goals and suggested exercises
- **Dark minimal UI** — [shadcn/ui](https://ui.shadcn.com) with a neutral theme

## Lessons

| Route | Topic | Concept |
|-------|-------|---------|
| `/learn/counter` | Counter with useState | `useState` |
| `/learn/toggle` | Boolean state with Switch | boolean state |
| `/learn/controlled-input` | Controlled inputs | controlled components |
| `/learn/lifting-state` | Lifting state up | lifting state |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Sandpack](https://sandpack.codesandbox.io) (`@codesandbox/sandpack-react`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to the first lesson.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run format` | Format with Prettier |

## Project structure

```text
app/
  layout.tsx              # Root layout, dark theme
  page.tsx                # Redirects to first lesson
  learn/[slug]/page.tsx   # Dynamic lesson routes

components/
  ui/                     # shadcn/ui primitives
  workshop/               # Lesson shell, nav, Sandpack wrapper

lib/lessons/
  types.ts                # Lesson type definition
  registry.ts             # Lesson list and file resolver
  sandpack-shared.ts      # Shared sandbox styles + UI components
  counter.ts              # Individual lesson definitions
  toggle.ts
  controlled-input.ts
  lifting-state.ts

hooks/
  use-container-height.ts # ResizeObserver for Sandpack layout
```

## How lessons work

Each lesson is a module in `lib/lessons/` that exports a `Lesson` object:

- `slug`, `title`, `description`, `concept` — metadata for routing and nav
- `objectives`, `hints` — shown in the sidebar
- `files` — Sandpack file map (typically `/App.tsx`)

Shared sandbox files (`/styles.css`, `/components/ui.tsx`, `/index.tsx`) live in `sandpack-shared.ts` and are merged automatically via `getLessonFiles()`.

The app shell uses real shadcn components. The Sandpack iframe uses lightweight UI primitives styled to match, keeping the sandbox fast and self-contained.

## Adding a lesson

1. Create `lib/lessons/your-lesson.ts`:

```ts
import type { Lesson } from "@/lib/lessons/types"

export const yourLesson: Lesson = {
  slug: "your-lesson",
  title: "Your lesson title",
  description: "Short description.",
  concept: "useState",
  objectives: ["Goal one", "Goal two"],
  hints: ["Try changing X", "Add a Y button"],
  files: {
    "/App.tsx": `import { useState } from "react";
import { Button } from "./components/ui";

export default function App() {
  return <div className="preview-root">Hello</div>;
}
`,
  },
}
```

2. Register it in `lib/lessons/registry.ts`:

```ts
import { yourLesson } from "@/lib/lessons/your-lesson"

export const lessons: Lesson[] = [
  // ...existing lessons
  yourLesson,
]
```

3. The route `/learn/your-lesson` and nav entry are generated automatically.

**Tip:** When embedding JSX expressions inside lesson template strings, use `{"$" + value}` instead of `\${value}` to avoid broken output in the sandbox.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com) — Next.js is auto-detected
3. Deploy (no extra configuration required)

Lessons are statically generated via `generateStaticParams`.

## Adding shadcn components

To extend the app shell UI:

```bash
npx shadcn@latest add dialog
```

Components are placed in `components/ui/`.
