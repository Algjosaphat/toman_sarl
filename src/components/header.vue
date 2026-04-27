<template>
  <!-- Barre top -->
  <div class="hidden md:flex justify-end items-center px-10 py-2 bg-[#1a3f7a] text-white/60 text-xs gap-6 border-b border-white/10">
    <span>📦 Livraison partout au Bénin</span>
    <span>|</span>
    <span>🇧🇯 Cotonou & environs</span>
    <span>|</span>
    <RouterLink to="/contact" class="hover:text-[#F5C400] transition-colors no-underline">Nous contacter</RouterLink>
  </div>

  <!-- Header principal -->
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-[#22529C]/95 backdrop-blur-md shadow-xl shadow-black/30'
      : 'bg-[#22529C]'"
  >
    <nav class="flex items-center justify-between px-10 py-3 max-w-screen-xl mx-auto">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 no-underline group">
        <img
            src="@/assets/Logo.png"
            alt="Logo Toman SARL"
            class="h-12 w-auto object-contain"
        />
        <div class="flex flex-col leading-none">
            <span class="font-serif text-xl text-white tracking-wide group-hover:text-[#F5C400] transition-colors">
            Toman SARL
            </span>
            <span class="text-[10px] tracking-[0.25em] text-[#F5C400]/80 uppercase font-medium">
            Vins 
            <!-- & Spiritueux -->
            </span>
        </div>
       </RouterLink>

      <!-- Nav liens — desktop -->
      <ul class="hidden lg:flex items-center gap-8 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-sm text-white/75 hover:text-[#F5C400] transition-colors tracking-wide relative group no-underline"
            active-class="!text-[#F5C400]"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 h-px w-0 bg-[#F5C400] group-hover:w-full transition-all duration-300"></span>
          </RouterLink>
        </li>
      </ul>

      <!-- Actions droite -->
      <div class="flex items-center gap-3">

        <!-- Recherche -->
        <button
          class="hidden md:flex items-center gap-2 px-3 py-2 rounded border border-white/20 text-white/60 hover:border-[#F5C400]/60 hover:text-[#F5C400] text-sm transition-all"
          @click="searchOpen = !searchOpen"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
          <span class="text-xs">Rechercher…</span>
        </button>

        <!-- Compte -->
        <RouterLink
          to="/compte"
          class="hidden md:flex items-center justify-center w-9 h-9 rounded border border-white/20 hover:border-[#F5C400]/60 text-white/60 hover:text-[#F5C400] transition-all no-underline"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          </svg>
        </RouterLink>

        <!-- Panier -->
        <RouterLink
          to="/panier"
          class="flex items-center gap-2 px-4 py-2 bg-[#F5C400] hover:bg-[#e0b300] rounded text-[#22529C] text-sm font-bold transition-colors no-underline relative"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="hidden sm:inline">Panier</span>
          <span
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
          >
            {{ cartCount }}
          </span>
        </RouterLink>

        <!-- Burger mobile -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-2 text-white/70 hover:text-[#F5C400] transition-colors"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </nav>

    <!-- Barre de recherche déroulante -->
    <div v-if="searchOpen" class="px-10 pb-4 max-w-screen-xl mx-auto">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un vin, une région, un domaine…"
        autofocus
        class="w-full px-5 py-3 bg-white/10 border border-white/20 focus:border-[#F5C400] outline-none rounded text-white placeholder-white/30 text-sm"
        @keyup.enter="handleSearch"
      />
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="lg:hidden bg-[#1a3f7a] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="py-3 border-b border-white/10 text-white/70 hover:text-[#F5C400] text-sm tracking-wide no-underline transition-colors"
        active-class="!text-[#F5C400]"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
      <!-- <RouterLink
        to="/compte"
        class="pt-3 text-white/70 hover:text-[#F5C400] text-sm no-underline transition-colors"
        @click="menuOpen = false"
      >
        Mon compte
      </RouterLink> -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const cartCount = ref(2)

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/shop', label: 'La Cave' },
  { to: '/shop?categorie=sans-alcool', label: 'Sans Alcool' },
  { to: '/selections', label: 'Sélections' },
  { to: '/about', label: 'Notre Histoire' },
]

function onScroll() { scrolled.value = window.scrollY > 40 }

function handleSearch() {
  if (searchQuery.value.trim()) {
    console.log('Recherche :', searchQuery.value)
    searchOpen.value = false
    searchQuery.value = ''
  }
}

onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>