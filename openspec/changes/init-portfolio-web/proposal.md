# Proposal
## Why

Victor Hodges requires a modern, high-impact personal portfolio website to showcase his profile as a Software Architect specializing in industrial systems, cloud-native architectures, and AI-augmented development (SDD & AI Agents). The website must provide recruiters and technical leaders with an interactive overview of his 10+ years of experience, key projects (PTAH, SMFEC/Volkan, Unifrutti, Kozecha, CloudForge, etc.), technical stack, and direct contact options, including direct download of his updated 2026 CV in PDF.

## What Changes

- Initialize an Angular 22 standalone project configured with Tailwind CSS v4 and a dark neo-brutalist theme inspired by `moure.dev` (`#1A1A1A` background, hard solid shadows `3px 3px 0 0 #F7F7F7`, translation on hover, and vibrant accent colors).
- Implement a hybrid routing architecture:
  - `/`: Main Landing Page with sticky navigation header, hero profile with contact links & impact metrics, categorized skills matrix, featured project showcases, direct CV PDF download, and direct contact buttons (Email, WhatsApp/Phone, LinkedIn, GitHub).
  - `/projects`: Deep-dive technical project catalog with category filters (Industrial & IoT, Cloud & Serverless, AI & ML, Open Source & Desktop) and rich project cards with architecture summaries, stacks, and key achievements.
- Integrate static asset management for serving `Victor_Hodges_CV_2026.pdf` and technology/social SVG icons.
- Configure Firebase Hosting deployment targets under the existing `cloudforge-market-9dbcf` Google Cloud / Firebase project with custom build and deploy scripts.

## Capabilities

### New Capabilities
- `portfolio-landing`: Core landing page with hero profile, impact metrics, categorized skills, featured projects, direct CV PDF download, and direct communication links.
- `portfolio-projects`: Comprehensive project catalog and technical deep-dive view with interactive category filtering and detailed architecture sheets.
- `portfolio-deploy`: Firebase Hosting target setup under `cloudforge-market-9dbcf` and automated Angular build/deploy pipeline.

### Modified Capabilities

None.

## Impact

- Creates the initial web application codebase inside `/home/dev-lord/Workspace/Projects/portfolio`.
- Adds Angular 22, Tailwind CSS v4, TypeScript, and routing dependencies.
- Configures `firebase.json` and `.firebaserc` for multi-site hosting deployment under `cloudforge-market-9dbcf`.
- Integrates static PDF artifact `Victor_Hodges_CV_2026.pdf` into `public/assets/`.
