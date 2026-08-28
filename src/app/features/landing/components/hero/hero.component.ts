import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="max-w-2xl mx-auto px-4 pt-10 pb-6 flex flex-col gap-6">
      <!-- Profile Header Row -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <!-- Avatar Neo Card -->
        <div class="relative group">
          <div class="w-24 h-24 sm:w-28 sm:h-28 bg-[#242424] border-2 border-[#F7F7F7] shadow-[4px_4px_0px_0px_#F7F7F7] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_#F7F7F7] transition-all flex items-center justify-center font-black text-3xl sm:text-4xl text-[#3EB0F9] font-mono select-none">
            VH
          </div>
          <div class="absolute -bottom-2 -right-2 bg-[#00AA47] border border-[#F7F7F7] text-[#1A1A1A] text-[10px] font-bold px-1.5 py-0.5 shadow-[2px_2px_0px_0px_#F7F7F7] uppercase tracking-wider">
            Active
          </div>
        </div>

        <!-- Identity & Role -->
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F7F7F7]">
            Victor Hodges
          </h1>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[#3EB0F9] font-bold text-base sm:text-lg">
              Arquitecto de Software
            </span>
            <span class="text-xs bg-[#242424] border border-[#F7F7F7]/40 px-2 py-0.5 font-mono text-[#F7F7F7]/80">
              📍 Talca, Chile
            </span>
          </div>

          <!-- Quick Social / Contact Links -->
          <div class="flex items-center gap-2 pt-2 flex-wrap">
            <a 
              href="https://github.com/lordHodges" 
              target="_blank" 
              rel="noopener noreferrer"
              class="neo-btn bg-[#242424] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] text-xs px-2.5 py-1 text-[#F7F7F7]"
              title="GitHub">
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/victor-andres-hodges-troncoso-3179002a3/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="neo-btn bg-[#242424] hover:bg-[#3EB0F9] hover:text-[#1A1A1A] text-xs px-2.5 py-1 text-[#F7F7F7]"
              title="LinkedIn">
              LinkedIn
            </a>
            <a 
              href="mailto:hodgestroncoso@outlook.com"
              class="neo-btn bg-[#242424] hover:bg-[#FFA61E] hover:text-[#1A1A1A] text-xs px-2.5 py-1 text-[#F7F7F7]"
              title="Email">
              Email
            </a>
            <a 
              href="https://wa.me/56942151461" 
              target="_blank" 
              rel="noopener noreferrer"
              class="neo-btn bg-[#242424] hover:bg-[#00AA47] hover:text-[#1A1A1A] text-xs px-2.5 py-1 text-[#F7F7F7]"
              title="WhatsApp">
              +56 9 4215 1461
            </a>
          </div>
        </div>
      </div>

      <!-- Impact Metrics Bar -->
      <div class="neo-card bg-[#242424] p-4 flex items-center justify-around text-center divide-x divide-[#F7F7F7]/20">
        <div class="px-2 flex-1">
          <div class="text-2xl sm:text-3xl font-extrabold text-[#3EB0F9] font-mono">10+</div>
          <div class="text-[11px] sm:text-xs text-[#F7F7F7]/80 font-medium">Años de Exp.</div>
        </div>
        <div class="px-2 flex-1">
          <div class="text-2xl sm:text-3xl font-extrabold text-[#FFA61E] font-mono">15+</div>
          <div class="text-[11px] sm:text-xs text-[#F7F7F7]/80 font-medium">Sistemas Industriales</div>
        </div>
        <div class="px-2 flex-1">
          <div class="text-2xl sm:text-3xl font-extrabold text-[#00AA47] font-mono">SDD</div>
          <div class="text-[11px] sm:text-xs text-[#F7F7F7]/80 font-medium">AI Augmented Dev</div>
        </div>
      </div>

      <!-- Bio / Executive Pitch -->
      <div class="text-sm sm:text-base text-[#F7F7F7]/90 leading-relaxed space-y-3">
        <p>
          Especializado en diseñar e implementar plataformas de software escalables para industrias reguladas: manufactura, salud, agricultura y logística. Mi trayectoria une la automatización industrial profunda (PLC Siemens, Modbus, RFID, BMS) con arquitecturas cloud-native modernas (NestJS, .NET 8, Angular, GCP y AWS).
        </p>
        <p>
          Pionero en la adopción de flujos de <strong>Spec-Driven Development (SDD)</strong> impulsados por agentes autónomos de Inteligencia Artificial para acelerar el ciclo de ingeniería manteniendo estándares de calidad rigurosos.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <a 
          href="/assets/Victor_Hodges_CV_2026.pdf" 
          download="Victor_Hodges_CV_2026.pdf"
          class="neo-btn bg-[#FFA61E] text-[#1A1A1A] px-5 py-3 text-sm font-bold flex items-center justify-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Descargar CV Actualizado (PDF)
        </a>
        <a 
          routerLink="/projects" 
          class="neo-btn bg-[#3EB0F9] text-[#1A1A1A] px-5 py-3 text-sm font-bold flex items-center justify-center gap-2">
          Explorar Proyectos & Arquitectura →
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {}
