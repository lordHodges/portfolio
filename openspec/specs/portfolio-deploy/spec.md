# portfolio-deploy Specification

## Purpose
Defines the deployment and hosting configuration for serving the portfolio SPA statically on Firebase Hosting under the shared CloudForge Google Cloud project.

## Requirements

### Requirement: Firebase Hosting Multi-target Configuration
The project SHALL define `firebase.json` and `.firebaserc` configuring a dedicated hosting target within the `cloudforge-market-9dbcf` Firebase project, with SPA fallback rewrites to `/index.html`.

#### Scenario: Routing arbitrary SPA paths
- **WHEN** a user directly accesses `/projects` or reloads an internal route
- **THEN** Firebase Hosting serves `/index.html` with HTTP 200 and allows Angular client-side routing to handle the view.

### Requirement: Static Asset Serving and PDF Distribution
The build output SHALL bundle static assets including favicon, SVG icons, and `Victor_Hodges_CV_2026.pdf` in the distribution directory for direct public delivery.

#### Scenario: Requesting the CV PDF asset
- **WHEN** an HTTP request is made to `/assets/Victor_Hodges_CV_2026.pdf`
- **THEN** the server returns the PDF binary file with correct Content-Type headers.

### Requirement: Build and Deploy Automation Scripts
The `package.json` file SHALL provide standardized `npm run build` and `npm run deploy` scripts executing production compilation and `firebase-tools` hosting deployment.

#### Scenario: Executing deployment command
- **WHEN** `npm run deploy` is executed
- **THEN** the project compiles with production optimization and publishes to the configured Firebase Hosting site target.
