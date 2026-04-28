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
          <h1 class="font-display text-white leading-[1.02] mb-8" style="font-size: clamp(3rem, 7vw, 5.5rem);">
            Une passion,<br/>
            <span class="italic text-gradient-gold">un savoir-faire,</span><br/>
            une histoire.
          </h1>
          <p class="text-xl text-white/75 leading-relaxed max-w-2xl font-light">
            Toman SARL n'est pas qu'un caviste. C'est l'histoire d'une famille qui voulait apporter, au cœur de Cotonou, l'âme et l'élégance des plus belles caves du monde.
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
            <img src="@/assets/image2.jpeg" alt="" class="w-full h-full object-cover"/>
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
              Tout commence en 2023, dans un petit local de Cotonou. Une idée simple : et si l'on pouvait offrir aux Béninois la même qualité, le même conseil, la même attention que dans les grandes maisons européennes ?
            </p>
            <p>
              Pendant des années, nous avons constaté un manque. Trouver une bouteille d'exception au Bénin relevait souvent du parcours du combattant. Les références étaient rares, les conseils inexistants, les conditions de conservation aléatoires.
            </p>
            <p>
              Toman SARL est née de cette conviction : l'amateur béninois mérite mieux. Nous avons construit notre cave bouteille par bouteille, en travaillant en direct avec des domaines, des importateurs de confiance, et en imposant à chaque étape les standards d'une grande maison.
            </p>
            <p>
              Trois ans plus tard, nous sommes fiers d'être devenus une référence — pas seulement par notre catalogue, mais par la relation que nous tissons avec chaque client.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">Nos valeurs</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
            Quatre principes,
            <span class="italic text-[#22529C]">un cap.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
          <div v-for="(v, i) in values" :key="v.title" class="bg-white p-10 group hover:bg-[#fbf8f3] transition-colors">
            <p class="font-display text-5xl text-[#F5C400] mb-6 leading-none">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="font-display text-2xl text-[#16336a] mb-3">{{ v.title }}</h3>
            <p class="text-sm text-stone-600 leading-relaxed">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-24 lg:py-32 bg-[#fbf8f3]">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div class="max-w-2xl">
            <span class="eyebrow">L'équipe</span>
            <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2">
              Les visages de
              <span class="italic text-[#22529C]">la maison.</span>
            </h2>
          </div>
          <p class="text-stone-600 max-w-md">
            Une équipe restreinte, soudée par la passion du vin et le respect du client.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(member, i) in team" :key="member.name" class="group">
            <div class="relative aspect-[4/5] overflow-hidden mb-5 rounded-sm">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a]/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-5 left-5 right-5 flex items-center gap-2">
                <span class="w-8 h-px bg-[#F5C400]"></span>
                <span class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
            </div>
            <h3 class="font-display text-2xl text-[#16336a] mb-1">{{ member.name }}</h3>
            <p class="text-sm text-[#b88d00] uppercase tracking-[0.2em] font-medium mb-3">{{ member.role }}</p>
            <p class="text-stone-600 text-sm leading-relaxed">{{ member.bio }}</p>
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
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </RouterLink>
          <RouterLink to="/shop" class="btn-ghost">Explorer la cave</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Image from "../assets/image.jpeg"
import Image1 from "../assets/image1.jpeg"
import Image2 from "../assets/image2.jpeg"
import Image3 from "../assets/image3.jpeg"

const stats = [
  { value: '2023', label: 'Année de création' },
  { value: '200+', label: 'Références en cave' },
  { value: '12',   label: 'Pays partenaires' },
  { value: '4.9',  label: 'Note moyenne / 5' },
]

const values = [
  { title: 'Authenticité', description: 'Chaque bouteille est tracée. Nous ne référençons que des vins dont nous connaissons l\'origine, le domaine, et l\'histoire.' },
  { title: 'Exigence',     description: 'De la sélection à la livraison, le détail compte. Nous ne transigeons pas sur la qualité, ni sur le service.' },
  { title: 'Pédagogie',    description: 'Le vin est culture. Notre rôle est de partager, d\'expliquer, d\'ouvrir des portes — pas de jargonner.' },
  { title: 'Proximité',    description: 'Vous n\'êtes pas un numéro de commande. Vous êtes une personne, avec un goût, un budget, un projet.' },
]

const team = [
  { name: 'Sébastien Toman', role: 'Fondateur · Chef de cave', bio: '15 ans dans le négoce du vin entre Bordeaux et Paris. Passionné de cépages méditerranéens.', image: Image1 },
  { name: 'Aminata Diop',    role: 'Responsable boutique',     bio: 'L\'âme de la boutique. Conseille avec justesse, écoute avec patience, recommande avec audace.', image: Image2 },
  { name: 'Mathieu Adjovi',  role: 'Logistique & livraisons',  bio: 'Le métronome de la maison. Vos bouteilles arrivent intactes, à l\'heure, toujours.', image: Image3 },
]
</script>
