<template>
  <section class="relative py-24 lg:py-32 bg-white overflow-hidden">

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="eyebrow">Voyage en cave</span>
        <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2 mb-5">
          Les terroirs
          <span class="italic text-[#22529C]">qui nous inspirent.</span>
        </h2>
        <p class="text-stone-600 text-base lg:text-lg leading-relaxed">
          De Bordeaux à la Rioja, de la Champagne à Mendoza — découvrez les régions viticoles qui composent notre cave.
        </p>
      </div>

      <!-- Regions grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <!-- Featured region (large card) -->
        <RouterLink
          to="/shop?region=bordeaux"
          class="group relative lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto rounded-sm overflow-hidden no-underline text-inherit"
        >
          <img src="@/assets/image1.jpeg" alt="Bordeaux" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a] via-[#0d214a]/40 to-transparent"></div>

          <div class="relative h-full p-8 lg:p-12 flex flex-col justify-end text-white">
            <span class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold mb-3">★ Région phare</span>
            <h3 class="font-display text-4xl lg:text-6xl mb-4">Bordeaux</h3>
            <p class="text-white/80 max-w-md mb-6 leading-relaxed">
              Berceau des grands rouges. Médoc, Saint-Émilion, Pomerol — la quintessence de l'élégance française.
            </p>
            <span class="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
              42 références
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </RouterLink>

        <!-- Smaller region cards -->
        <RouterLink
          v-for="region in regions"
          :key="region.slug"
          :to="`/shop?region=${region.slug}`"
          class="group relative aspect-square rounded-sm overflow-hidden no-underline text-inherit"
        >
          <img :src="region.image" :alt="region.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a]/90 via-[#0d214a]/40 to-transparent"></div>

          <div class="relative h-full p-6 flex flex-col justify-end text-white">
            <p class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold mb-1">{{ region.country }}</p>
            <h3 class="font-display text-3xl mb-2">{{ region.name }}</h3>
            <span class="text-xs text-white/70">{{ region.count }} références</span>
          </div>

          <!-- Hover plus icon -->
          <div class="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </RouterLink>

      </div>
    </div>
  </section>
</template>

<script setup>
import Image from "../../assets/image.jpeg"
import Image1 from "../../assets/image1.jpeg"
import Image2 from "../../assets/image2.jpeg"
import Image3 from "../../assets/image3.jpeg"

const regions = [
  { slug: 'bourgogne',  name: 'Bourgogne',  country: 'France',   count: 28, image: Image2 },
  { slug: 'champagne',  name: 'Champagne',  country: 'France',   count: 16, image: Image3 },
  { slug: 'rioja',      name: 'Rioja',      country: 'Espagne',  count: 12, image: Image },
  { slug: 'toscane',    name: 'Toscane',    country: 'Italie',   count: 18, image: Image1 },
]
</script>
