<template>
  <!-- Top utility bar -->
  <!-- <div class="hidden md:block bg-[#16336a] text-white/55 text-[11px] tracking-wide border-b border-white/5">
    <div class="max-w-screen-2xl mx-auto px-8 lg:px-12 py-2.5 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <span class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5 text-[#F5C400]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 5h2l3 12h11l3-9H6"/>
          </svg>
          Livraison gratuite à Cotonou dès 30 000 FCFA
        </span>
        <span class="opacity-30">·</span>
        <span class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5 text-[#F5C400]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"/>
            <circle cx="12" cy="9" r="2.5" stroke-width="1.8"/>
          </svg>
          Cotonou · Bénin
        </span>
      </div>
      <div class="flex items-center gap-5">
        <a href="tel:+22900000000" class="hover:text-[#F5C400] transition-colors">+229 00 00 00 00</a>
        <span class="opacity-30">·</span>
        <RouterLink to="/contact" class="hover:text-[#F5C400] transition-colors">Service client</RouterLink>
      </div>
    </div>
  </div> -->

  <!-- Main header -->
  <header
    class="sticky top-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-[#22529C]/95 backdrop-blur-xl shadow-2xl shadow-[#0d214a]/40'
      : 'bg-[#22529C]'"
  >
    <nav class="max-w-screen-2xl mx-auto px-8 lg:px-12 flex items-center justify-between"
         :class="scrolled ? 'py-3' : 'py-5'">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3.5 no-underline group shrink-0">
        <div class="relative">
          <img
            src="@/assets/Logo.png"
            alt="Toman SARL"
            class="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute -inset-2 bg-[#F5C400]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="flex flex-col leading-none">
          <span class="font-display text-2xl text-white tracking-tight group-hover:text-[#F5C400] transition-colors">
            Toman
          </span>
          <span class="text-[9px] tracking-[0.35em] text-[#F5C400]/85 uppercase font-medium mt-1">
            Vins · Spiritueux
          </span>
        </div>
      </RouterLink>

      <!-- Nav links -->
      <ul class="hidden lg:flex items-center gap-9 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-[13px] text-white/80 hover:text-white tracking-wide relative no-underline font-medium uppercase transition-colors"
            active-class="!text-[#F5C400]"
          >
            <span class="relative">
              {{ link.label }}
              <span class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-px w-0 bg-[#F5C400] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </RouterLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-2">

        <!-- Search -->
        <!-- <button
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-[#F5C400] hover:bg-white/5 transition-all"
          @click="searchOpen = !searchOpen"
          aria-label="Rechercher"
        >
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
        </button> -->

        <!-- Account -->
        <!-- <RouterLink
          to="/compte"
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-[#F5C400] hover:bg-white/5 transition-all no-underline"
          aria-label="Mon compte"
        >
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          </svg>
        </RouterLink> -->

        <!-- Wishlist -->
        <!-- <RouterLink
          to="/favoris"
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-[#F5C400] hover:bg-white/5 transition-all no-underline"
          aria-label="Favoris"
        >
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </RouterLink> -->

        <!-- Cart -->
        <!-- <RouterLink
          to="/panier"
          class="ml-2 group flex items-center gap-2.5 px-4 py-2.5 bg-[#F5C400] hover:bg-[#fde08a] text-[#16336a] text-[13px] font-bold rounded-sm transition-all no-underline relative shadow-lg shadow-[#F5C400]/25 hover:shadow-[#F5C400]/40 hover:-translate-y-0.5"
        >
          <svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="hidden sm:inline tracking-wide">Panier</span>
          <span
            v-if="cartCount > 0"
            class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 bg-[#16336a] text-[#F5C400] text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#22529C]"
          >
            {{ cartCount }}
          </span>
        </RouterLink> -->

        <!-- Burger -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-2 ml-1 text-white/80 hover:text-[#F5C400] transition-colors"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-6 h-px bg-current transition-all duration-300" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </nav>

    <!-- Search dropdown -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="searchOpen" class="border-t border-white/10 bg-[#1a3f7a]">
        <div class="max-w-screen-2xl mx-auto px-8 lg:px-12 py-5">
          <div class="relative max-w-2xl mx-auto">
            <svg class="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un domaine, un cépage, une région…"
              autofocus
              class="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/15 focus:border-[#F5C400] outline-none rounded-sm text-white placeholder-white/35 text-sm transition-colors"
              @keyup.enter="handleSearch"
            />
          </div>
          <div class="flex items-center gap-3 mt-3 text-xs text-white/40 max-w-2xl mx-auto">
            <span>Suggestions :</span>
            <button v-for="tag in searchSuggestions" :key="tag" class="px-3 py-1 border border-white/15 rounded-full hover:border-[#F5C400]/60 hover:text-[#F5C400] transition-colors">{{ tag }}</button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="lg:hidden bg-[#1a3f7a] border-t border-white/10">
        <div class="px-6 py-2 flex flex-col">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="py-3.5 border-b border-white/8 text-white/80 hover:text-[#F5C400] text-sm tracking-wider uppercase font-medium no-underline transition-colors flex items-center justify-between"
            active-class="!text-[#F5C400]"
            @click="menuOpen = false"
          >
            {{ link.label }}
            <svg class="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </RouterLink>
          <!-- <div class="py-4 grid grid-cols-2 gap-2">
            <RouterLink to="/compte" @click="menuOpen = false" class="py-3 text-center border border-white/15 text-white/80 text-xs uppercase tracking-wider rounded-sm no-underline">Mon compte</RouterLink>
            <RouterLink to="/contact" @click="menuOpen = false" class="py-3 text-center border border-white/15 text-white/80 text-xs uppercase tracking-wider rounded-sm no-underline">Contact</RouterLink>
          </div> -->
        </div>
      </div>
    </transition>
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
  // { to: '/selections', label: 'Sélections' },
  { to: '/about', label: 'Maison' },
  { to: '/contact', label: 'Contact' },
]

const searchSuggestions = ['Bordeaux', 'Champagne', 'Bourgogne', 'Sans alcool', 'Coffrets']

function onScroll() { scrolled.value = window.scrollY > 30 }

function handleSearch() {
  if (searchQuery.value.trim()) {
    searchOpen.value = false
    searchQuery.value = ''
  }
}

onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
