import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#F7F7F7]/20">
      <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <!-- Brand Logo -->
        <a routerLink="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-[#3EB0F9] border border-[#F7F7F7] shadow-[2px_2px_0px_0px_#F7F7F7] flex items-center justify-center font-mono font-bold text-[#1A1A1A] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all">
            VH
          </div>
          <span class="font-bold text-lg tracking-tight group-hover:text-[#3EB0F9] transition-colors">
            victor<span class="text-[#3EB0F9]">.hodges</span>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <a routerLink="/" routerLinkActive="text-[#3EB0F9] font-bold" [routerLinkActiveOptions]="{ exact: true }" class="hover:text-[#3EB0F9] transition-colors">
            Inicio
          </a>
          <a routerLink="/projects" routerLinkActive="text-[#3EB0F9] font-bold" class="hover:text-[#3EB0F9] transition-colors">
            Proyectos
          </a>
          <a href="#skills" class="hover:text-[#3EB0F9] transition-colors">
            Habilidades
          </a>
          <a href="#contacto" class="hover:text-[#3EB0F9] transition-colors">
            Contacto
          </a>
          <a 
            href="/assets/Victor_Hodges_CV_2026.pdf" 
            download="Victor_Hodges_CV_2026.pdf"
            class="neo-btn bg-[#FFA61E] text-[#1A1A1A] px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            CV (PDF)
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          (click)="mobileMenuOpen.set(!mobileMenuOpen())"
          class="md:hidden neo-btn bg-[#242424] p-1.5 text-[#F7F7F7]"
          aria-label="Abrir menú">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            @if (!mobileMenuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden border-t border-[#F7F7F7]/20 bg-[#1A1A1A] px-4 py-3 flex flex-col gap-3">
          <a (click)="mobileMenuOpen.set(false)" routerLink="/" class="text-sm font-medium hover:text-[#3EB0F9]">Inicio</a>
          <a (click)="mobileMenuOpen.set(false)" routerLink="/projects" class="text-sm font-medium hover:text-[#3EB0F9]">Proyectos</a>
          <a (click)="mobileMenuOpen.set(false)" href="#skills" class="text-sm font-medium hover:text-[#3EB0F9]">Habilidades</a>
          <a (click)="mobileMenuOpen.set(false)" href="#contacto" class="text-sm font-medium hover:text-[#3EB0F9]">Contacto</a>
          <a 
            href="/assets/Victor_Hodges_CV_2026.pdf" 
            download="Victor_Hodges_CV_2026.pdf"
            class="neo-btn bg-[#FFA61E] text-[#1A1A1A] px-3 py-2 text-center text-xs font-bold uppercase tracking-wider">
            Descargar CV en PDF
          </a>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
}
