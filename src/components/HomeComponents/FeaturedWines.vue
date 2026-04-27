<template>
  <section class="py-20 px-24 bg-white">
    <div class="flex items-baseline justify-between mb-12">
      <h2 class="font-serif text-4xl text-stone-900">Nos coups de cœur</h2>
      <RouterLink to="/shop" class="text-amber-600 font-medium text-sm hover:underline">
        Tout voir →
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <WineCard
        v-for="wine in featuredWines"
        :key="wine.id"
        :wine="wine"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </section>
</template>

<script setup>
import Image1 from "../../assets/image1.jpeg";
import Image2 from "../../assets/image2.jpeg";
import Image3 from "../../assets/image3.jpeg";
import WineCard from '../ui/WineCard.vue'

const featuredWines = [
  { id: 1, name: 'Château Margaux 2018', region: 'Bordeaux, France', price: 89.90, isAlcoholFree: false, image: Image1, badge: 'Coup de cœur' },
  { id: 2, name: 'Natureo Muscat', region: 'Espagne', price: 12.50, isAlcoholFree: true, image: Image2, badge: 'Sans alcool' },
  { id: 3, name: 'Pouilly-Fumé 2022', region: 'Loire, France', price: 24.00, isAlcoholFree: false, image: Image3, badge: null },
  { id: 4, name: 'Chablis Premier Cru', region: 'Bourgogne, France', price: 38.00, isAlcoholFree: false, image: Image3, badge: 'Nouveau' }
]

function handleAddToCart(wine) {
  // Tu connecteras ton store Pinia ici
  console.log('Ajouté au panier :', wine.name)
}
</script>