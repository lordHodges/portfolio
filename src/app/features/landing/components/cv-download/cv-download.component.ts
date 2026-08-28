import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-download',
  standalone: true,
  template: `
    <section class="max-w-2xl mx-auto px-4 py-8">
      <div class="neo-card bg-[#242424] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#FFA61E]">
        <div class="flex flex-col gap-2 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 justify-center sm:justify-start">
            <span class="bg-[#FFA61E] text-[#1A1A1A] font-black text-xs px-2 py-0.5 uppercase tracking-wider font-mono">
              Documento Oficial
            </span>
            <span class="text-xs text-[#F7F7F7]/60 font-mono">Actualizado 2026</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-[#F7F7F7] tracking-tight">
            Curriculum Vitae Profesional
          </h2>
          <p class="text-xs sm:text-sm text-[#F7F7F7]/80 max-w-md">
            Historial laboral completo, certificaciones, arquitectura de microservicios e integraciones industriales.
          </p>
        </div>

        <a 
          href="/assets/Victor_Hodges_CV_2026.pdf" 
          download="Victor_Hodges_CV_2026.pdf"
          class="neo-btn bg-[#FFA61E] hover:bg-[#FFB84D] text-[#1A1A1A] px-6 py-4 text-sm font-black flex items-center gap-2.5 whitespace-nowrap shadow-[4px_4px_0px_0px_#F7F7F7]">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Descargar PDF (270 KB)
        </a>
      </div>
    </section>
  `
})
export class CvDownloadSectionComponent {}
