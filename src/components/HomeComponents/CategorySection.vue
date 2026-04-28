<template>
  <section class="relative py-24 lg:py-32 bg-[#fbf8f3] overflow-hidden">

    <!-- Decorative background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-[#22529C]/5 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#22529C]/5 pointer-events-none"></div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div class="max-w-2xl">
          <span class="eyebrow">Notre cave</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Explorez nos
            <span class="italic text-[#22529C]">gammes</span>
          </h2>
          <p class="mt-5 text-stone-600 text-base lg:text-lg max-w-xl leading-relaxed">
            Quatre univers, une même exigence : vous offrir le meilleur du vin pour chaque moment, chaque palais.
          </p>
        </div>

        <RouterLink to="/shop" class="hidden lg:inline-flex items-center gap-2 text-[#22529C] hover:text-[#F5C400] font-medium text-sm tracking-wide uppercase transition-colors no-underline link-grow">
          Voir toute la cave
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </RouterLink>
      </div>

      <!-- Categories grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <RouterLink
          v-for="(cat, i) in categories"
          :key="cat.slug"
          :to="`/shop?categorie=${cat.slug}`"
          class="group relative flex flex-col bg-white border border-stone-200/80 hover:border-[#F5C400]/40 rounded-sm overflow-hidden no-underline text-inherit transition-all duration-500 card-luxe hover:shadow-2xl hover:shadow-[#22529C]/10"
          :style="`animation-delay: ${i * 100}ms`"
        >
          <!-- Gold accent (top) -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-[#F5C400] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          <!-- Image -->
          <div class="relative h-72 overflow-hidden bg-gradient-to-br from-[#fbf8f3] to-[#ece1c8]/50">
            <img :src="cat.image" :alt="cat.name"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Counter badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#22529C] text-[10px] font-bold tracking-widest uppercase rounded-sm">
              {{ cat.count }} réf.
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 flex flex-col flex-1">
            <span class="text-[10px] tracking-[0.3em] uppercase text-[#b88d00] font-semibold mb-2">{{ cat.tagline }}</span>
            <h3 class="font-display text-2xl text-[#16336a] m-0 mb-2.5 leading-tight">{{ cat.name }}</h3>
            <p class="text-sm text-stone-600 leading-relaxed m-0 flex-1 mb-5">{{ cat.description }}</p>

            <span class="inline-flex items-center gap-2 text-sm font-medium text-[#22529C] group-hover:text-[#F5C400] transition-colors">
              Découvrir la sélection
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </RouterLink>
      </div>

      <!-- Mobile see all link -->
      <div class="mt-12 lg:hidden text-center">
        <RouterLink to="/shop" class="inline-flex items-center gap-2 text-[#22529C] font-medium text-sm uppercase tracking-wider no-underline">
          Voir toute la cave
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </RouterLink>
      </div>
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
    count: 84,
    tagline: 'Caractère',
    description: "Bordeaux, Bourgogne, Côtes du Rhône. Des terroirs d'exception pour les amateurs avertis."
  },
  {
    slug: 'blanc',
    name: 'Vins Blancs',
    image: Image1,
    count: 56,
    tagline: 'Fraîcheur',
    description: "De la vivacité minérale d'un Chablis à la rondeur d'un Meursault, l'art de l'équilibre."
  },
  {
    slug: 'rose',
    name: 'Vins Rosés',
    image: Image2,
    count: 32,
    tagline: 'Élégance',
    description: "L'élégance de la Provence, la délicatesse de la Loire. Pour les beaux jours partagés."
  },
  {
    slug: 'sans-alcool',
    name: 'Sans Alcool',
    image: Image,
    count: 28,
    tagline: 'Modernité',
    description: "Toute la complexité du vin, zéro alcool. Une nouvelle élégance pour tous les palais."
  }
]
</script>
