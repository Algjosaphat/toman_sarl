<template>
  <section class="relative py-28 px-6 overflow-hidden">

    <!-- Fond avec couleurs Toman -->
    <div class="absolute inset-0 bg-[#22529C]"></div>
    <!-- Cercles décoratifs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F5C400]/10 blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"></div>

    <!-- Contenu -->
    <div class="relative z-10 max-w-2xl mx-auto text-center">

      <!-- Icône décorative -->
      <!-- <div class="flex justify-center mb-6">
        <div class="w-16 h-16 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 flex items-center justify-center">
          <span class="text-2xl">🍷</span>
        </div>
      </div> -->

      <!-- Ligne décorative -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C400]/60"></div>
        <span class="text-[#F5C400] text-xs tracking-[0.3em] uppercase font-medium">Membres exclusifs</span>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C400]/60"></div>
      </div>

      <!-- Titre -->
      <h2
        class="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight"
        style="font-family: 'Playfair Display', serif;"
      >
        Rejoignez notre
        <span class="text-[#F5C400] italic block">cave privée</span>
      </h2>

      <!-- Description -->
      <p class="text-white/65 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
        Recevez en avant-première nos sélections exclusives, les nouveautés et
        des offres réservées à nos membres.
      </p>

      <!-- Avantages -->
      <div class="flex flex-wrap justify-center gap-6 mb-12">
        <div
          v-for="benefit in benefits"
          :key="benefit.label"
          class="flex items-center gap-2 text-white/60 text-sm"
        >
          <span class="w-5 h-5 rounded-full bg-[#F5C400]/20 flex items-center justify-center text-[#F5C400] text-xs">✓</span>
          {{ benefit.label }}
        </div>
      </div>

      <!-- Formulaire -->
      <form
        class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5"
        @submit.prevent="handleSubmit"
      >
        <div class="relative flex-1">
          <svg
            class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
          </svg>
          <input
            v-model="email"
            type="email"
            placeholder="votre@email.com"
            required
            :disabled="submitted"
            class="w-full pl-11 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 focus:border-[#F5C400] outline-none text-white placeholder-white/30 text-sm backdrop-blur-sm transition-colors disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          :disabled="submitted"
          class="group flex items-center justify-center gap-2 px-7 py-4 bg-[#F5C400] hover:bg-[#e0b300] disabled:opacity-60 text-[#22529C] font-bold text-sm rounded-lg transition-all shadow-lg shadow-[#F5C400]/20 hover:shadow-[#F5C400]/30 hover:-translate-y-0.5 whitespace-nowrap"
        >
          <span>{{ submitted ? 'Inscrit !' : "S'inscrire" }}</span>
          <svg
            v-if="!submitted"
            class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span v-else>✓</span>
        </button>
      </form>

      <!-- Message succès -->
      <p
        v-if="submitted"
        class="text-green-400 text-sm flex items-center justify-center gap-2"
      >
        <span class="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center text-[10px]">✓</span>
        Merci ! Vous faites maintenant partie de notre cave privée.
      </p>

      <!-- Confidentialité -->
      <p v-else class="text-white/25 text-xs mt-4">
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
  { label: 'Offres exclusives membres' },
  { label: 'Nouveautés en avant-première' },
  { label: 'Conseils de notre sommelier' },
]

function handleSubmit() {
  if (!email.value.trim()) return
  // → connecte ton API newsletter ici
  console.log('Email inscrit :', email.value)
  submitted.value = true
  email.value = ''
}
</script>