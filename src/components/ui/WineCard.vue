<template>
  <article class="group relative bg-white border border-stone-200/70 hover:border-[#F5C400]/50 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#22529C]/10">

    <!-- Top thin accent -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C400] to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

    <!-- Image -->
    <div class="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#fbf8f3] to-[#ece1c8]/40">
      <img
        v-if="wine.image"
        :src="wine.image"
        :alt="wine.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div v-else class="absolute inset-0 flex items-center justify-center text-6xl text-[#22529C]/30">🍷</div>

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

      <!-- Wishlist -->
      <button
        @click.prevent="favorite = !favorite"
        class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#22529C] hover:bg-[#F5C400] hover:text-[#16336a] transition-all opacity-0 group-hover:opacity-100"
        :class="favorite ? '!opacity-100 !bg-[#F5C400] !text-[#16336a]' : ''"
        aria-label="Ajouter aux favoris"
      >
        <svg class="w-4 h-4" :fill="favorite ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      <!-- Quick view overlay -->
      <div class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <button class="w-full py-3 bg-[#16336a] text-white text-[10px] font-bold tracking-[0.25em] uppercase rounded-sm hover:bg-[#22529C] transition-colors">
          Aperçu rapide
        </button>
      </div>
    </div>

    <!-- Body -->
    <div class="p-5 lg:p-6">
      <!-- Region & rating -->
      <div class="flex items-center justify-between mb-2">
        <p class="text-[10px] text-[#b88d00] uppercase tracking-[0.25em] font-semibold m-0">{{ wine.region }}</p>
        <div v-if="wine.rating" class="flex items-center gap-0.5 text-[#F5C400]">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span class="text-[10px] font-bold text-stone-600">{{ wine.rating }}</span>
        </div>
      </div>

      <!-- Name -->
      <h3 class="font-display text-xl text-[#16336a] mb-1 leading-tight m-0">{{ wine.name }}</h3>

      <!-- Vintage / type -->
      <p v-if="wine.vintage || wine.type" class="text-xs text-stone-500 mb-4 m-0">
        <span v-if="wine.vintage">{{ wine.vintage }}</span>
        <span v-if="wine.vintage && wine.type" class="mx-1.5">·</span>
        <span v-if="wine.type">{{ wine.type }}</span>
      </p>
      <div v-else class="mb-4"></div>

      <!-- Footer: price + cart -->
      <div class="flex items-end justify-between pt-4 border-t border-stone-100">
        <div>
          <p class="text-[9px] tracking-widest uppercase text-stone-400 mb-0.5">Prix</p>
          <p class="font-display text-xl text-[#16336a] m-0">
            {{ formattedPrice }}
            <span class="text-xs text-stone-500 font-sans">FCFA</span>
          </p>
        </div>
        <button
          class="group/btn flex items-center justify-center w-10 h-10 bg-[#22529C] hover:bg-[#F5C400] hover:text-[#16336a] text-white rounded-sm transition-all"
          @click="$emit('add-to-cart', wine)"
          aria-label="Ajouter au panier"
        >
          <svg class="w-4 h-4 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  wine: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])

const favorite = ref(false)

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('fr-FR').format(Math.round(props.wine.price))
})
</script>
