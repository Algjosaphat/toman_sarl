<template>
  <RouterLink
    :to="productLink"
    class="group relative block bg-white border border-stone-200/70 hover:border-[#F5C400]/50 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#22529C]/10 no-underline text-inherit"
  >
    <!-- Top accent -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C400] to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

    <!-- Image -->
    <div class="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#fbf8f3] to-[#ece1c8]/40 flex items-center justify-center p-4 sm:p-6">
      <img
        v-if="wine.image"
        :src="wine.image"
        :alt="wine.name"
        class="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
      />
      <div v-else class="text-6xl text-[#22529C]/30">🍷</div>

      <!-- Badge -->
      <span
        v-if="wine.badge"
        class="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm shadow-md"
        :class="wine.isAlcoholFree
          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
          : 'bg-[#F5C400] text-[#16336a]'"
      >
        {{ wine.badge }}
      </span>

      <!-- Hover CTA -->
      <div class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div class="w-full py-3 bg-[#16336a] text-white text-[10px] font-bold tracking-[0.25em] uppercase rounded-sm text-center">
          Voir le produit
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="p-5 lg:p-6">
      <div class="flex items-center justify-between mb-2">
        <p class="text-[10px] text-[#b88d00] uppercase tracking-[0.25em] font-semibold m-0">{{ wine.region }}</p>
        <div v-if="wine.rating" class="flex items-center gap-0.5 text-[#F5C400]">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span class="text-[10px] font-bold text-stone-600">{{ wine.rating }}</span>
        </div>
      </div>

      <h3 class="font-display text-xl text-[#16336a] mb-1 leading-tight m-0 group-hover:text-[#22529C] transition-colors">{{ wine.name }}</h3>

      <p v-if="wine.vintage || wine.type" class="text-xs text-stone-500 mb-4 m-0">
        <span v-if="wine.vintage">{{ wine.vintage }}</span>
        <span v-if="wine.vintage && wine.type" class="mx-1.5">·</span>
        <span v-if="wine.type">{{ wine.type }}</span>
      </p>
      <div v-else class="mb-4"></div>

      <!-- Footer: price + arrow -->
      <div class="flex items-end justify-between pt-4 border-t border-stone-100">
        <div>
          <p class="text-[9px] tracking-widest uppercase text-stone-400 mb-0.5">Prix</p>
          <p class="font-display text-xl text-[#16336a] m-0">
            {{ formattedPrice }}
            <span class="text-xs text-stone-500 font-sans">FCFA</span>
          </p>
        </div>
        <span class="inline-flex items-center gap-1 text-[10px] tracking-widest uppercase text-[#22529C] group-hover:text-[#F5C400] font-semibold transition-colors">
          Détails
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  wine: {
    type: Object,
    required: true
  }
})

const formattedPrice = computed(() => new Intl.NumberFormat('fr-FR').format(Math.round(props.wine.price)))

const productLink = computed(() => {
  const slug = props.wine.slug || props.wine.id
  return `/produit/${slug}`
})
</script>
