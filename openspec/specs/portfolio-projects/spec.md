# portfolio-projects Specification

## Purpose
Provides a comprehensive technical project showcase enabling visitors and recruiters to filter, browse, and inspect architecture decisions, technical stacks, and impact of all key enterprise and personal projects.

## Requirements

### Requirement: Interactive Category Filtering
The system SHALL provide interactive category filters (e.g., "Todos", "Industrial & IoT", "Cloud & Serverless", "AI & Machine Learning", "Open Source & Desktop") allowing users to narrow down the project list.

#### Scenario: Filtering projects by category
- **WHEN** the user selects the "AI & Machine Learning" category filter
- **THEN** the view updates instantly to display only projects containing AI/ML capabilities (such as Kozecha and Auto-Transcriber).

#### Scenario: Resetting category filter to all
- **WHEN** the user selects the "Todos" filter
- **THEN** all registered enterprise and personal projects are visible.

### Requirement: Detailed Technical Project Cards
The system SHALL render comprehensive project cards displaying the project name, client/organization, status, technical description, architecture highlights, tech stack badges, and relevant achievements.

#### Scenario: Viewing a project technical sheet
- **WHEN** a visitor views a project card (e.g., PTAH or Unifrutti)
- **THEN** the card presents the hardware/cloud integrations, protocols, frameworks used, and engineering responsibilities.

### Requirement: Navigation Header and Return to Home
The system SHALL display a consistent top header with navigation enabling seamless movement between `/` (Home) and `/projects`.

#### Scenario: Navigating back to home
- **WHEN** the user clicks the home brand link or "Volver al Inicio" action from the `/projects` page
- **THEN** the router smoothly navigates back to the `/` route.
