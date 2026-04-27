<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">

    <!-- Image de fond -->
    <div class="absolute inset-0 z-0">
      <img
        src="@/assets/hero.jpeg"
        alt="Cave à vins"
        class="w-full h-full object-cover object-center"
      />
      <!-- Overlay dégradé bleu Toman -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#22529C]/95 via-[#22529C]/80 to-[#22529C]/30"></div>
      <!-- Overlay sombre en bas pour lisibilité -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 w-full max-w-screen-xl mx-auto px-10 md:px-16 py-24 flex items-center justify-between gap-16">

      <!-- Texte gauche -->
      <div class="flex flex-col max-w-2xl">

        <!-- Badge animé -->
        <div class="flex items-center gap-2 self-start mb-8">
          <span class="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse"></span>
          <span class="px-4 py-1.5 rounded-full border border-[#F5C400]/60 text-[#F5C400] text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-sm bg-white/5">
            Nouveauté 2025
          </span>
        </div>

        <!-- Titre -->
        <h1 class="font-serif text-5xl xl:text-7xl text-white leading-[1.05] mb-6 drop-shadow-lg" style="font-family: 'Playfair Display', serif;">
          L'art du vin,
          <span class="block text-[#F5C400] italic">sans compromis</span>
        </h1>

        <!-- Ligne décorative -->
        <div class="flex items-center gap-4 mb-8">
          <div class="h-px w-12 bg-[#F5C400]"></div>
          <p class="text-white/70 text-sm tracking-widest uppercase">Toman SARL · Cotonou, Bénin</p>
        </div>

        <!-- Description -->
        <p class="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
          Découvrez notre sélection de vins d'exception, avec et sans alcool,
          soigneusement choisis pour tous les palais au Bénin.
        </p>

        <!-- Boutons -->
        <div class="flex gap-4 flex-wrap mb-14">
          <RouterLink
            to="/shop"
            class="group flex items-center gap-3 px-8 py-4 bg-[#F5C400] hover:bg-[#e0b300] text-[#22529C] rounded font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#F5C400]/20 hover:shadow-[#F5C400]/40 hover:-translate-y-0.5"
          >
            Explorer la cave
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>
          <RouterLink
            to="/about"
            class="flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white/70 backdrop-blur-sm bg-white/5 hover:bg-white/10 text-white rounded font-medium text-sm tracking-wide transition-all"
          >
            Notre histoire
          </RouterLink>
        </div>

        <!-- Stats -->
        <div class="flex gap-8">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="font-serif text-3xl text-[#F5C400] font-bold" style="font-family: 'Playfair Display', serif;">
              {{ stat.value }}
            </span>
            <span class="text-white/50 text-xs uppercase tracking-widest mt-0.5">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Carte produit flottante — desktop uniquement -->
      <div class="hidden xl:flex flex-col gap-4 flex-shrink-0">

        <!-- Card vin vedette -->
        <div class="w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs text-[#F5C400] uppercase tracking-widest font-medium">Coup de cœur</span>
            <span class="flex gap-0.5">
              <span v-for="i in 5" :key="i" class="text-[#F5C400] text-xs">★</span>
            </span>
          </div>
          <div class="w-full h-40 bg-white/10 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
            <img
              src="@/assets/imagehero.jpeg"
              alt="Vin vedette"
              class="w-full h-full object-cover rounded-xl opacity-80"
            />
          </div>
          <h3 class="font-serif text-white text-lg mb-1" style="font-family: 'Playfair Display', serif;">
            Sélection du Mois
          </h3>
          <p class="text-white/50 text-xs mb-4">Cave Toman · Cotonou</p>
          <div class="flex items-center justify-between">
            <!-- <span class="text-[#F5C400] font-bold text-xl">5 900 FCFA</span> -->
            <button class="px-4 py-2 bg-[#F5C400] hover:bg-[#e0b300] text-[#22529C] text-xs font-bold rounded-lg transition-colors">
              + Panier
            </button>
          </div>
        </div>

        <!-- Badge livraison -->
        <div class="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
          <!-- <span class="text-2xl">🚚</span> -->
          <div>
            <p class="text-white text-sm font-medium">Livraison rapide</p>
            <p class="text-white/50 text-xs">Partout à Cotonou</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicateur scroll -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
      <span class="text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
      <div class="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '200+', label: 'Références' },
  { value: '100%', label: 'Sélectionnés' },
  { value: '🇧🇯',  label: 'Livraison BJ' },
]
</script>