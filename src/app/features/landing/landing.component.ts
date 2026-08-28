import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsMatrixComponent } from './components/skills-matrix/skills-matrix.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { CvDownloadSectionComponent } from './components/cv-download/cv-download.component';
import { ContactSectionComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsMatrixComponent,
    FeaturedProjectsComponent,
    CvDownloadSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <div class="flex flex-col gap-2">
      <app-hero />
      <app-skills-matrix />
      <app-featured-projects />
      <app-cv-download />
      <app-contact-section />
    </div>
  `
})
export class LandingComponent {}
