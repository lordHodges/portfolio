import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-[#F7F7F7]/20 bg-[#1A1A1A] py-12 px-4 mt-20 text-center">
      <div class="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <!-- Logo symbol -->
        <div class="w-10 h-10 bg-[#3EB0F9] border border-[#F7F7F7] shadow-[3px_3px_0px_0px_#F7F7F7] flex items-center justify-center font-mono font-black text-[#1A1A1A] text-lg">
          VH
        </div>

        <div class="text-sm text-[#F7F7F7]/80">
          © 2026 <span class="text-[#3EB0F9] font-bold">Victor Hodges</span> · Arquitecto de Software
        </div>

        <p class="text-xs text-[#F7F7F7]/60 max-w-md">
          Diseño e implementación de sistemas industriales de misión crítica, arquitecturas serverless y desarrollo asistido por agentes AI desde Talca, Chile.
        </p>

        <!-- Social / Contact Links -->
        <div class="flex items-center gap-4 pt-2">
          <a 
            href="https://github.com/lordHodges" 
            target="_blank" 
            rel="noopener noreferrer"
            class="neo-btn bg-[#242424] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] text-[#F7F7F7] p-2 text-xs"
            title="GitHub">
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/victor-andres-hodges-troncoso-3179002a3/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="neo-btn bg-[#242424] hover:bg-[#3EB0F9] hover:text-[#1A1A1A] text-[#F7F7F7] p-2 text-xs"
            title="LinkedIn">
            LinkedIn
          </a>
          <a 
            href="mailto:hodgestroncoso@outlook.com" 
            class="neo-btn bg-[#242424] hover:bg-[#FFA61E] hover:text-[#1A1A1A] text-[#F7F7F7] p-2 text-xs"
            title="Email">
            Email
          </a>
          <a 
            href="https://wa.me/56942151461" 
            target="_blank" 
            rel="noopener noreferrer"
            class="neo-btn bg-[#242424] hover:bg-[#00AA47] hover:text-[#1A1A1A] text-[#F7F7F7] p-2 text-xs"
            title="WhatsApp">
            WhatsApp
          </a>
          <a 
            href="/assets/Victor_Hodges_CV_2026.pdf" 
            download="Victor_Hodges_CV_2026.pdf"
            class="neo-btn bg-[#FFA61E] text-[#1A1A1A] p-2 text-xs font-bold"
            title="Descargar CV">
            CV PDF
          </a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
