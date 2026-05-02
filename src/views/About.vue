<template>
  <main>
    <!-- Hero -->
    <section class="relative bg-[#0d214a] overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/image1.jpeg" alt="" class="w-full h-full object-cover opacity-25"/>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0d214a] via-[#0d214a]/80 to-[#0d214a]/40"></div>
      </div>

      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#F5C400]/10 blur-3xl pointer-events-none"></div>

      <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="max-w-3xl">
          <div class="gold-divider mb-6 text-[#F5C400] text-[10px] tracking-[0.4em] uppercase font-semibold">
            Notre Maison
          </div>
          <h1 class="font-display text-white leading-[1.02] mb-8 text-4xl lg:text-8xl md:text-7xl">
            Une passion,<br/>
            <span class="italic text-gradient-gold">un savoir-faire,</span><br/>
            une histoire.
          </h1>
          <p class="text-xl text-white/75 leading-relaxed max-w-2xl font-light">
            Toman SARL n'est pas qu'un caviste. C'est l'histoire d'une famille qui voulait apporter,
            au cœur de Cotonou, l'âme et l'élégance des plus belles caves du monde.
          </p>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="bg-white border-b border-stone-200">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
          <p class="font-display text-5xl lg:text-6xl text-[#22529C] mb-2">{{ stat.value }}</p>
          <p class="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-24 lg:py-32 bg-[#fbf8f3]">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        <div class="lg:col-span-5 relative">
          <div class="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#F5C400]"></div>
          <div class="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#F5C400]"></div>
          <div class="relative aspect-[4/5] overflow-hidden">
            <img src="@/assets/image2.jpeg" alt="Cave Toman SARL" class="w-full h-full object-cover"/>
          </div>
        </div>

        <div class="lg:col-span-7">
          <span class="eyebrow">Chapitre 01</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2 mb-8">
            L'histoire d'une<br/>
            <span class="italic text-[#22529C]">conviction.</span>
          </h2>

          <div class="prose-content space-y-5 text-stone-700 leading-relaxed">
            <p class="text-lg">
              Tout commence en 2023, dans un local de Cotonou. Une idée simple : et si l'on pouvait offrir aux Béninois la même qualité, le même conseil, la même attention que dans les grandes maisons européennes ?
            </p>
            <p>
              Pendant des années, nous avons constaté un manque. Trouver une bouteille d'exception au Bénin relevait souvent du parcours du combattant. Les références étaient rares, les conseils inexistants, les conditions de conservation aléatoires.
            </p>
            <p>
              Toman SARL est née de cette conviction : l'amateur béninois mérite mieux. Nous avons bâti notre cave en travaillant en direct avec des domaines d'exception et des importateurs de confiance — en imposant à chaque étape les standards d'une grande maison.
            </p>
            <p>
              Aujourd'hui, nous sommes fiers de proposer exclusivement les vins <strong>Vredenheim 1691</strong>, domaine sud-africain de Stellenbosch fondé en 1691, primé à plusieurs reprises aux concours internationaux. Des vins de caractère, accessibles, pour toutes les occasions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vredenheim spotlight -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">Notre partenaire exclusif</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Vredenheim 1691,<br/>
            <span class="italic text-[#22529C]">Stellenbosch.</span>
          </h2>
          <p class="text-stone-600 mt-6 leading-relaxed">
            Établi en 1691 dans la région viticole de Stellenbosch, en Afrique du Sud,
            Vredenheim est l'un des domaines les plus anciens et les plus récompensés du pays.
            Ses vins combinent tradition, terroir et modernité — plusieurs fois médaillés Gold
            au Veritas, Michelangelo International et Solo Wine Awards en 2025.
          </p>
        </div>

        <!-- Award badges -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div v-for="award in awards" :key="award.title"
               class="flex flex-col items-center text-center p-6 border border-stone-200 rounded-sm bg-[#fbf8f3]">
            <div class="w-12 h-12 rounded-full bg-[#F5C400] flex items-center justify-center mb-3">
              <svg class="w-6 h-6 text-[#16336a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p class="font-display text-[#16336a] text-sm font-semibold leading-tight">{{ award.title }}</p>
            <p class="text-stone-500 text-xs mt-1">{{ award.year }}</p>
          </div>
        </div>

        <!-- Products overview -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="product in products" :key="product.name"
               class="group text-center">
            <div class="aspect-[2/3] overflow-hidden bg-stone-50 rounded-sm mb-3 relative">
              <img :src="product.image" :alt="product.name"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div v-if="product.isAlcoholFree"
                   class="absolute top-2 left-2 bg-[#22529C] text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                0%
              </div>
            </div>
            <p class="font-display text-sm text-[#16336a] leading-tight">{{ product.name }}</p>
            <p class="text-xs text-stone-500 mt-0.5">{{ product.priceLabel }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24 lg:py-32 bg-[#fbf8f3]">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">Nos valeurs</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Quatre principes,
            <span class="italic text-[#22529C]">un cap.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
          <div v-for="(v, i) in values" :key="v.title"
               class="bg-white p-10 group hover:bg-[#fbf8f3] transition-colors">
            <p class="font-display text-5xl text-[#F5C400] mb-6 leading-none">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="font-display text-2xl text-[#16336a] mb-3">{{ v.title }}</h3>
            <p class="text-sm text-stone-600 leading-relaxed">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-[#16336a]">
      <div class="max-w-3xl mx-auto px-8 text-center">
        <h2 class="font-display text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Venez découvrir notre cave<br/>
          <span class="italic text-[#F5C400]">en personne.</span>
        </h2>
        <p class="text-white/70 mb-10">
          Boutique ouverte du lundi au samedi · Cotonou, Bénin
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/contact" class="btn-primary">
            Prendre rendez-vous
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>
          <RouterLink to="/shop" class="btn-ghost">Explorer la cave</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ImgWhiteGrapeJuice from '@/assets/Whit_Grape_Juice_7000F_ss_alcool.jpeg'
import ImgMerlot from '@/assets/Merlot_2023_9000f.jpeg'
import ImgRedGrapeJuice from '@/assets/Red_Grape-Juice_7000f_ss_alcool.jpeg'
import ImgSauvignonBlanc from '@/assets/Sauvignon_blanc_8000f.jpeg'
import ImgShiraz from '@/assets/Shiraz_2023_8800f.jpeg'
import ImgSparklingWine from '@/assets/Sparkling_Wine_8500f.jpeg'

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: '2023',  label: 'Année de création' },
  { value: '6',     label: 'Références en cave' },
  { value: '1691',  label: 'Année de fondation Vredenheim' },
  { value: '4.8',   label: 'Note moyenne / 5' },
]

// ─── Vredenheim awards ────────────────────────────────────────────────────────
const awards = [
  { title: 'Solo Wine Awards — Gold',          year: '2025 · Shiraz' },
  { title: 'Veritas Wine Awards — Gold',        year: '2025 · Merlot & Shiraz' },
  { title: 'Michelangelo International — Gold', year: '2025 · Sauvignon Blanc' },
  { title: 'Mountain Wine Awards — Gold',       year: '2025 · Sauvignon Blanc' },
]

// ─── Products quick view ──────────────────────────────────────────────────────
const products = [
  { name: 'Shiraz 2023',            priceLabel: '8 800 FCFA', isAlcoholFree: false, image: ImgShiraz },
  { name: 'Merlot 2023',            priceLabel: '9 000 FCFA', isAlcoholFree: false, image: ImgMerlot },
  { name: 'Sauvignon Blanc 2025',   priceLabel: '8 000 FCFA', isAlcoholFree: false, image: ImgSauvignonBlanc },
  { name: 'Vredenvonkel 2024',      priceLabel: '8 500 FCFA', isAlcoholFree: false, image: ImgSparklingWine },
  { name: 'Jus de Raisin Blanc',    priceLabel: '7 000 FCFA', isAlcoholFree: true,  image: ImgWhiteGrapeJuice },
  { name: 'Jus de Raisin Rouge',    priceLabel: '7 000 FCFA', isAlcoholFree: true,  image: ImgRedGrapeJuice },
]

// ─── Values ───────────────────────────────────────────────────────────────────
const values = [
  {
    title: 'Authenticité',
    description: 'Chaque bouteille est tracée. Nous ne proposons que des vins Vredenheim 1691, un domaine sud-africain dont nous connaissons l\'histoire, le terroir et les méthodes de vinification depuis 1691.',
  },
  {
    title: 'Exigence',
    description: 'De la sélection à la livraison, le détail compte. Nos vins sont primés aux plus grands concours internationaux — Veritas, Michelangelo, Solo Wine Awards. Nous ne transigeons pas sur la qualité.',
  },
  {
    title: 'Accessibilité',
    description: 'Des grands crus récompensés, disponibles à Cotonou à des prix accessibles — entre 7 000 et 9 000 FCFA. Le vin de qualité n\'est pas un luxe réservé à quelques-uns.',
  },
  {
    title: 'Proximité',
    description: 'Vous n\'êtes pas un numéro de commande. Nous prenons le temps de comprendre vos goûts, votre occasion, votre budget — pour trouver la bouteille qui vous correspond.',
  },
]
</script>