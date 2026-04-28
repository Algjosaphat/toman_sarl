<template>
  <section class="relative py-28 lg:py-36 overflow-hidden bg-[#0d214a]">

    <!-- Hero image background -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/image1.jpeg" alt="" class="w-full h-full object-cover opacity-15"/>
      <div class="absolute inset-0 bg-gradient-to-br from-[#0d214a] via-[#16336a] to-[#22529C]"></div>
    </div>

    <!-- Decorative -->
    <div class="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#F5C400]/10 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#22529C]/30 blur-3xl pointer-events-none"></div>

    <!-- Concentric circles -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#F5C400]/8 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#F5C400]/8 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#F5C400]/8 pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-8 text-center">

      <!-- Crown icon -->
      <div class="flex justify-center mb-8">
        <div class="relative w-16 h-16 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 flex items-center justify-center backdrop-blur-md">
          <svg class="w-7 h-7 text-[#F5C400]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/>
          </svg>
          <div class="absolute -inset-1 rounded-full bg-[#F5C400]/20 blur-md -z-10 animate-pulse"></div>
        </div>
      </div>

      <!-- Eyebrow -->
      <div class="gold-divider mb-6 text-[#F5C400] text-[10px] tracking-[0.4em] uppercase font-semibold">
        Cercle Privé
      </div>

      <!-- Title -->
      <h2 class="font-display text-5xl md:text-6xl text-white mb-6 leading-[1.05]">
        Rejoignez notre
        <span class="block italic text-gradient-gold mt-2">cave privée.</span>
      </h2>

      <!-- Description -->
      <p class="text-white/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
        Recevez en avant-première nos arrivages exclusifs, des invitations aux dégustations privées et un conseil personnalisé de notre sommelier.
      </p>

      <!-- Benefits -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto">
        <div
          v-for="benefit in benefits"
          :key="benefit.label"
          class="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-sm"
        >
          <div class="w-10 h-10 rounded-full bg-[#F5C400]/20 border border-[#F5C400]/30 flex items-center justify-center text-[#F5C400]">
            <span v-html="benefit.icon"></span>
          </div>
          <span class="text-white text-sm font-medium">{{ benefit.label }}</span>
        </div>
      </div>

      <!-- Form -->
      <form
        class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5"
        @submit.prevent="handleSubmit"
      >
        <div class="relative flex-1">
          <svg class="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
          </svg>
          <input
            v-model="email"
            type="email"
            placeholder="votre@email.com"
            required
            :disabled="submitted"
            class="w-full pl-12 pr-4 py-4 rounded-sm bg-white/8 border border-white/15 focus:border-[#F5C400] outline-none text-white placeholder-white/35 text-sm backdrop-blur-md transition-colors disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          :disabled="submitted"
          class="btn-primary disabled:opacity-60 whitespace-nowrap"
        >
          <span>{{ submitted ? 'Bienvenue !' : "Devenir membre" }}</span>
          <svg
            v-if="!submitted"
            class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </button>
      </form>

      <!-- Status -->
      <p
        v-if="submitted"
        class="text-[#F5C400] text-sm flex items-center justify-center gap-2 animate-fade-in"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        Bienvenue dans le Cercle Privé. À très bientôt.
      </p>
      <p v-else class="text-white/40 text-xs">
        🔒 Aucun spam. Désinscription en un clic à tout moment.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const benefits = [
  { label: 'Offres exclusives',  icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>' },
  { label: 'Avant-premières',    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>' },
  { label: 'Conseil sommelier',  icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
]

function handleSubmit() {
  if (!email.value.trim()) return
  submitted.value = true
  email.value = ''
}
</script>
