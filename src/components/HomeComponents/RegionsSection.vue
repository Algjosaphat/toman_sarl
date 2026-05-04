<template>
  <section class="relative py-24 lg:py-32 bg-white overflow-hidden">

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="eyebrow">Notre terroir</span>
        <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2 mb-5">
          Stellenbosch,
          <span class="italic text-[#22529C]">notre source.</span>
        </h2>
        <p class="text-stone-600 text-base lg:text-lg leading-relaxed">
          Tous nos vins proviennent d'un seul domaine d'exception : Vredenheim 1691, à Stellenbosch, Afrique du Sud — l'une des régions viticoles les plus récompensées au monde.
        </p>
      </div>

      <!-- Main layout: large feature + product cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <!-- Featured region card (large) -->
        <div class="group relative lg:col-span-2 lg:row-span-2 min-h-[420px] rounded-sm overflow-hidden">
          <img src="@/assets/image2.jpeg" alt="Stellenbosch" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a] via-[#0d214a]/40 to-transparent"></div>

          <div class="relative h-full p-8 lg:p-12 flex flex-col justify-end text-white">
            <span class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold mb-3">★ Notre terroir exclusif</span>
            <h3 class="font-display text-4xl lg:text-6xl mb-4">Stellenbosch</h3>
            <p class="text-white/80 max-w-md mb-4 leading-relaxed">
              Fondé en 1691, le domaine Vredenheim est l'un des plus anciens d'Afrique du Sud. Son terroir de granit et d'argile, son climat méditerranéen et son savoir-faire centenaire donnent naissance à des vins d'une profondeur rare.
            </p>
            <!-- Award chips -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="award in awards" :key="award"
                    class="px-3 py-1 bg-[#F5C400]/20 border border-[#F5C400]/40 text-[#F5C400] text-[10px] tracking-widest uppercase rounded-full">
                {{ award }}
              </span>
            </div>
            <RouterLink to="/shop" class="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white hover:text-[#F5C400] transition-colors no-underline">
              6 références disponibles
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>
        </div>

        <!-- Product category cards -->
        <RouterLink
          v-for="cat in categoryCards"
          :key="cat.slug"
          :to="`/shop?categorie=${cat.slug}`"
          class="group relative aspect-square rounded-sm overflow-hidden no-underline text-inherit"
        >
          <img :src="cat.image" :alt="cat.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a]/90 via-[#0d214a]/40 to-transparent"></div>

          <div class="relative h-full p-6 flex flex-col justify-end text-white">
            <p class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold mb-1">{{ cat.tagline }}</p>
            <h3 class="font-display text-3xl mb-2">{{ cat.name }}</h3>
            <span class="text-xs text-white/70">{{ cat.count }} référence{{ cat.count > 1 ? 's' : '' }}</span>
          </div>

          <!-- Hover arrow -->
          <div class="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </RouterLink>

      </div>
    </div>
  </section>
</template>

<script setup>
// import ImgWhiteGrapeJuice from '@/assets/Whit_Grape_Juice_7000F_ss_alcool.jpeg'
// import ImgMerlot from '@/assets/Merlot_2023_9000f.jpeg'
import ImgRedGrapeJuice from '@/assets/Red_Grape-Juice_7000f_ss_alcool.jpeg'
import ImgSauvignonBlanc from '@/assets/Sauvignon_blanc_8000f.jpeg'
import ImgShiraz from '@/assets/Shiraz_2023_8800f.jpeg'
import ImgSparklingWine from '@/assets/Sparkling_Wine_8500f.jpeg'

const awards = ['Gold Veritas 2025', 'Gold Michelangelo 2025', 'Gold Solo Wine Awards 2025']

const categoryCards = [
  { slug: 'rouge',       name: 'Vins Rouges',     tagline: 'Caractère',   count: 2, image: ImgShiraz },
  { slug: 'blanc',       name: 'Vins Blancs',     tagline: 'Fraîcheur',   count: 1, image: ImgSauvignonBlanc },
  { slug: 'petillant',   name: 'Pétillants',      tagline: 'Célébration', count: 1, image: ImgSparklingWine },
  { slug: 'sans-alcool', name: 'Sans Alcool',     tagline: 'Pour tous',   count: 2, image: ImgRedGrapeJuice },
]
</script>