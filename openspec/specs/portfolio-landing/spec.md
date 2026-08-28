# portfolio-landing Specification

## Purpose
Provides the primary landing page interface presenting the personal brand, executive summary, core technical capabilities, and direct contact channels for Software Architect Victor Hodges.

## Requirements

### Requirement: Dark Neo-Brutalist Visual Identity
The landing page SHALL render using a consistent dark neo-brutalist theme with background color `#1A1A1A`, high-contrast text `#F7F7F7`, solid `#F7F7F7` borders and drop-shadows with offset translation on hover, and vibrant accent color highlights (`#3EB0F9`, `#FFA61E`, `#FF5500`, `#00AA47`).

#### Scenario: Rendering default theme on load
- **WHEN** a user navigates to `/`
- **THEN** the application renders the dark neo-brutalist layout with centered container, bold Poppins headings, and hard shadow cards.

### Requirement: Hero Profile and Impact Stats
The system SHALL present Victor Hodges's identity, title (Software Architect), location (Talca, Chile), social links (LinkedIn, GitHub), direct contact links (Email, Phone/WhatsApp), and key impact metrics (10+ years experience, 15+ industrial & cloud platforms).

#### Scenario: Displaying hero details and contact links
- **WHEN** the visitor lands on the top of the homepage
- **THEN** the profile avatar, professional summary, social/contact links, and metric badges are visibly displayed.

### Requirement: Categorized Skills Matrix
The system SHALL display technical skills grouped into clear domain categories (Backend, Frontend, Cloud & DevOps, Industrial & IoT, AI & SDD) using neo-brutalist cards.

#### Scenario: Inspecting skill categories
- **WHEN** the visitor views the Skills section
- **THEN** cards displaying specific technologies (e.g. NestJS, .NET 8, Angular 22, PyTorch, Siemens PLC) are organized by category with interactive hover feedback.

### Requirement: Featured Project Highlights
The system SHALL display a curated highlight of top tier projects (such as PTAH, SMFEC/Volkan, Kozecha, and CloudForge) with tags and a direct call-to-action to explore all projects.

#### Scenario: Clicking explore all projects button
- **WHEN** the user clicks on the "Ver todos los proyectos" button in the featured section
- **THEN** the browser transitions to the `/projects` route.

### Requirement: Direct CV PDF Download
The system SHALL provide an accessible, prominent download button that triggers the immediate download of `Victor_Hodges_CV_2026.pdf`.

#### Scenario: Triggering CV download
- **WHEN** the user clicks on the "Descargar CV (PDF)" action button
- **THEN** the browser downloads the PDF file `Victor_Hodges_CV_2026.pdf` from the static assets.
