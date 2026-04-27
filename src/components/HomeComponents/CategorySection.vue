<template>
  <section class="py-20 px-24 bg-stone-50">
    <h2 class="font-serif text-4xl text-stone-900 text-center mb-12">
      Explorez nos gammes
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <RouterLink
        v-for="cat in categories"
        :key="cat.slug"
        :to="`/shop?categorie=${cat.slug}`"
        class="flex flex-col gap-3 p-8 bg-white border border-stone-200 rounded-lg no-underline text-inherit hover:border-amber-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      >
        <!-- <span class="text-4xl">{{ cat.icon }}</span> -->
        <div class="h-55 w-40 mx-auto">
            <img :src="cat.image" :alt="cat.name" class="w-full h-auto object-cover rounded-lg mb-4" />
        </div>
        <h3 class="font-serif text-xl text-stone-900 m-0">{{ cat.name }}</h3>
        <p class="text-sm text-stone-500 leading-relaxed m-0 flex-1">{{ cat.description }}</p>
        <span class="text-sm font-medium text-amber-600">Voir la sélection →</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import Image from "../../assets/image.jpeg";
import Image1 from "../../assets/image1.jpeg";
import Image2 from "../../assets/image2.jpeg";
import Image3 from "../../assets/image3.jpeg";
const categories = [
  {
    slug: 'rouge',
    name: 'Vins Rouges',
    image: Image3,
    description: "Bordeaux, Bourgogne, Côtes du Rhône... Des terroirs d'exception."
  },
  {
    slug: 'blanc',
    name: 'Vins Blancs',
    image: Image1,
    description: "De la fraîcheur d'un Chablis à la rondeur d'un Meursault."
  },
  {
    slug: 'rose',
    name: 'Vins Rosés',
    image: Image2,
    description: "L'élégance de Provence dans chaque verre."
  },
  {
    slug: 'sans-alcool',
    name: 'Sans Alcool',
    image: Image3,
    description: "Toute la complexité du vin, zéro alcool. Pour tous les moments."
  }
]
</script>