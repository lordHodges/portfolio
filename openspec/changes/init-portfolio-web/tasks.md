## 1. Project Initialization & Styling Setup

- [x] 1.1 Scaffold Angular 22 standalone application with Tailwind CSS v4 in `/home/dev-lord/Workspace/Projects/portfolio`
- [x] 1.2 Configure Tailwind neo-brutalist theme tokens (`#1A1A1A` background, `3px 3px 0 0 #F7F7F7` hard shadows, hover transform offsets, and vibrant accent colors)
- [x] 1.3 Configure Google Fonts Poppins (weights 400, 600, 800) and base global styles in `src/styles.css`
- [x] 1.4 Configure `firebase.json` and `.firebaserc` with hosting target `portfolio` under project `cloudforge-market-9dbcf`

## 2. Data Models & Static Assets

- [x] 2.1 Bundle `Victor_Hodges_CV_2026.pdf` and technology/social SVG icons into `public/assets/`
- [x] 2.2 Create TypeScript models `Project` and `Skill` in `src/app/core/models/`
- [x] 2.3 Create `src/app/data/skills.data.ts` populated with structured categories (Backend, Frontend, Cloud & DevOps, Industrial & IoT, AI & SDD)
- [x] 2.4 Create `src/app/data/projects.data.ts` containing complete technical metadata for PTAH, SMFEC/Volkan, Unifrutti, Kozecha, CloudForge, Kimera, Auto-Transcriber, and Maturity Report

## 3. Core Layout & Routing

- [x] 3.1 Create sticky neo-brutalist `HeaderComponent` in `src/app/core/components/header/`
- [x] 3.2 Create `FooterComponent` in `src/app/core/components/footer/` with copyright and social links
- [x] 3.3 Configure `app.routes.ts` with routes for `/` (Landing) and `/projects` (Project Catalog)

## 4. Landing Page Feature (`/`)

- [x] 4.1 Build `HeroComponent` with profile avatar, Software Architect title, Talca location, contact buttons, and metric counters (10+ years, 15+ systems)
- [x] 4.2 Build `SkillsMatrixComponent` rendering categorized neo-brutalist skill badges with hover effects
- [x] 4.3 Build `FeaturedProjectsComponent` showing top 4 highlight projects with tags and a link to `/projects`
- [x] 4.4 Build `CvDownloadSectionComponent` providing direct single-click download of `Victor_Hodges_CV_2026.pdf`
- [x] 4.5 Build `ContactSectionComponent` with direct action buttons (Email `mailto:`, Phone/WhatsApp, LinkedIn, GitHub)
- [x] 4.6 Assemble `LandingComponent` integrating all sections

## 5. Project Catalog Feature (`/projects`)

- [x] 5.1 Build `CategoryFilterComponent` powered by Angular Signals for real-time category filtering (Todos, Industrial & IoT, Cloud & Serverless, AI & ML, Open Source & Desktop)
- [x] 5.2 Build `ProjectCardComponent` presenting full technical architecture details, stack badges, and achievements
- [x] 5.3 Assemble `ProjectsCatalogComponent` with navigation back to `/`

## 6. Build Validation & Deployment Verification

- [x] 6.1 Execute `npm run build` and ensure error-free compilation and asset bundling
- [x] 6.2 Verify local responsiveness, interactive neo-brutalist hover states, and PDF download functionality
- [x] 6.3 Verify Firebase Hosting deployment scripts in `package.json`
