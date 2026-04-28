<template>
  <section class="relative py-24 lg:py-32 bg-white overflow-hidden">

    <!-- Subtle background -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header with filter pills -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div class="max-w-2xl">
          <span class="eyebrow">Sélection du sommelier</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Nos coups
            <span class="italic text-[#22529C]">de cœur.</span>
          </h2>
          <p class="mt-5 text-stone-600 text-base lg:text-lg max-w-xl leading-relaxed">
            Une sélection rigoureuse, mise à jour chaque mois par notre chef de cave. Des trouvailles, des classiques, des incontournables.
          </p>
        </div>

        <div class="flex items-center gap-2 lg:self-end">
          <RouterLink to="/shop" class="hidden lg:inline-flex items-center gap-2 text-[#22529C] hover:text-[#F5C400] font-medium text-sm tracking-wide uppercase transition-colors no-underline link-grow">
            Tout voir
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap gap-2 mb-12 pb-2 border-b border-stone-100">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all"
          :class="activeFilter === filter.value
            ? 'bg-[#16336a] text-white shadow-lg shadow-[#22529C]/20'
            : 'text-stone-600 hover:text-[#22529C] hover:bg-stone-50'"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Wines grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <WineCard
          v-for="wine in filteredWines"
          :key="wine.id"
          :wine="wine"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <!-- CTA -->
      <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 pt-12 border-t border-stone-100">
        <p class="text-stone-500 text-sm">Plus de <span class="font-semibold text-[#16336a]">200 références</span> attendent dans notre cave.</p>
        <RouterLink to="/shop" class="inline-flex items-center gap-2 text-[#22529C] hover:text-[#F5C400] font-bold text-sm tracking-widest uppercase transition-colors no-underline">
          Explorer toute la cave
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Image from "../../assets/image.jpeg"
import Image1 from "../../assets/image1.jpeg"
import Image2 from "../../assets/image2.jpeg"
import Image3 from "../../assets/image3.jpeg"
import WineCard from '../ui/WineCard.vue'

const activeFilter = ref('all')

const filters = [
  { value: 'all',     label: 'Tous' },
  { value: 'rouge',   label: 'Rouges' },
  { value: 'blanc',   label: 'Blancs' },
  { value: 'rose',    label: 'Rosés' },
  { value: 'sans',    label: 'Sans alcool' },
]

const featuredWines = [
  { id: 1, name: 'Château Margaux',    region: 'Bordeaux',  vintage: '2018', type: 'Rouge · 750ml',   price: 189000, isAlcoholFree: false, image: Image1, badge: 'Coup de cœur', rating: '4.9', cat: 'rouge' },
  { id: 2, name: 'Natureo Muscat',     region: 'Espagne',   vintage: '2023', type: 'Sans alcool',     price: 8500,   isAlcoholFree: true,  image: Image2, badge: 'Sans alcool',  rating: '4.6', cat: 'sans' },
  { id: 3, name: 'Pouilly-Fumé',       region: 'Loire',     vintage: '2022', type: 'Blanc · 750ml',   price: 32000,  isAlcoholFree: false, image: Image3, badge: null,           rating: '4.8', cat: 'blanc' },
  { id: 4, name: 'Chablis Premier Cru',region: 'Bourgogne', vintage: '2021', type: 'Blanc · 750ml',   price: 48000,  isAlcoholFree: false, image: Image,  badge: 'Nouveau',      rating: '4.9', cat: 'blanc' },
  { id: 5, name: 'Domaine Tempier',    region: 'Provence',  vintage: '2022', type: 'Rosé · 750ml',    price: 28000,  isAlcoholFree: false, image: Image2, badge: null,           rating: '4.7', cat: 'rose' },
  { id: 6, name: 'Côtes du Rhône',     region: 'Vallée du Rhône', vintage: '2020', type: 'Rouge · 750ml', price: 18000, isAlcoholFree: false, image: Image1, badge: 'Best-seller', rating: '4.8', cat: 'rouge' },
  { id: 7, name: 'Sancerre',           region: 'Loire',     vintage: '2023', type: 'Blanc · 750ml',   price: 24000,  isAlcoholFree: false, image: Image3, badge: null,           rating: '4.7', cat: 'blanc' },
  { id: 8, name: 'Lussory Premium',    region: 'Espagne',   vintage: '2023', type: 'Sans alcool',     price: 7900,   isAlcoholFree: true,  image: Image,  badge: 'Sans alcool',  rating: '4.5', cat: 'sans' },
]

const filteredWines = computed(() => {
  if (activeFilter.value === 'all') return featuredWines
  return featuredWines.filter(w => w.cat === activeFilter.value)
})

function handleAddToCart(wine) {
  console.log('Ajouté au panier :', wine.name)
}
</script>
