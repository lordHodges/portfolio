import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent),
    title: 'Victor Hodges | Arquitecto de Software'
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects-catalog.component').then(m => m.ProjectsCatalogComponent),
    title: 'Proyectos & Arquitectura | Victor Hodges'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
