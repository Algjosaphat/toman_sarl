<template>
  <header
    class="sticky top-0 z-50 transition-all duration-500 w-full"
    :class="scrolled
      ? 'bg-[#22529C]/95 backdrop-blur-xl shadow-xl shadow-[#0d214a]/30'
      : 'bg-[#22529C]'"
  >
    <nav
      class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4"
      :class="scrolled ? 'py-2.5' : 'py-3 lg:py-4'"
    >

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2.5 sm:gap-3 no-underline group shrink-0 min-w-0">
        <img
          src="@/assets/Logo.png"
          alt="Toman SARL"
          class="h-9 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 shrink-0"
        />
        <div class="flex flex-col leading-none min-w-0">
          <span class="font-display text-lg sm:text-xl lg:text-2xl text-white tracking-tight group-hover:text-[#F5C400] transition-colors truncate">
            Toman SARL
          </span>
          <span class="hidden sm:block text-[8px] sm:text-[9px] tracking-[0.3em] text-[#F5C400] uppercase font-semibold mt-1">
            Vins · Stellenbosch
          </span>
        </div>
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden lg:flex items-center gap-8 xl:gap-10 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="group/nav text-[13px] text-white tracking-wide relative no-underline font-medium uppercase transition-colors py-2"
            active-class="!text-[#F5C400]"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px w-0 bg-[#F5C400] transition-all duration-500 group-hover/nav:w-full"></span>
          </RouterLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-2 sm:gap-3">

        <!-- WhatsApp CTA (desktop only) -->
        <a
          href="https://wa.me/22966653864"
          target="_blank"
          rel="noopener"
          class="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-[#F5C400] hover:bg-[#fde08a] text-[#16336a] text-[12px] font-bold tracking-wider uppercase rounded-sm transition-all shadow-lg shadow-[#F5C400]/25 hover:shadow-[#F5C400]/40 hover:-translate-y-0.5 no-underline"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
          <span>Commander</span>
        </a>

        <!-- Burger -->
        <button
          class="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#F5C400] transition-colors"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
          :aria-expanded="menuOpen"
        >
          <div class="relative w-6 h-5">
            <span class="absolute left-0 top-0 w-6 h-0.5 bg-current transition-all duration-300" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
            <span class="absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''"></span>
            <span class="absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile menu (full slide-down) -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="menuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-[#16336a] border-t border-white/10 shadow-2xl shadow-black/40 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div class="px-5 sm:px-6 py-3">

          <!-- Mobile nav -->
          <ul class="flex flex-col list-none m-0 p-0">
            <li v-for="link in navLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="flex items-center justify-between py-4 border-b border-white/8 text-white text-base font-medium tracking-wide uppercase no-underline transition-colors hover:text-[#F5C400]"
                active-class="!text-[#F5C400]"
                @click="menuOpen = false"
              >
                <span>{{ link.label }}</span>
                <svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </RouterLink>
            </li>
          </ul>

          <!-- Mobile CTA + contact info -->
          <div class="py-5 space-y-3">
            <a
              href="https://wa.me/22966653864"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-[#F5C400] hover:bg-[#fde08a] text-[#16336a] text-sm font-bold tracking-wider uppercase rounded-sm transition-all shadow-lg no-underline"
              @click="menuOpen = false"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
              Commander sur WhatsApp
            </a>

            <a
              href="tel:+2290166629634"
              class="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/20 text-white text-sm tracking-wide rounded-sm transition-all hover:border-[#F5C400] hover:text-[#F5C400] no-underline"
              @click="menuOpen = false"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +229 01 66 62 96 34
            </a>
          </div>

          <!-- Mobile footer info -->
          <div class="border-t border-white/10 py-4 flex items-center justify-between text-[10px] tracking-widest uppercase text-white/45">
            <span>Cotonou · Bénin</span>
            <span>Lun – Sam · 09h – 21h</span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { to: '/',        label: 'Accueil' },
  { to: '/shop',    label: 'La Cave' },
  { to: '/about',   label: 'La Maison' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() { scrolled.value = window.scrollY > 30 }

onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
