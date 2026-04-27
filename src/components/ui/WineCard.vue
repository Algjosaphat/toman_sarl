<template>
  <article class="border border-stone-200 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white">
    
    <!-- Image -->
    <div class="relative h-52 bg-stone-100 flex items-center justify-center">
      <img
        v-if="wine.image"
        :src="wine.image"
        :alt="wine.name"
        class="w-full h-full object-cover"
      />
      <span v-else class="text-6xl">🍷</span>

      <span
        v-if="wine.badge"
        class="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full"
        :class="wine.isAlcoholFree
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-amber-100 text-amber-700'"
      >
        {{ wine.badge }}
      </span>
    </div>

    <!-- Body -->
    <div class="p-5">
      <p class="text-xs text-stone-400 uppercase tracking-widest mb-1">{{ wine.region }}</p>
      <h3 class="font-serif text-lg text-stone-900 mb-4 leading-snug">{{ wine.name }}</h3>

      <div class="flex items-center justify-between">
        <span class="text-xl font-semibold text-stone-800">
          {{ wine.price.toFixed(2) }} €
        </span>
        <button
          class="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium rounded transition-colors"
          @click="$emit('add-to-cart', wine)"
        >
          + Panier
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  wine: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>