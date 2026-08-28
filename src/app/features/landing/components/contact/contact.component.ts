import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <section id="contacto" class="max-w-2xl mx-auto px-4 py-8">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl font-black uppercase tracking-tight text-[#F7F7F7]">
          Contacto Directo
        </h2>
        <div class="h-[2px] flex-1 bg-[#F7F7F7]/20"></div>
      </div>

      <p class="text-xs sm:text-sm text-[#F7F7F7]/80 mb-6 leading-relaxed">
        ¿Tienes un desafío técnico en sistemas industriales, arquitectura cloud o desarrollo asistido por IA? Hablemos directamente por el canal que prefieras:
      </p>

      <div class="flex flex-col gap-3.5">
        <!-- Email Button -->
        <a 
          href="mailto:hodgestroncoso@outlook.com"
          class="neo-btn bg-[#3EB0F9] text-[#1A1A1A] p-4 flex items-center justify-between text-left group">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#1A1A1A] text-[#3EB0F9] border border-[#1A1A1A] flex items-center justify-center font-bold text-lg">
              ✉️
            </div>
            <div>
              <div class="font-extrabold text-sm sm:text-base">Email Profesional</div>
              <div class="text-xs font-mono opacity-90">hodgestroncoso&#64;outlook.com</div>
            </div>
          </div>
          <span class="text-xs font-bold font-mono opacity-70 group-hover:opacity-100 pr-2">Enviar Correo →</span>
        </a>

        <!-- WhatsApp / Phone Button -->
        <a 
          href="https://wa.me/56942151461" 
          target="_blank" 
          rel="noopener noreferrer"
          class="neo-btn bg-[#00AA47] text-[#1A1A1A] p-4 flex items-center justify-between text-left group">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#1A1A1A] text-[#00AA47] border border-[#1A1A1A] flex items-center justify-center font-bold text-lg">
              📱
            </div>
            <div>
              <div class="font-extrabold text-sm sm:text-base">WhatsApp Directo</div>
              <div class="text-xs font-mono opacity-90">+56 9 4215 1461</div>
            </div>
          </div>
          <span class="text-xs font-bold font-mono opacity-70 group-hover:opacity-100 pr-2">Chatear →</span>
        </a>

        <!-- LinkedIn Button -->
        <a 
          href="https://www.linkedin.com/in/victor-andres-hodges-troncoso-3179002a3/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="neo-btn bg-[#FFA61E] text-[#1A1A1A] p-4 flex items-center justify-between text-left group">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#1A1A1A] text-[#FFA61E] border border-[#1A1A1A] flex items-center justify-center font-bold text-lg">
              💼
            </div>
            <div>
              <div class="font-extrabold text-sm sm:text-base">LinkedIn Profile</div>
              <div class="text-xs font-mono opacity-90">Conectar en LinkedIn</div>
            </div>
          </div>
          <span class="text-xs font-bold font-mono opacity-70 group-hover:opacity-100 pr-2">Ver Perfil →</span>
        </a>

        <!-- GitHub Button -->
        <a 
          href="https://github.com/lordHodges" 
          target="_blank" 
          rel="noopener noreferrer"
          class="neo-btn bg-[#242424] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] text-[#F7F7F7] p-4 flex items-center justify-between text-left group">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#1A1A1A] text-[#F7F7F7] border border-[#F7F7F7] flex items-center justify-center font-bold text-lg">
              🐙
            </div>
            <div>
              <div class="font-extrabold text-sm sm:text-base">GitHub Repositories</div>
              <div class="text-xs font-mono opacity-90">github.com/lordHodges</div>
            </div>
          </div>
          <span class="text-xs font-bold font-mono opacity-70 group-hover:opacity-100 pr-2">Explorar Código →</span>
        </a>
      </div>
    </section>
  `
})
export class ContactSectionComponent {}
