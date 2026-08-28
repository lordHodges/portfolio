import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../../data/skills.data';

@Component({
  selector: 'app-skills-matrix',
  standalone: true,
  template: `
    <section id="skills" class="max-w-2xl mx-auto px-4 py-8">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl font-black uppercase tracking-tight text-[#F7F7F7]">
          Habilidades & Stack
        </h2>
        <div class="h-[2px] flex-1 bg-[#F7F7F7]/20"></div>
      </div>

      <div class="flex flex-col gap-5">
        @for (cat of categories; track cat.id) {
          <div 
            class="neo-card p-5 bg-[#1E1E1E] flex flex-col gap-3 relative overflow-hidden group">
            <!-- Left Accent Indicator Bar -->
            <div 
              class="absolute top-0 left-0 bottom-0 w-1.5"
              [style.background-color]="cat.accentColor">
            </div>

            <!-- Category Header -->
            <div class="flex items-start justify-between gap-2 pl-2">
              <div>
                <h3 class="font-bold text-lg text-[#F7F7F7] flex items-center gap-2">
                  {{ cat.title }}
                </h3>
                <p class="text-xs text-[#F7F7F7]/70 mt-1 leading-relaxed">
                  {{ cat.description }}
                </p>
              </div>
            </div>

            <!-- Skills Badges Grid -->
            <div class="flex flex-wrap gap-2 pt-2 pl-2">
              @for (skill of cat.skills; track skill.name) {
                <span 
                  class="neo-badge px-2.5 py-1 text-xs font-mono transition-all duration-100 flex items-center gap-1.5 cursor-default select-none"
                  [class.bg-[#2A2A2A]]="!skill.highlight"
                  [class.bg-[#333333]]="skill.highlight"
                  [class.text-[#F7F7F7]]="true"
                  [style.border-color]="skill.highlight ? cat.accentColor : 'rgba(247, 247, 247, 0.3)'">
                  @if (skill.highlight) {
                    <span class="w-1.5 h-1.5 rounded-full" [style.background-color]="cat.accentColor"></span>
                  }
                  {{ skill.name }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class SkillsMatrixComponent {
  categories = SKILL_CATEGORIES;
}
