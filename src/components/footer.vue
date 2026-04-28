<template>
  <footer class="bg-[#1a3f7a] text-white/60 pt-16 pb-8 border-t border-white/10">
    <div class="max-w-screen-xl mx-auto px-10">

      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <!-- Col 1 — Marque -->
        <div class="lg:col-span-1">
          <!-- Logo -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                <circle cx="24" cy="24" r="22" stroke="#F5C400" stroke-width="2.5" fill="none"/>
                <path d="M10 14 Q24 4 38 14" stroke="#F5C400" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M12 12 L24 34 L36 12" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="24" y1="8" x2="24" y2="20" stroke="#F5C400" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-serif text-lg text-white" style="font-family: 'Playfair Display', serif;">Toman SARL</span>
              <span class="text-[10px] tracking-[0.25em] text-[#F5C400]/80 uppercase">Vins & Spiritueux</span>
            </div>
          </div>

          <p class="text-sm leading-relaxed mb-2">
            Votre caviste de confiance au Bénin. Sélection de vins avec et sans alcool, livrés partout à Cotonou.
          </p>
          <p class="text-xs text-white/30 mb-6">
            RCCM RB/COT/23-B-35651 · IFU 320236107117766
          </p>

          <!-- Réseaux -->
          <div class="flex gap-3">
            <a
              v-for="s in socials" :key="s.label" :href="s.url"
              target="_blank" rel="noopener" :aria-label="s.label"
              class="w-9 h-9 flex items-center justify-center rounded border border-white/15 hover:border-[#F5C400] hover:text-[#F5C400] transition-all"
            >
              <span class="text-base">{{ s.emoji }}</span>
            </a>
          </div>
        </div>

        <!-- Col 2 — La Cave -->
        <div>
          <h4 class="text-xs tracking-[0.2em] uppercase text-[#F5C400] mb-5 font-semibold">La Cave</h4>
          <ul class="flex flex-col gap-3 list-none p-0 m-0">
            <li v-for="link in shopLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm hover:text-[#F5C400] transition-colors no-underline">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3 — Informations -->
        <div>
          <h4 class="text-xs tracking-[0.2em] uppercase text-[#F5C400] mb-5 font-semibold">Informations</h4>
          <ul class="flex flex-col gap-3 list-none p-0 m-0">
            <li v-for="link in infoLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm hover:text-[#F5C400] transition-colors no-underline">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 4 — Contact -->
        <div>
          <h4 class="text-xs tracking-[0.2em] uppercase text-[#F5C400] mb-5 font-semibold">Contact</h4>
          <ul class="flex flex-col gap-4 list-none p-0 m-0 text-sm">
            <li class="flex items-start gap-3">
              <!-- <span class="text-[#F5C400] mt-0.5">📍</span> -->
              <span>Cotonou, Bénin</span>
            </li>
            <li class="flex items-center gap-3">
              <!-- <span class="text-[#F5C400]">✉️</span> -->
              <a href="mailto:contact@tomansarl.bj" class="hover:text-[#F5C400] transition-colors no-underline">
                contact@tomansarl.bj
              </a>
            </li>
            <li class="flex items-center gap-3">
              <!-- <span class="text-[#F5C400]">📞</span> -->
              <a href="tel:+22900000000" class="hover:text-[#F5C400] transition-colors no-underline">
                +229 00 00 00 00
              </a>
            </li>
            <li class="flex items-center gap-3">
              <!-- <span class="text-[#F5C400]">💬</span> -->
              <a href="https://wa.me/22900000000" target="_blank" class="hover:text-[#F5C400] transition-colors no-underline">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bas de page -->
      <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <p class="m-0">© {{ currentYear }} Toman SARL — Tous droits réservés</p>

        <div class="flex items-center gap-2 text-white/20 text-center max-w-sm">
          <!-- <span class="text-[#F5C400]/60">⚠️</span> -->
          <span>L'abus d'alcool est dangereux pour la santé. À consommer avec modération. Vente interdite aux mineurs.</span>
        </div>

        <div class="flex gap-4">
          <RouterLink to="/mentions-legales" class="hover:text-[#F5C400] transition-colors no-underline">Mentions légales</RouterLink>
          <RouterLink to="/confidentialite" class="hover:text-[#F5C400] transition-colors no-underline">Confidentialité</RouterLink>
          <RouterLink to="/cgv" class="hover:text-[#F5C400] transition-colors no-underline">CGV</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  { label: 'Facebook', url: 'https://facebook.com',  emoji: '.' },
  { label: 'Instagram', url: 'https://instagram.com', emoji: '.' },
  { label: 'WhatsApp', url: 'https://wa.me/22900000000', emoji: '.' },
]

const shopLinks = [
  { to: '/shop', label: 'Tous les vins' },
  { to: '/shop?categorie=rouge', label: 'Vins Rouges' },
  { to: '/shop?categorie=blanc', label: 'Vins Blancs' },
  { to: '/shop?categorie=rose', label: 'Vins Rosés' },
  { to: '/shop?categorie=sans-alcool', label: 'Sans Alcool' },
  { to: '/selections', label: 'Nos Sélections' },
]

const infoLinks = [
  { to: '/about', label: 'Notre Histoire' },
  { to: '/livraison', label: 'Livraison & Retours' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Le Blog du Vin' },
  { to: '/contact', label: 'Nous Contacter' },
]
</script>