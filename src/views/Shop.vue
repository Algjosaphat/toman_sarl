<template>
  <main class="bg-[#fbf8f3] min-h-screen">

    <!-- Page header -->
    <section class="relative bg-[#0d214a] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/image2.jpeg" alt="" class="w-full h-full object-cover opacity-15"/>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0d214a]/95 via-[#0d214a]/85 to-[#0d214a]"></div>
      </div>
      <div class="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#F5C400]/8 blur-3xl pointer-events-none"></div>

      <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="flex items-center gap-2 text-[11px] tracking-widest uppercase text-white/45 mb-6">
          <RouterLink to="/" class="hover:text-[#F5C400] transition-colors no-underline">Accueil</RouterLink>
          <span>›</span>
          <span class="text-[#F5C400]">La Cave</span>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span class="eyebrow !text-[#F5C400]">Toute la cave</span>
            <h1 class="font-display text-white leading-[1.05] mt-2" style="font-size: clamp(2.5rem, 6vw, 4.5rem);">
              {{ pageTitle }}
            </h1>
            <p class="text-white/70 max-w-xl mt-4 leading-relaxed">
              {{ filteredWines.length }} référence{{ filteredWines.length > 1 ? 's' : '' }} sélectionnée{{ filteredWines.length > 1 ? 's' : '' }} avec soin par notre chef de cave.
            </p>
          </div>

          <!-- Sort -->
          <div class="flex items-center gap-3">
            <label class="text-white/50 text-xs uppercase tracking-widest">Trier</label>
            <div class="relative">
              <select v-model="sortBy" class="appearance-none bg-white/8 border border-white/15 hover:border-[#F5C400]/60 text-white text-sm pl-4 pr-10 py-2.5 rounded-sm backdrop-blur-sm cursor-pointer focus:outline-none focus:border-[#F5C400] transition-colors">
                <option value="featured" class="bg-[#0d214a]">Recommandés</option>
                <option value="price-asc" class="bg-[#0d214a]">Prix croissant</option>
                <option value="price-desc" class="bg-[#0d214a]">Prix décroissant</option>
                <option value="name" class="bg-[#0d214a]">Nom (A → Z)</option>
                <option value="rating" class="bg-[#0d214a]">Mieux notés</option>
              </select>
              <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-screen-2xl mx-auto px-8 lg:px-20 py-12 lg:py-16">
      <div class="grid lg:grid-cols-12 gap-10">

        <!-- Sidebar filters -->
        <aside class="lg:col-span-3">
          <div class="lg:sticky lg:top-28">
            <button
              class="lg:hidden w-full mb-4 flex items-center justify-between px-5 py-3 bg-white border border-stone-200 rounded-sm text-[#16336a] font-medium text-sm"
              @click="filtersOpen = !filtersOpen"
            >
              <span>Filtres ({{ activeFilterCount }})</span>
              <svg class="w-4 h-4 transition-transform" :class="filtersOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div :class="filtersOpen ? 'block' : 'hidden lg:block'">

              <!-- Category -->
              <div class="bg-white border border-stone-200 rounded-sm p-6 mb-4">
                <h3 class="font-display text-lg text-[#16336a] mb-4">Catégorie</h3>
                <div class="flex flex-col gap-2">
                  <button
                    v-for="cat in categories"
                    :key="cat.value"
                    @click="selectedCategory = cat.value"
                    class="flex items-center justify-between px-3 py-2 rounded-sm text-sm transition-colors text-left"
                    :class="selectedCategory === cat.value
                      ? 'bg-[#22529C] text-white'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-[#22529C]'"
                  >
                    <span>{{ cat.label }}</span>
                    <span class="text-xs opacity-60">{{ countByCategory(cat.value) }}</span>
                  </button>
                </div>
              </div>

              <!-- Price -->
              <div class="bg-white border border-stone-200 rounded-sm p-6 mb-4">
                <h3 class="font-display text-lg text-[#16336a] mb-4">Prix</h3>
                <div class="flex flex-col gap-2">
                  <label v-for="range in priceRanges" :key="range.label" class="flex items-center gap-3 text-sm cursor-pointer group">
                    <input type="radio" v-model="selectedPrice" :value="range.value" class="w-4 h-4 accent-[#22529C]"/>
                    <span class="text-stone-600 group-hover:text-[#22529C] transition-colors">{{ range.label }}</span>
                  </label>
                </div>
              </div>

              <!-- Region -->
              <div class="bg-white border border-stone-200 rounded-sm p-6 mb-4">
                <h3 class="font-display text-lg text-[#16336a] mb-4">Région</h3>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="r in regions"
                    :key="r"
                    @click="toggleRegion(r)"
                    class="px-3 py-1.5 text-xs rounded-full border transition-all"
                    :class="selectedRegions.includes(r)
                      ? 'bg-[#16336a] text-white border-[#16336a]'
                      : 'border-stone-300 text-stone-600 hover:border-[#22529C]'"
                  >
                    {{ r }}
                  </button>
                </div>
              </div>

              <!-- Reset -->
              <button v-if="activeFilterCount > 0" @click="resetFilters" class="w-full text-center py-3 text-xs uppercase tracking-widest text-stone-500 hover:text-[#22529C] transition-colors">
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </aside>

        <!-- Products grid -->
        <div class="lg:col-span-9">

          <!-- Active filter pills -->
          <div v-if="activeFilterCount > 0" class="flex flex-wrap items-center gap-2 mb-6">
            <span class="text-xs uppercase tracking-widest text-stone-500">Filtres actifs :</span>
            <button v-if="selectedCategory !== 'all'" @click="selectedCategory = 'all'" class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22529C] text-white text-xs rounded-full">
              {{ categories.find(c => c.value === selectedCategory)?.label }}
              <span>×</span>
            </button>
            <button v-if="selectedPrice !== 'all'" @click="selectedPrice = 'all'" class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22529C] text-white text-xs rounded-full">
              {{ priceRanges.find(p => p.value === selectedPrice)?.label }}
              <span>×</span>
            </button>
            <button v-for="r in selectedRegions" :key="r" @click="toggleRegion(r)" class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22529C] text-white text-xs rounded-full">
              {{ r }}
              <span>×</span>
            </button>
          </div>

          <!-- Empty state -->
          <div v-if="filteredWines.length === 0" class="bg-white border border-stone-200 rounded-sm p-16 text-center">
            <div class="font-display text-5xl text-stone-300 mb-3">∅</div>
            <h3 class="font-display text-2xl text-[#16336a] mb-2">Aucune bouteille ne correspond</h3>
            <p class="text-stone-500 mb-6">Essayez d'élargir vos critères de recherche.</p>
            <button @click="resetFilters" class="btn-primary !text-[#16336a]">Réinitialiser</button>
          </div>

          <!-- Grid -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <WineCard
              v-for="wine in sortedWines"
              :key="wine.id"
              :wine="wine"
              @add-to-cart="handleAddToCart"
            />
          </div>

          <!-- Pagination (mock) -->
          <div v-if="filteredWines.length > 0" class="mt-12 flex items-center justify-center gap-2">
            <button class="w-10 h-10 flex items-center justify-center border border-stone-200 hover:border-[#22529C] hover:text-[#22529C] transition-colors rounded-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button v-for="n in 3" :key="n" class="w-10 h-10 flex items-center justify-center text-sm rounded-sm transition-colors"
                    :class="n === 1 ? 'bg-[#22529C] text-white' : 'border border-stone-200 hover:border-[#22529C] hover:text-[#22529C]'">
              {{ n }}
            </button>
            <span class="text-stone-400 px-2">…</span>
            <button class="w-10 h-10 flex items-center justify-center border border-stone-200 hover:border-[#22529C] hover:text-[#22529C] transition-colors rounded-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import WineCard from '../components/ui/WineCard.vue'
import Image from "../assets/image.jpeg"
import Image1 from "../assets/image1.jpeg"
import Image2 from "../assets/image2.jpeg"
import Image3 from "../assets/image3.jpeg"

const route = useRoute()

const filtersOpen = ref(false)
const sortBy = ref('featured')
const selectedCategory = ref(route.query.categorie || 'all')
const selectedPrice = ref('all')
const selectedRegions = ref([])

watch(() => route.query.categorie, (v) => { if (v) selectedCategory.value = v })

const categories = [
  { value: 'all',         label: 'Tous les vins' },
  { value: 'rouge',       label: 'Vins Rouges' },
  { value: 'blanc',       label: 'Vins Blancs' },
  { value: 'rose',        label: 'Vins Rosés' },
  { value: 'champagne',   label: 'Champagnes' },
  { value: 'sans-alcool', label: 'Sans Alcool' },
]

const priceRanges = [
  { value: 'all',  label: 'Tous les prix' },
  { value: '0-15000',     label: 'Moins de 15 000 FCFA' },
  { value: '15000-30000', label: '15 000 – 30 000 FCFA' },
  { value: '30000-60000', label: '30 000 – 60 000 FCFA' },
  { value: '60000-9999999', label: 'Plus de 60 000 FCFA' },
]

const regions = ['Bordeaux', 'Bourgogne', 'Loire', 'Provence', 'Champagne', 'Rioja', 'Toscane', 'Espagne']

const wines = [
  { id: 1,  name: 'Château Margaux',     region: 'Bordeaux',  vintage: '2018', type: 'Rouge · 750ml', price: 189000, isAlcoholFree: false, image: Image1, badge: 'Coup de cœur', rating: '4.9', cat: 'rouge' },
  { id: 2,  name: 'Natureo Muscat',      region: 'Espagne',   vintage: '2023', type: 'Sans alcool',   price: 8500,   isAlcoholFree: true,  image: Image2, badge: 'Sans alcool',  rating: '4.6', cat: 'sans-alcool' },
  { id: 3,  name: 'Pouilly-Fumé',        region: 'Loire',     vintage: '2022', type: 'Blanc · 750ml', price: 32000,  isAlcoholFree: false, image: Image3, badge: null,           rating: '4.8', cat: 'blanc' },
  { id: 4,  name: 'Chablis Premier Cru', region: 'Bourgogne', vintage: '2021', type: 'Blanc · 750ml', price: 48000,  isAlcoholFree: false, image: Image,  badge: 'Nouveau',      rating: '4.9', cat: 'blanc' },
  { id: 5,  name: 'Domaine Tempier',     region: 'Provence',  vintage: '2022', type: 'Rosé · 750ml',  price: 28000,  isAlcoholFree: false, image: Image2, badge: null,           rating: '4.7', cat: 'rose' },
  { id: 6,  name: 'Côtes du Rhône',      region: 'Bourgogne', vintage: '2020', type: 'Rouge · 750ml', price: 18000,  isAlcoholFree: false, image: Image1, badge: 'Best-seller',  rating: '4.8', cat: 'rouge' },
  { id: 7,  name: 'Sancerre',            region: 'Loire',     vintage: '2023', type: 'Blanc · 750ml', price: 24000,  isAlcoholFree: false, image: Image3, badge: null,           rating: '4.7', cat: 'blanc' },
  { id: 8,  name: 'Lussory Premium',     region: 'Espagne',   vintage: '2023', type: 'Sans alcool',   price: 7900,   isAlcoholFree: true,  image: Image,  badge: 'Sans alcool',  rating: '4.5', cat: 'sans-alcool' },
  { id: 9,  name: 'Saint-Émilion',       region: 'Bordeaux',  vintage: '2019', type: 'Rouge · 750ml', price: 65000,  isAlcoholFree: false, image: Image1, badge: null,           rating: '4.8', cat: 'rouge' },
  { id: 10, name: 'Champagne Brut',      region: 'Champagne', vintage: 'NV',   type: 'Effervescent',  price: 55000,  isAlcoholFree: false, image: Image,  badge: 'Fêtes',        rating: '4.9', cat: 'champagne' },
  { id: 11, name: 'Whispering Angel',    region: 'Provence',  vintage: '2023', type: 'Rosé · 750ml',  price: 22000,  isAlcoholFree: false, image: Image2, badge: 'Best-seller',  rating: '4.8', cat: 'rose' },
  { id: 12, name: 'Marqués de Riscal',   region: 'Rioja',     vintage: '2019', type: 'Rouge · 750ml', price: 26000,  isAlcoholFree: false, image: Image3, badge: null,           rating: '4.7', cat: 'rouge' },
]

function toggleRegion(r) {
  const i = selectedRegions.value.indexOf(r)
  if (i === -1) selectedRegions.value.push(r)
  else selectedRegions.value.splice(i, 1)
}

function resetFilters() {
  selectedCategory.value = 'all'
  selectedPrice.value = 'all'
  selectedRegions.value = []
}

function countByCategory(value) {
  if (value === 'all') return wines.length
  return wines.filter(w => w.cat === value).length
}

const activeFilterCount = computed(() => {
  let n = 0
  if (selectedCategory.value !== 'all') n++
  if (selectedPrice.value !== 'all') n++
  n += selectedRegions.value.length
  return n
})

const filteredWines = computed(() => {
  return wines.filter(w => {
    if (selectedCategory.value !== 'all' && w.cat !== selectedCategory.value) return false
    if (selectedRegions.value.length && !selectedRegions.value.includes(w.region)) return false
    if (selectedPrice.value !== 'all') {
      const [min, max] = selectedPrice.value.split('-').map(Number)
      if (w.price < min || w.price > max) return false
    }
    return true
  })
})

const sortedWines = computed(() => {
  const arr = [...filteredWines.value]
  switch (sortBy.value) {
    case 'price-asc':  return arr.sort((a, b) => a.price - b.price)
    case 'price-desc': return arr.sort((a, b) => b.price - a.price)
    case 'name':       return arr.sort((a, b) => a.name.localeCompare(b.name))
    case 'rating':     return arr.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    default:           return arr
  }
})

const pageTitle = computed(() => {
  const cat = categories.find(c => c.value === selectedCategory.value)
  return cat && cat.value !== 'all' ? cat.label : 'Toute la cave'
})

function handleAddToCart(wine) {
  console.log('Ajouté :', wine.name)
}
</script>
