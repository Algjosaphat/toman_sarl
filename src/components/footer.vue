<template>
  <footer class="relative bg-[#0d214a] text-white/65 overflow-hidden">

    <!-- Decorative top border -->
    <div class="h-px bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent"></div>

    <!-- Background decoration -->
    <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#22529C]/30 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F5C400]/5 blur-3xl pointer-events-none"></div>

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-12 pt-20 pb-8">

      <!-- Top: brand pitch -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-14 mb-14 border-b border-white/8">
        <div class="max-w-xl">
          <span class="eyebrow !text-[#F5C400]">Maison Toman · Depuis 2023</span>
          <h2 class="font-display text-4xl md:text-5xl text-white leading-[1.1] mt-3">
            L'art du vin,<br/>
            <span class="italic text-[#F5C400]">à la béninoise.</span>
          </h2>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/contact" class="btn-primary">
            Prendre rendez-vous
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

        <!-- Brand column -->
        <div class="col-span-2 lg:col-span-4 lg:pr-8">
          <div class="flex items-center gap-3 mb-6">
            <img src="@/assets/Logo.png" alt="Toman SARL" class="h-12 w-auto"/>
            <div class="flex flex-col leading-none">
              <span class="font-display text-xl text-white">Toman SARL</span>
              <span class="text-[10px] tracking-[0.3em] text-[#F5C400]/85 uppercase mt-1">Vins & Spiritueux</span>
            </div>
          </div>

          <p class="text-sm leading-relaxed text-white/65 mb-5">
            Caviste de référence à Cotonou. Sélection d'exception de vins fins, spiritueux rares et boissons sans alcool, livrés avec soin partout au Bénin.
          </p>

          <div class="flex items-center gap-2 text-xs text-white/40 mb-6">
            <span class="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">RCCM RB/COT/23-B-35651</span>
            <span class="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">IFU 320236107117766</span>
          </div>

          <div class="flex items-center gap-2.5">
            <a v-for="s in socials" :key="s.label"
              :href="s.url"
              target="_blank" rel="noopener" :aria-label="s.label"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:border-[#F5C400] hover:bg-[#F5C400]/10 hover:text-[#F5C400] transition-all"
            >
              <span v-html="s.icon"></span>
            </a>
          </div>
        </div>

        <!-- Cave -->
        <div class="lg:col-span-2">
          <h4 class="text-[11px] tracking-[0.25em] uppercase text-[#F5C400] mb-5 font-semibold">La Cave</h4>
          <ul class="flex flex-col gap-3 list-none p-0 m-0">
            <li v-for="link in shopLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-white/65 hover:text-white transition-colors no-underline link-grow">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Maison -->
        <div class="lg:col-span-2">
          <h4 class="text-[11px] tracking-[0.25em] uppercase text-[#F5C400] mb-5 font-semibold">La Maison</h4>
          <ul class="flex flex-col gap-3 list-none p-0 m-0">
            <li v-for="link in infoLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-white/65 hover:text-white transition-colors no-underline link-grow">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-2 lg:col-span-4">
          <h4 class="text-[11px] tracking-[0.25em] uppercase text-[#F5C400] mb-5 font-semibold">Nous joindre</h4>
          <ul class="flex flex-col gap-4 list-none p-0 m-0 text-sm">
            <li class="flex items-start gap-3 text-white/65">
              <span class="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5C400]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"/>
                  <circle cx="12" cy="9" r="2.5" stroke-width="1.8"/>
                </svg>
              </span>
              <div>
                <p class="text-white">Boutique principale</p>
                <p class="text-xs text-white/45">Cotonou, Bénin</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5C400]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                </svg>
              </span>
              <a href="mailto:contact@tomansarl.bj" class="text-white/65 hover:text-[#F5C400] transition-colors no-underline">
                contact@tomansarl.bj
              </a>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5C400]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div class="flex flex-col">
                <a href="tel:+22900000000" class="text-white/65 hover:text-[#F5C400] transition-colors no-underline">+229 00 00 00 00</a>
                <a href="https://wa.me/22900000000" target="_blank" class="text-xs text-[#F5C400]/70 hover:text-[#F5C400] transition-colors no-underline">WhatsApp disponible</a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5C400]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <circle cx="12" cy="12" r="9"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/>
                </svg>
              </span>
              <div class="text-xs text-white/55">
                <p class="text-white text-sm mb-0.5">Lun – Sam : 09h – 21h</p>
                <p>Dimanche : sur rendez-vous</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Trust badges -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pb-10 border-b border-white/8">
        <div v-for="item in trust" :key="item.label" class="flex items-center gap-3">
          <div class="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#F5C400]/10 text-[#F5C400] border border-[#F5C400]/20">
            <span v-html="item.icon"></span>
          </div>
          <div>
            <p class="text-white text-sm font-medium">{{ item.label }}</p>
            <p class="text-xs text-white/40">{{ item.sub }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-xs">
        <p class="text-white/40 m-0">© {{ currentYear }} Toman SARL — Tous droits réservés.</p>

        <p class="text-white/35 max-w-md text-center order-3 lg:order-2">
          L'abus d'alcool est dangereux pour la santé. À consommer avec modération. Vente interdite aux mineurs.
        </p>

        <div class="flex flex-wrap gap-x-5 gap-y-2 order-2 lg:order-3">
          <RouterLink to="/mentions-legales" class="text-white/40 hover:text-[#F5C400] transition-colors no-underline">Mentions légales</RouterLink>
          <RouterLink to="/confidentialite" class="text-white/40 hover:text-[#F5C400] transition-colors no-underline">Confidentialité</RouterLink>
          <RouterLink to="/cgv" class="text-white/40 hover:text-[#F5C400] transition-colors no-underline">CGV</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  { label: 'Instagram', url: 'https://instagram.com', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>' },
  { label: 'Facebook',  url: 'https://facebook.com',  icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>' },
  { label: 'WhatsApp',  url: 'https://wa.me/22900000000', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' },
  { label: 'TikTok',    url: 'https://tiktok.com',    icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.65a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.08z"/></svg>' },
]

const trust = [
  { label: 'Authenticité garantie', sub: 'Vins issus de domaines reconnus', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>' },
  { label: 'Livraison soignée',     sub: 'Cotonou & environs',              icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 5h2l3 12h11l3-9H6"/></svg>' },
  { label: 'Paiement sécurisé',     sub: 'Carte, Mobile Money, espèces',    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18"/></svg>' },
  { label: 'Conseil sommelier',     sub: 'Sur demande, gratuit',            icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
]

const shopLinks = [
  { to: '/shop',                       label: 'Tous les vins' },
  { to: '/shop?categorie=rouge',       label: 'Vins Rouges' },
  { to: '/shop?categorie=blanc',       label: 'Vins Blancs' },
  { to: '/shop?categorie=rose',        label: 'Vins Rosés' },
  { to: '/shop?categorie=champagne',   label: 'Champagnes' },
  { to: '/shop?categorie=sans-alcool', label: 'Sans Alcool' },
  { to: '/selections',                 label: 'Coffrets cadeaux' },
]

const infoLinks = [
  { to: '/about',         label: 'Notre Histoire' },
  { to: '/sommelier',     label: 'Notre Sommelier' },
  { to: '/livraison',     label: 'Livraison & Retours' },
  { to: '/faq',           label: 'Foire aux questions' },
  { to: '/blog',          label: 'Le Journal' },
  { to: '/professionnel', label: 'Professionnels' },
  { to: '/contact',       label: 'Nous Contacter' },
]
</script>
