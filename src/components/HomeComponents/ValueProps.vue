<template>
  <section class="relative py-20 lg:py-28 bg-[#16336a] overflow-hidden">

    <!-- Subtle pattern -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Top heading row -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div class="max-w-2xl">
          <span class="eyebrow !text-[#F5C400]">Notre engagement</span>
          <h2 class="font-display text-4xl lg:text-5xl text-white leading-[1.1] mt-2">
            L'exigence d'une<br/>
            <span class="italic text-[#F5C400]">grande maison</span>.
          </h2>
        </div>
        <p class="text-white/60 text-base max-w-md leading-relaxed">
          Chaque bouteille raconte une histoire. La nôtre, c'est de vous l'apporter dans les meilleures conditions, avec le bon conseil.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          class="group bg-[#16336a] hover:bg-[#22529C] p-8 lg:p-10 transition-all duration-500"
        >
          <!-- Number -->
          <p class="font-display text-5xl text-[#F5C400]/30 group-hover:text-[#F5C400]/60 mb-6 leading-none transition-colors">
            {{ String(i + 1).padStart(2, '0') }}
          </p>

          <!-- Icon -->
          <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-sm bg-[#F5C400]/10 border border-[#F5C400]/30 text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-[#16336a] transition-all">
            <span v-html="item.icon"></span>
          </div>

          <!-- Title -->
          <h3 class="font-display text-2xl text-white mb-3 leading-tight">{{ item.title }}</h3>

          <!-- Description -->
          <p class="text-sm text-white/60 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'Sourcing rigoureux',
    description: 'Chaque vin est dégusté avant d\'entrer en cave. Nous travaillons en direct avec des domaines familiaux et des importateurs de confiance.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>'
  },
  {
    title: 'Conservation optimale',
    description: 'Cave climatisée à 14°C, hygrométrie contrôlée. Vos bouteilles vous parviennent dans des conditions dignes des plus grandes maisons.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/></svg>'
  },
  {
    title: 'Livraison soignée',
    description: 'Emballage premium anti-choc, livraison express à Cotonou en 24h. Chaque commande suivie pas à pas par notre équipe.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 5h2l3 12h11l3-9H6"/></svg>'
  },
  {
    title: 'Conseil sommelier',
    description: 'Notre chef de cave vous accompagne. Accord mets-vins, choix d\'un cadeau, dégustation — un échange humain, pas un algorithme.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  }
]
</script>
