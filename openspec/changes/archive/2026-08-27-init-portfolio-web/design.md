# Design
## Context

See `proposal.md` for overall motivation. The project is an Angular single-page application built inside `/home/dev-lord/Workspace/Projects/portfolio`. It will be deployed to Firebase Hosting under the existing `cloudforge-market-9dbcf` project, aligned with the patterns established in `fe-worship-wear-cloudforge`.

## Goals / Non-goals

**Goals:**
- Implement a responsive, lightweight, dark neo-brutalist UI inspired by `moure.dev`.
- Provide instantaneous client-side navigation between the executive landing page (`/`) and the full project catalog (`/projects`).
- Ensure all technical data (skills, projects, timeline, certifications) is structured in type-safe data models.
- Support direct static download of `Victor_Hodges_CV_2026.pdf`.
- Deploy smoothly to Firebase Hosting with SPA fallback rules.

**Non-Goals:**
- Developing a dynamic CMS or backend database for portfolio edits (data is maintained cleanly in static TypeScript data models).
- Implementing authentication or user sessions on the portfolio site.
- Dynamic email form backend (contact is handled via direct `mailto:`, phone/WhatsApp, and LinkedIn links).

## Decisions

### 1. Angular 22 Standalone Architecture with Signals
- **Decision:** Build entirely with standalone components, native control flow (`@if`, `@for`), and `Signals` for reactive filter state.
- **Rationale:** Minimizes bundle size, eliminates NgModule overhead, and provides maximum performance and maintainability.
- **Alternatives Considered:** Angular with NgModules (legacy overhead), Astro/Next.js (would diverge from existing Angular 22 codebase standard in the workspace).

### 2. Styling: Tailwind Css V4 + Neo-brutalist Design Tokens
- **Decision:** Use Tailwind CSS v4 configured with custom design tokens matching `moure.dev`:
  - Background: `#1A1A1A` with subtle dot matrix overlay.
  - Text & Borders: `#F7F7F7` (1px solid border).
  - Hard Shadows: `3px 3px 0px 0px #F7F7F7` (`shadow-neo`).
  - Active/Hover State: `transform: translate(3px, 3px); box-shadow: none;`.
  - Accent colors: Blue (`#3EB0F9`), Orange (`#FFA61E`), Red/Orange (`#FF5500`), Green (`#00AA47`).
- **Rationale:** Delivers the distinct visual style requested with zero runtime CSS overhead and high developer velocity.

### 3. Static Type-safe Data Models (`projects.data.ts` & `skills.data.ts`)
- **Decision:** Store project and skill data in strongly-typed TypeScript models under `src/app/data/`.
- **Rationale:** Ensures fast compilation, zero external network dependency, instant filtering, and easy git-based content maintenance.

### 4. Routing & Structure
```
src/app/
├── core/
│   ├── components/
│   │   ├── header/
│   │   └── footer/
│   └── models/
│       ├── project.model.ts
│       └── skill.model.ts
├── data/
│   ├── projects.data.ts
│   └── skills.data.ts
├── features/
│   ├── landing/
│   │   ├── landing.component.ts
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── skills-matrix/
│   │   │   ├── featured-projects/
│   │   │   └── contact-section/
│   └── projects/
│       ├── projects-catalog.component.ts
│       └── components/
│           ├── category-filter/
│           └── project-card/
└── app.routes.ts
```

### 5. Multi-target Firebase Hosting
- **Decision:** Configure `firebase.json` with target `portfolio` and `.firebaserc` pointing to `cloudforge-market-9dbcf`.
- **Rationale:** Matches workspace conventions for CloudForge projects and isolates portfolio hosting while utilizing existing GCP/Firebase infrastructure.

## Risks / Trade-offs

- **[Risk] High volume of project text causing visual clutter on mobile.**
  → *Mitigation:* Compact card layout with collapsible/expandable sections and a hybrid route separating summary highlights (`/`) from the full catalog (`/projects`).
- **[Risk] PDF download link breakage if path changes.**
  → *Mitigation:* Bundle `Victor_Hodges_CV_2026.pdf` directly into `public/assets/` and reference via a constant in `app.config.ts`.
