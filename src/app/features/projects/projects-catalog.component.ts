import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCategory } from '../../core/models/project.model';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-projects-catalog',
  standalone: true,
  imports: [RouterLink, CategoryFilterComponent, ProjectCardComponent],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col gap-3">
        <a 
          routerLink="/" 
          class="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#3EB0F9] hover:underline self-start">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver al Inicio
        </a>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F7F7F7]/20 pb-4">
          <div>
            <h1 class="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F7F7F7]">
              Proyectos & Arquitecturas
            </h1>
            <p class="text-xs sm:text-sm text-[#F7F7F7]/70 mt-1">
              Registro técnico de plataformas de producción, ecosistemas industriales y proyectos personales.
            </p>
          </div>

          <span class="neo-badge bg-[#242424] text-[#FFA61E] px-3 py-1 text-xs self-start sm:self-auto font-mono">
            {{ filteredProjects().length }} de {{ allProjects.length }} proyectos
          </span>
        </div>
      </div>

      <!-- Filters Bar -->
      <app-category-filter 
        [selectedCategory]="currentCategory()"
        (categoryChanged)="onCategoryChanged($event)" />

      <!-- Projects Grid/List -->
      <div class="flex flex-col gap-6">
        @for (project of filteredProjects(); track project.id) {
          <app-project-card [project]="project" />
        } @empty {
          <div class="neo-card bg-[#1E1E1E] p-8 text-center flex flex-col items-center gap-3">
            <div class="text-3xl">🔍</div>
            <h3 class="font-bold text-base text-[#F7F7F7]">No se encontraron proyectos en esta categoría</h3>
            <p class="text-xs text-[#F7F7F7]/60">Intenta seleccionando otra categoría o restablece a "Todos".</p>
            <button 
              (click)="onCategoryChanged('all')"
              class="neo-btn bg-[#3EB0F9] text-[#1A1A1A] px-4 py-2 text-xs font-bold mt-2">
              Ver Todos los Proyectos
            </button>
          </div>
        }
      </div>

      <!-- Bottom Navigation Back -->
      <div class="pt-6 border-t border-[#F7F7F7]/20 text-center">
        <a 
          routerLink="/" 
          class="neo-btn bg-[#242424] text-[#F7F7F7] hover:bg-[#3EB0F9] hover:text-[#1A1A1A] px-6 py-3 text-xs font-bold inline-flex items-center gap-2 font-mono">
          ← Volver al Perfil Principal
        </a>
      </div>
    </div>
  `
})
export class ProjectsCatalogComponent {
  allProjects = PROJECTS;
  currentCategory = signal<ProjectCategory>('all');

  filteredProjects = computed(() => {
    const category = this.currentCategory();
    if (category === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category.includes(category));
  });

  onCategoryChanged(category: ProjectCategory) {
    this.currentCategory.set(category);
  }
}
