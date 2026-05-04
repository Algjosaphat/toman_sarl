<template>
  <section class="relative py-24 lg:py-32 bg-white overflow-hidden">

    <!-- Subtle background -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header with filter pills -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div class="max-w-2xl">
          <span class="eyebrow">Sélection Vredenheim</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Nos coups
            <span class="italic text-[#22529C]">de cœur.</span>
          </h2>
          <p class="mt-5 text-stone-600 text-base lg:text-lg max-w-xl leading-relaxed">
            Toute la gamme Vredenheim 1691, domaine de Stellenbosch fondé en 1691 et plusieurs fois médaillé Gold en 2025.
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <WineCard
          v-for="wine in filteredWines"
          :key="wine.id"
          :wine="wine"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <!-- CTA -->
      <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 pt-12 border-t border-stone-100">
        <p class="text-stone-500 text-sm">
          <span class="font-semibold text-[#16336a]">6 références</span> disponibles — vins primés Gold, directement de Stellenbosch.
        </p>
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
import WineCard from '../ui/WineCard.vue'

import ImgWhiteGrapeJuice from '@/assets/Whit_Grape_Juice_7000F_ss_alcool.jpeg'
import ImgMerlot from '@/assets/Merlot_2023_9000f.jpeg'
import ImgRedGrapeJuice from '@/assets/Red_Grape-Juice_7000f_ss_alcool.jpeg'
import ImgSauvignonBlanc from '@/assets/Sauvignon_blanc_8000f.jpeg'
import ImgShiraz from '@/assets/Shiraz_2023_8800f.jpeg'
import ImgSparklingWine from '@/assets/Sparkling_Wine_8500f.jpeg'

const activeFilter = ref('all')

const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'rouge', label: 'Rouges' },
  { value: 'blanc', label: 'Blancs' },
  { value: 'petillant', label: 'Pétillants' },
  { value: 'sans-alcool', label: 'Sans alcool' },
]

const featuredWines = [
  {
    id: 1,
    name: 'Shiraz 2023',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2023',
    type: 'Rouge · 750 ml',
    price: 8800,
    alc: '14.9%',
    isAlcoholFree: false,
    image: ImgShiraz,
    badge: 'Gold 2025',
    rating: '4.8',
    cat: 'rouge',
  },
  {
    id: 2,
    name: 'Merlot 2023',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2023',
    type: 'Rouge · 750 ml',
    price: 9000,
    alc: '14.2%',
    isAlcoholFree: false,
    image: ImgMerlot,
    badge: 'Gold 2025',
    rating: '4.7',
    cat: 'rouge',
  },
  {
    id: 3,
    name: 'Sauvignon Blanc 2025',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2025',
    type: 'Blanc · 750 ml',
    price: 8000,
    alc: '12.5%',
    isAlcoholFree: false,
    image: ImgSauvignonBlanc,
    badge: 'Gold 2025',
    rating: '4.9',
    cat: 'blanc',
  },
  {
    id: 4,
    name: 'Vredenvonkel 2024',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2024',
    type: 'Pétillant Rosé · 750 ml',
    price: 8500,
    alc: '13.5%',
    isAlcoholFree: false,
    image: ImgSparklingWine,
    badge: 'Nouveau',
    rating: '4.8',
    cat: 'petillant',
  },
  {
    id: 5,
    name: 'Jus de Raisin Blanc',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2024',
    type: 'Sans alcool · 750 ml',
    price: 7000,
    alc: '0%',
    isAlcoholFree: true,
    image: ImgWhiteGrapeJuice,
    badge: 'Sans alcool',
    rating: '4.6',
    cat: 'sans-alcool',
  },
  {
    id: 6,
    name: 'Jus de Raisin Rouge',
    producer: 'Vredenheim 1691',
    region: 'Stellenbosch',
    vintage: '2024',
    type: 'Sans alcool · 750 ml',
    price: 7000,
    alc: '0%',
    isAlcoholFree: true,
    image: ImgRedGrapeJuice,
    badge: 'Sans alcool',
    rating: '4.6',
    cat: 'sans-alcool',
  },
]

const filteredWines = computed(() => {
  if (activeFilter.value === 'all') return featuredWines
  return featuredWines.filter(w => w.cat === activeFilter.value)
})

function handleAddToCart(wine) {
  console.log('Ajouté au panier :', wine.name)
}
</script>