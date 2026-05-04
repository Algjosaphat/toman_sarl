<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0d214a]">

    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        src="@/assets/hero.jpeg"
        alt="Cave à vins Toman"
        class="w-full h-full object-cover object-center scale-105"
      />
      <!-- Multi-layer gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0d214a] via-[#22529C]/80 to-[#22529C]/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a] via-transparent to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#22529C]/20 via-transparent to-transparent"></div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#F5C400]/8 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#22529C]/30 blur-3xl pointer-events-none"></div>

    <!-- Side label -->
    <div class="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 -rotate-90 origin-left">
      <span class="text-[10px] tracking-[0.5em] uppercase text-white/30">Maison Toman · Cotonou · Bénin</span>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-8 lg:px-20 py-20 grid lg:grid-cols-12 gap-12 items-center">

      <!-- Left text -->
      <div class="lg:col-span-7 flex flex-col">

        <!-- Badge -->
        <!-- <div class="flex items-center gap-3 self-start mb-8 animate-fade-up">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]"></span>
          </span>
          <span class="px-4 py-1.5 border border-[#F5C400]/40 text-[#F5C400] text-[10px] tracking-[0.3em] uppercase font-semibold backdrop-blur-md bg-[#F5C400]/5 rounded-full">
            Nouvelle collection · Printemps 2026
          </span>
        </div> -->

        <!-- Title -->
        <h1 class="font-display text-4xl lg:text-8xl md:text-7xl text-white leading-[1.02] mb-8 animate-fade-up delay-100">
          <!-- style="font-size: clamp(3rem, 8vw, 6.5rem);" -->
          L'art du vin,<br/>
          <span class="italic font-normal text-[#F5C400]">
            sans compromis.
            <!-- text-gradient-gold -->
          </span>
        </h1>

        <!-- Decorative divider -->
        <div class="flex items-center gap-5 mb-8 animate-fade-up delay-200">
          <div class="h-px w-16 bg-gradient-to-r from-[#F5C400] to-transparent"></div>
          <p class="text-white/60 text-[11px] tracking-[0.35em] uppercase font-medium">Caviste · Curateur · Conseiller</p>
        </div>

        <!-- Description -->
        <p class="text-lg lg:text-xl text-white/75 leading-relaxed mb-12 max-w-xl font-light animate-fade-up delay-300">
          Une cave conçue comme un voyage. Plus de 6 références soigneusement sélectionnées, des grands crus aux cuvées sans alcool, livrées à votre porte au Bénin.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 mb-16 animate-fade-up delay-400">
          <RouterLink to="/shop" class="btn-primary group">
            <span>Explorer la cave</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>
          <RouterLink to="/about" class="btn-ghost">
            <span>Notre histoire</span>
          </RouterLink>
        </div>

        <!-- Stats -->
        <div class="flex divide-x divide-white/10 animate-fade-up delay-500">
          <div v-for="(stat, i) in stats" :key="stat.label" class="flex flex-col" :class="i === 0 ? 'pr-10' : 'px-10'">
            <span class="font-display text-4xl text-[#F5C400] font-medium mb-1">{{ stat.value }}</span>
            <span class="text-white/55 text-[10px] uppercase tracking-[0.25em]">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right floating cards (desktop) -->
      <div class="lg:col-span-5 hidden lg:flex flex-col gap-5 items-end animate-fade-up delay-300">

        <!-- Featured wine card -->
        <div class="w-full max-w-sm bg-white/8 backdrop-blur-xl border border-white/15 rounded-sm overflow-hidden shadow-2xl shadow-black/40 group hover:border-[#F5C400]/40 transition-all duration-500">

          <!-- Image -->
          <div class="relative h-72 overflow-hidden bg-gradient-to-br from-[#22529C]/60 to-[#0d214a]/80">
            <img src="@/assets/imagehero.jpeg" alt="Vin vedette"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a]/80 via-transparent to-transparent"></div>

            <!-- Top badge -->
            <div class="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#F5C400] text-[#0d214a] text-[10px] tracking-widest uppercase font-bold rounded-sm">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              Coup de cœur
            </div>

            <!-- Stars -->
            <div class="absolute top-4 right-4 flex gap-0.5 px-2.5 py-1.5 bg-black/40 backdrop-blur-sm rounded-sm">
              <span v-for="i in 5" :key="i" class="text-[#F5C400] text-[10px]">★</span>
            </div>
          </div>

          <!-- Body -->
          <div class="p-5">
            <p class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400]/80 mb-1">Sélection du chef de cave</p>
            <h3 class="font-display text-white text-2xl mb-2 leading-tight">Shiraz 2023 ou Merlot 2023</h3>
            <p class="text-white/50 text-xs mb-5">2023·Rouge · 750 ml</p>

            <!-- <div class="flex items-end justify-between pt-4 border-t border-white/10">
              <div>
                <p class="text-[9px] tracking-widest uppercase text-white/40 mb-0.5">Prix membre</p>
                <p class="font-display text-2xl text-[#F5C400]">189 000 <span class="text-sm">FCFA</span></p>
              </div>
              <button class="px-4 py-2.5 bg-[#F5C400] hover:bg-white text-[#16336a] text-[11px] tracking-widest uppercase font-bold rounded-sm transition-colors">
                Ajouter
              </button>
            </div> -->
          </div>
        </div>

        <!-- Mini info card -->
        <div class="flex items-center gap-3 bg-white/8 backdrop-blur-xl border border-white/15 rounded-sm px-5 py-4 max-w-sm w-full">
          <div class="w-10 h-10 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 flex items-center justify-center text-[#F5C400] shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 5h2l3 12h11l3-9H6"/>
            </svg>
          </div>
          <div>
            <p class="text-white text-sm font-medium">Livraison soignée</p>
            <p class="text-white/50 text-xs">Sous 24h à Cotonou · Emballage premium</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee at the bottom -->
    <div class="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#0d214a]/60 backdrop-blur-md">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20 py-4 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-white/50">
        <span class="flex items-center gap-2">
          <span class="text-[#F5C400]">★★★★★</span>
          4.9 / 5 · 320+ avis clients
        </span>
        <span class="hidden md:flex items-center gap-2"><span class="w-1 h-1 bg-[#F5C400] rounded-full"></span>Livraison express Cotonou</span>
        <span class="hidden md:flex items-center gap-2"><span class="w-1 h-1 bg-[#F5C400] rounded-full"></span>Mobile Money accepté</span>
        <span class="hidden lg:flex items-center gap-2"><span class="w-1 h-1 bg-[#F5C400] rounded-full"></span>Conseil sommelier offert</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '6+', label: 'Références' },
  // { value: '12',   label: 'Pays d\'origine' },
  { value: '4.9',  label: 'Note moyenne' },
]
</script>
