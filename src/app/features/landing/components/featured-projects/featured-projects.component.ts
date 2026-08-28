import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../../data/projects.data';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="max-w-2xl mx-auto px-4 py-8">
      <div class="flex items-center justify-between gap-3 mb-6">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-black uppercase tracking-tight text-[#F7F7F7]">
            Proyectos Destacados
          </h2>
        </div>
        <a 
          routerLink="/projects" 
          class="text-xs font-bold text-[#3EB0F9] hover:underline flex items-center gap-1 font-mono">
          Ver todos ({{ allProjectsCount }}) →
        </a>
      </div>

      <div class="flex flex-col gap-6">
        @for (project of featuredProjects; track project.id) {
          <article class="neo-card bg-[#1E1E1E] p-5 flex flex-col gap-3 relative group">
            <!-- Header row -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 class="text-lg sm:text-xl font-black tracking-tight text-[#F7F7F7] group-hover:text-[#3EB0F9] transition-colors">
                {{ project.title }}
              </h3>
              <span class="neo-badge bg-[#242424] px-2 py-0.5 text-[11px] self-start sm:self-auto" [style.color]="project.accentColor">
                {{ project.companyOrContext }}
              </span>
            </div>

            <!-- Tagline -->
            <div class="text-xs font-mono text-[#3EB0F9]">
              {{ project.tagline }}
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-[#F7F7F7]/80 leading-relaxed">
              {{ project.summary }}
            </p>

            <!-- Highlights -->
            <ul class="text-xs text-[#F7F7F7]/70 space-y-1.5 list-disc list-inside bg-[#161616] p-3 border border-[#F7F7F7]/10">
              @for (point of project.architectureHighlights.slice(0, 2); track point) {
                <li class="leading-relaxed">{{ point }}</li>
              }
            </ul>

            <!-- Tech Stack Badges -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              @for (tech of project.techStack; track tech) {
                <span class="neo-badge bg-[#2A2A2A] text-[#F7F7F7]/90 px-2 py-0.5 text-[11px]">
                  {{ tech }}
                </span>
              }
            </div>
          </article>
        }
      </div>

      <!-- See All Projects CTA -->
      <div class="pt-6 text-center">
        <a 
          routerLink="/projects" 
          class="neo-btn bg-[#3EB0F9] text-[#1A1A1A] px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
          <span>Explorar Arquitecturas & Catálogo Completo</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  `
})
export class FeaturedProjectsComponent {
  featuredProjects = PROJECTS.filter(p => p.featured);
  allProjectsCount = PROJECTS.length;
}
