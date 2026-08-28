import { Component, input, output } from '@angular/core';
import { ProjectCategory } from '../../../../core/models/project.model';

export interface FilterOption {
  id: ProjectCategory;
  label: string;
  count?: number;
}

@Component({
  selector: 'app-category-filter',
  standalone: true,
  template: `
    <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      @for (filter of filters; track filter.id) {
        <button 
          (click)="categoryChanged.emit(filter.id)"
          class="neo-btn text-xs px-3.5 py-1.5 font-bold uppercase tracking-wider font-mono whitespace-nowrap transition-all"
          [class.bg-[#3EB0F9]]="selectedCategory() === filter.id"
          [class.text-[#1A1A1A]]="selectedCategory() === filter.id"
          [class.bg-[#242424]]="selectedCategory() !== filter.id"
          [class.text-[#F7F7F7]]="selectedCategory() !== filter.id"
          [class.shadow-[3px_3px_0px_0px_#F7F7F7]]="selectedCategory() !== filter.id"
          [class.shadow-[1px_1px_0px_0px_#F7F7F7]]="selectedCategory() === filter.id">
          {{ filter.label }}
        </button>
      }
    </div>
  `
})
export class CategoryFilterComponent {
  selectedCategory = input.required<ProjectCategory>();
  categoryChanged = output<ProjectCategory>();

  filters: FilterOption[] = [
    { id: 'all', label: 'Todos' },
    { id: 'industrial', label: 'Industrial & IoT' },
    { id: 'cloud', label: 'Cloud & Serverless' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'desktop', label: 'Open Source & Desktop' }
  ];
}
