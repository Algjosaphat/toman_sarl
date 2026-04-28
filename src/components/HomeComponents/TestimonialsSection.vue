<template>
  <section class="relative py-24 lg:py-32 bg-[#fbf8f3] overflow-hidden">

    <!-- Decorative quote mark -->
    <div class="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[20rem] text-[#22529C]/5 leading-none pointer-events-none select-none">"</div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="eyebrow">On en parle</span>
        <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2 mb-5">
          La parole à
          <span class="italic text-[#22529C]">nos clients.</span>
        </h2>
        <div class="flex items-center justify-center gap-3 text-sm">
          <div class="flex gap-0.5">
            <span v-for="i in 5" :key="i" class="text-[#F5C400] text-lg">★</span>
          </div>
          <span class="text-stone-600 font-semibold">4.9 / 5</span>
          <span class="text-stone-400">·</span>
          <span class="text-stone-500">320+ avis vérifiés</span>
        </div>
      </div>

      <!-- Testimonials grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="t in testimonials"
          :key="t.author"
          class="relative group bg-white border border-stone-200/80 hover:border-[#F5C400]/40 rounded-sm p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#22529C]/10"
        >
          <!-- Quote icon -->
          <div class="absolute top-6 right-6 text-[#F5C400]/30 group-hover:text-[#F5C400] transition-colors">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 7h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2v3c0 1.1-.9 2-2 2H4v2h3c2.21 0 4-1.79 4-4V9c0-1.1-.9-2-2-2zm10 0h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2v3c0 1.1-.9 2-2 2h-3v2h3c2.21 0 4-1.79 4-4V9c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-0.5 mb-5">
            <span v-for="i in 5" :key="i" class="text-[#F5C400] text-sm">★</span>
          </div>

          <!-- Content -->
          <p class="text-stone-700 leading-relaxed mb-6 text-base">
            "{{ t.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-5 border-t border-stone-100">
            <div class="w-11 h-11 rounded-full bg-gradient-to-br from-[#22529C] to-[#16336a] flex items-center justify-center text-white font-display text-lg shrink-0">
              {{ t.author.charAt(0) }}
            </div>
            <div>
              <p class="font-medium text-[#16336a]">{{ t.author }}</p>
              <p class="text-xs text-stone-500">{{ t.role }}</p>
            </div>
          </div>
        </article>
      </div>

      <!-- Press logos -->
      <div class="mt-20 pt-14 border-t border-stone-200">
        <p class="text-center text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-8 font-semibold">Recommandé par</p>
        <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          <span v-for="press in pressLogos" :key="press" class="font-display text-2xl lg:text-3xl text-stone-500 italic">
            {{ press }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    author: 'Aïcha Konaté',
    role: 'Cliente fidèle · Cotonou',
    quote: 'Un conseil d\'orfèvre, une sélection pointue, et une livraison toujours impeccable. Toman est devenu mon caviste de référence.',
  },
  {
    author: 'Jean-Baptiste Allou',
    role: 'Restaurateur · Cotonou',
    quote: 'Pour notre carte des vins, je ne fais confiance qu\'à eux. Disponibilité, expertise, et des trouvailles que personne d\'autre n\'a au Bénin.',
  },
  {
    author: 'Marie-Odile Tchakpa',
    role: 'Amatrice · Calavi',
    quote: 'Leur sélection sans alcool est une vraie révélation. Enfin du choix, et avec une qualité qui n\'a rien à envier aux vins classiques.',
  },
]

const pressLogos = ['La Nation', 'Bénin Web TV', 'Le Matin', 'Festival du Goût']
</script>
