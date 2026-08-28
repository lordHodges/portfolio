import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="neo-card bg-[#1E1E1E] p-6 flex flex-col gap-4 relative overflow-hidden group">
      <!-- Top Accent Bar -->
      <div 
        class="absolute top-0 left-0 right-0 h-1"
        [style.background-color]="project().accentColor">
      </div>

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pt-1">
        <div>
          <h3 class="text-xl sm:text-2xl font-black text-[#F7F7F7] tracking-tight group-hover:text-[#3EB0F9] transition-colors">
            {{ project().title }}
          </h3>
          <div class="text-xs font-mono text-[#3EB0F9] mt-0.5">
            {{ project().tagline }}
          </div>
        </div>

        <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <span class="neo-badge bg-[#242424] px-2 py-0.5 text-xs font-medium" [style.color]="project().accentColor">
            {{ project().companyOrContext }}
          </span>
          <span class="text-[11px] font-mono text-[#F7F7F7]/60">
            {{ project().period }}
          </span>
        </div>
      </div>

      <!-- Subtitle / Executive Summary -->
      <p class="text-sm text-[#F7F7F7]/90 leading-relaxed">
        {{ project().summary }}
      </p>

      <!-- Architecture Highlights Box -->
      <div class="bg-[#141414] border border-[#F7F7F7]/20 p-4 flex flex-col gap-2">
        <div class="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA61E] flex items-center gap-1.5">
          <span>🏛️</span>
          <span>Aspectos Arquitectónicos Clave</span>
        </div>
        <ul class="text-xs text-[#F7F7F7]/80 space-y-1.5 list-disc list-inside">
          @for (highlight of project().architectureHighlights; track highlight) {
            <li class="leading-relaxed">{{ highlight }}</li>
          }
        </ul>
      </div>

      <!-- Optional Services Table (e.g. Unifrutti) -->
      @if (project().servicesTable && project().servicesTable!.length > 0) {
        <div class="bg-[#141414] border border-[#F7F7F7]/20 p-3 overflow-x-auto">
          <div class="text-xs font-mono font-bold uppercase tracking-wider text-[#3EB0F9] mb-2">
            ⚙️ Ecosistema de Microservicios Integrados
          </div>
          <table class="w-full text-left text-xs font-mono">
            <thead>
              <tr class="border-b border-[#F7F7F7]/20 text-[#F7F7F7]/60">
                <th class="pb-1 pr-3">Servicio</th>
                <th class="pb-1">Responsabilidad</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#F7F7F7]/10">
              @for (svc of project().servicesTable; track svc.name) {
                <tr>
                  <td class="py-1 pr-3 text-[#3EB0F9] font-bold">{{ svc.name }}</td>
                  <td class="py-1 text-[#F7F7F7]/80">{{ svc.role }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      <!-- Metrics or Achievements -->
      @if (project().metricsOrAchievements && project().metricsOrAchievements!.length > 0) {
        <div class="flex flex-col gap-1 text-xs">
          <span class="font-mono font-bold text-[#00AA47]">✓ Impacto & Logros:</span>
          <div class="flex flex-wrap gap-2">
            @for (metric of project().metricsOrAchievements; track metric) {
              <span class="bg-[#242424] border border-[#00AA47]/40 text-[#F7F7F7]/90 px-2 py-1 text-xs">
                {{ metric }}
              </span>
            }
          </div>
        </div>
      }

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-1.5 pt-2 border-t border-[#F7F7F7]/10">
        @for (tech of project().techStack; track tech) {
          <span class="neo-badge bg-[#242424] text-[#F7F7F7] px-2 py-0.5 text-xs hover:border-[#3EB0F9] transition-colors">
            {{ tech }}
          </span>
        }
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
