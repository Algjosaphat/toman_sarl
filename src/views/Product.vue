<template>
  <main v-if="product" class="bg-[#fbf8f3]">

    <!-- Breadcrumb -->
    <div class="bg-white border-b border-stone-200">
      <div class="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-20 py-4 flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-500 overflow-x-auto">
        <RouterLink to="/" class="hover:text-[#22529C] transition-colors no-underline whitespace-nowrap">Accueil</RouterLink>
        <span class="text-stone-300">›</span>
        <RouterLink to="/shop" class="hover:text-[#22529C] transition-colors no-underline whitespace-nowrap">La Cave</RouterLink>
        <span class="text-stone-300">›</span>
        <RouterLink :to="`/shop?categorie=${product.cat}`" class="hover:text-[#22529C] transition-colors no-underline whitespace-nowrap">{{ categoryLabel }}</RouterLink>
        <span class="text-stone-300">›</span>
        <span class="text-[#16336a] truncate">{{ product.name }}</span>
      </div>
    </div>

    <!-- Hero product -->
    <section class="py-10 lg:py-16">
      <div class="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16">

        <!-- Gallery -->
        <div class="lg:col-span-6">
          <div class="relative bg-white border border-stone-200 rounded-sm overflow-hidden">
            <!-- Decorative corners -->
            <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#F5C400]/40 pointer-events-none z-10"></div>
            <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#F5C400]/40 pointer-events-none z-10"></div>

            <!-- Badge -->
            <span
              v-if="product.badge"
              class="absolute top-5 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-sm shadow-lg"
              :class="product.isAlcoholFree
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-[#F5C400] text-[#16336a]'"
            >
              {{ product.badge }}
            </span>

            <!-- Main image -->
            <div class="relative aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-[#fbf8f3] to-[#ece1c8]/30 p-6 sm:p-10">
              <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"/>
            </div>
          </div>

          <!-- Mini gallery (just current image styled as gallery) -->
          <div class="grid grid-cols-3 gap-3 mt-3">
            <button class="aspect-square bg-white border-2 border-[#F5C400] rounded-sm flex items-center justify-center p-3">
              <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain"/>
            </button>
            <button class="aspect-square bg-white border border-stone-200 hover:border-[#22529C]/40 transition-colors rounded-sm flex items-center justify-center p-3 opacity-60">
              <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain"/>
            </button>
            <button class="aspect-square bg-white border border-stone-200 hover:border-[#22529C]/40 transition-colors rounded-sm flex items-center justify-center p-3 opacity-40">
              <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain"/>
            </button>
          </div>
        </div>

        <!-- Details -->
        <div class="lg:col-span-6 lg:pl-4">
          <p class="text-[11px] tracking-[0.3em] uppercase text-[#b88d00] font-semibold mb-3">
            {{ product.producer }} · {{ product.region }}
          </p>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mb-4">
            {{ product.name }}
          </h1>

          <!-- Rating & vintage -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <div class="flex items-center gap-1.5">
              <div class="flex gap-0.5">
                <span v-for="i in 5" :key="i" class="text-[#F5C400] text-sm">★</span>
              </div>
              <span class="text-sm text-stone-600 font-semibold">{{ product.rating }}</span>
              <span class="text-xs text-stone-400">/ 5</span>
            </div>
            <span class="text-stone-300">·</span>
            <span class="text-sm text-stone-600">Millésime <strong class="text-[#16336a]">{{ product.vintage }}</strong></span>
            <span class="text-stone-300">·</span>
            <span class="text-sm text-stone-600">{{ product.type }}</span>
          </div>

          <!-- Awards -->
          <div v-if="product.awards.length" class="flex flex-wrap gap-2 mb-8">
            <span v-for="a in product.awards" :key="a"
              class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5C400]/10 border border-[#F5C400]/30 text-[#946f0a] text-[11px] tracking-wider uppercase font-semibold rounded-sm">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              {{ a }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-stone-700 text-base lg:text-lg leading-relaxed mb-8">
            {{ product.description }}
          </p>

          <!-- Price + actions -->
          <div class="bg-white border border-stone-200 rounded-sm p-6 lg:p-7 mb-8">
            <div class="flex items-end justify-between mb-5 flex-wrap gap-4">
              <div>
                <p class="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-1 font-semibold">Prix unitaire</p>
                <p class="font-display text-4xl text-[#16336a] leading-none">
                  {{ formattedPrice }}
                  <span class="text-base text-stone-500 font-sans">FCFA</span>
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 justify-end mb-1">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  En stock
                </p>
                <p class="text-xs text-stone-500">Livraison sous 24h à Cotonou</p>
              </div>
            </div>

            <!-- Quantity & order -->
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="flex items-center bg-[#fbf8f3] border border-stone-200 rounded-sm">
                <button @click="decrement" class="w-12 h-12 flex items-center justify-center text-[#22529C] hover:bg-stone-100 transition-colors text-lg font-bold" aria-label="Diminuer">−</button>
                <span class="w-12 text-center font-display text-lg text-[#16336a]">{{ quantity }}</span>
                <button @click="increment" class="w-12 h-12 flex items-center justify-center text-[#22529C] hover:bg-stone-100 transition-colors text-lg font-bold" aria-label="Augmenter">+</button>
              </div>

              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener"
                class="btn-primary flex-1 justify-center !text-[#16336a]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            <p class="mt-4 text-xs text-stone-500 text-center">
              Total :
              <span class="font-display text-[#16336a] text-base">{{ formattedTotal }} FCFA</span>
            </p>
          </div>

          <!-- Quick info icons -->
          <div class="grid grid-cols-3 gap-3">
            <div v-for="i in quickInfo" :key="i.label" class="flex flex-col items-center text-center p-4 bg-white border border-stone-200 rounded-sm">
              <div class="w-9 h-9 rounded-full bg-[#22529C]/10 text-[#22529C] flex items-center justify-center mb-2">
                <span v-html="i.icon"></span>
              </div>
              <p class="text-[10px] tracking-widest uppercase text-stone-500 font-semibold">{{ i.label }}</p>
              <p class="text-xs text-[#16336a] mt-0.5">{{ i.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs section -->
    <section class="bg-white border-y border-stone-200">
      <div class="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-20">

        <!-- Tab triggers -->
        <div class="flex gap-1 sm:gap-6 overflow-x-auto border-b border-stone-100">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="px-3 sm:px-4 py-5 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold whitespace-nowrap transition-colors relative"
            :class="activeTab === tab.value ? 'text-[#16336a]' : 'text-stone-400 hover:text-stone-600'"
          >
            {{ tab.label }}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5C400] transition-transform" :class="activeTab === tab.value ? 'scale-x-100' : 'scale-x-0'"></span>
          </button>
        </div>

        <!-- Tab content -->
        <div class="py-10 lg:py-14">

          <!-- Tasting -->
          <div v-show="activeTab === 'tasting'" class="grid lg:grid-cols-12 gap-10">
            <div class="lg:col-span-7">
              <span class="eyebrow">Note de dégustation</span>
              <h2 class="font-display text-3xl lg:text-4xl text-[#16336a] mt-2 mb-6 leading-tight">L'expérience en bouche.</h2>
              <p class="text-stone-700 text-base lg:text-lg leading-relaxed whitespace-pre-line">{{ product.tasting }}</p>

              <div class="mt-8">
                <p class="text-[10px] tracking-[0.3em] uppercase text-[#b88d00] font-semibold mb-3">Notes principales</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="n in product.notes" :key="n" class="px-4 py-2 bg-[#fbf8f3] border border-stone-200 text-stone-700 text-sm rounded-full">{{ n }}</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="bg-[#fbf8f3] border border-stone-200 rounded-sm p-6 lg:p-8">
                <h3 class="font-display text-xl text-[#16336a] mb-5">Accord parfait</h3>
                <p class="text-stone-700 leading-relaxed mb-6">{{ product.pairing }}</p>
                <div class="pt-5 border-t border-stone-200">
                  <p class="text-[10px] tracking-[0.3em] uppercase text-[#b88d00] font-semibold mb-1">Service</p>
                  <p class="text-[#16336a]">{{ product.serve }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Specs -->
          <div v-show="activeTab === 'specs'">
            <span class="eyebrow">Caractéristiques</span>
            <h2 class="font-display text-3xl lg:text-4xl text-[#16336a] mt-2 mb-8 leading-tight">Fiche technique.</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
              <div v-for="spec in specs" :key="spec.label" class="flex items-center justify-between py-3 border-b border-stone-100">
                <span class="text-xs uppercase tracking-widest text-stone-500">{{ spec.label }}</span>
                <span class="text-[#16336a] font-medium text-right">{{ spec.value }}</span>
              </div>
            </div>
          </div>

          <!-- Producer -->
          <div v-show="activeTab === 'producer'" class="grid lg:grid-cols-12 gap-10 items-start">
            <div class="lg:col-span-7">
              <span class="eyebrow">Le domaine</span>
              <h2 class="font-display text-3xl lg:text-4xl text-[#16336a] mt-2 mb-6 leading-tight">
                Vredenheim 1691,<br/>
                <span class="italic text-[#22529C]">Stellenbosch.</span>
              </h2>
              <p class="text-stone-700 leading-relaxed mb-4">
                Établi en 1691 au cœur de Stellenbosch en Afrique du Sud, le domaine Vredenheim est l'un des plus anciens et des plus reconnus du pays. Trois siècles d'expérience, un terroir d'exception et une vision moderne du vin.
              </p>
              <p class="text-stone-700 leading-relaxed mb-4">
                Plusieurs fois primé Gold en 2025 — Veritas, Michelangelo International, Solo Wine Awards — le domaine perpétue une tradition d'excellence dans le respect du terroir et de l'environnement.
              </p>
              <p class="text-stone-700 leading-relaxed">
                Toman SARL est fier d'être le partenaire exclusif de Vredenheim au Bénin.
              </p>
            </div>
            <div class="lg:col-span-5">
              <div class="bg-[#16336a] text-white rounded-sm p-8 relative overflow-hidden">
                <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#F5C400]/15 blur-2xl pointer-events-none"></div>
                <p class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] font-semibold mb-3">Depuis 1691</p>
                <p class="font-display text-5xl mb-3 leading-none">334 ans</p>
                <p class="text-white/70 text-sm">d'art viticole sud-africain à Stellenbosch.</p>
                <ul class="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                  <li class="flex items-center gap-3"><span class="text-[#F5C400]">★</span> Médaillé Gold Veritas 2025</li>
                  <li class="flex items-center gap-3"><span class="text-[#F5C400]">★</span> Gold Michelangelo International</li>
                  <li class="flex items-center gap-3"><span class="text-[#F5C400]">★</span> Gold Solo Wine Awards 2025</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Delivery -->
          <div v-show="activeTab === 'delivery'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="d in deliveryInfo" :key="d.title" class="p-6 bg-[#fbf8f3] border border-stone-200 rounded-sm">
              <div class="w-10 h-10 rounded-full bg-[#22529C]/10 text-[#22529C] flex items-center justify-center mb-4">
                <span v-html="d.icon"></span>
              </div>
              <h3 class="font-display text-xl text-[#16336a] mb-2">{{ d.title }}</h3>
              <p class="text-sm text-stone-600 leading-relaxed">{{ d.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related products -->
    <section v-if="related.length" class="py-16 lg:py-20">
      <div class="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-20">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span class="eyebrow">Vous aimerez aussi</span>
            <h2 class="font-display text-3xl lg:text-4xl text-[#16336a] mt-2 leading-tight">
              D'autres bouteilles<br class="hidden sm:block"/>
              <span class="italic text-[#22529C]">à découvrir.</span>
            </h2>
          </div>
          <RouterLink to="/shop" class="text-[#22529C] hover:text-[#F5C400] text-sm tracking-widest uppercase font-medium no-underline link-grow">
            Voir toute la cave →
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <WineCard v-for="r in related" :key="r.id" :wine="r"/>
        </div>
      </div>
    </section>
  </main>

  <!-- 404 -->
  <main v-else class="min-h-[60vh] flex items-center justify-center bg-[#fbf8f3] px-6 py-20">
    <div class="text-center max-w-lg">
      <p class="font-display text-7xl text-stone-300 mb-2">404</p>
      <h1 class="font-display text-3xl text-[#16336a] mb-4">Bouteille introuvable</h1>
      <p class="text-stone-600 mb-8">Cette référence n'existe pas dans notre cave. Peut-être l'avons-nous déjà vendue ?</p>
      <RouterLink to="/shop" class="btn-primary">Retour à la cave</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findProduct, relatedProducts, categoryLabels } from '../data/products.js'
import WineCard from '../components/ui/WineCard.vue'

const route = useRoute()

const product = computed(() => findProduct(route.params.slug))
const related = computed(() => product.value ? relatedProducts(route.params.slug, 3) : [])
const categoryLabel = computed(() => product.value ? (categoryLabels[product.value.cat] || 'Cave') : 'Cave')

const quantity = ref(1)
const activeTab = ref('tasting')

watch(() => route.params.slug, () => {
  quantity.value = 1
  activeTab.value = 'tasting'
})

function increment() { if (quantity.value < 99) quantity.value++ }
function decrement() { if (quantity.value > 1) quantity.value-- }

const formattedPrice = computed(() =>
  product.value ? new Intl.NumberFormat('fr-FR').format(product.value.price) : ''
)
const formattedTotal = computed(() =>
  product.value ? new Intl.NumberFormat('fr-FR').format(product.value.price * quantity.value) : ''
)

const whatsappLink = computed(() => {
  if (!product.value) return '#'
  const msg = encodeURIComponent(
    `Bonjour Toman SARL,\n\nJe souhaite commander :\n• ${product.value.name} (${product.value.vintage}) — ${quantity.value} × ${formattedPrice.value} FCFA\n• Total : ${formattedTotal.value} FCFA\n\nMerci de me confirmer la disponibilité et la livraison.`
  )
  return `https://wa.me/22966653864?text=${msg}`
})

const tabs = [
  { value: 'tasting',  label: 'Dégustation' },
  { value: 'specs',    label: 'Caractéristiques' },
  { value: 'producer', label: 'Le domaine' },
  { value: 'delivery', label: 'Livraison' },
]

const specs = computed(() => product.value ? [
  { label: 'Producteur',  value: product.value.producer },
  { label: 'Région',      value: product.value.region },
  { label: 'Pays',        value: product.value.country },
  { label: 'Cépage',      value: product.value.grape },
  { label: 'Millésime',   value: product.value.vintage },
  { label: 'Type',        value: product.value.type },
  { label: 'Robe',        value: product.value.color },
  { label: 'Alcool',      value: product.value.alc },
  { label: 'Service',     value: product.value.serve },
  { label: 'Élevage',     value: product.value.aging },
  { label: 'Volume',      value: '750 ml' },
  { label: 'Conservation',value: '14 °C, à l\'abri de la lumière' },
] : [])

const quickInfo = computed(() => product.value ? [
  {
    label: 'Service',
    value: product.value.serve,
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21V11m0 0a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z"/></svg>'
  },
  {
    label: 'Cépage',
    value: product.value.grape,
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="6" r="2"/><circle cx="8" cy="11" r="2"/><circle cx="16" cy="11" r="2"/><circle cx="12" cy="14" r="2"/><circle cx="10" cy="18" r="2"/><circle cx="14" cy="18" r="2"/></svg>'
  },
  {
    label: 'Alcool',
    value: product.value.alc,
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 21h14M9 3v6l-3 4v8h12v-8l-3-4V3z"/></svg>'
  },
] : [])

const deliveryInfo = [
  { title: 'Livraison Cotonou',   text: 'Sous 24h ouvrées. Gratuite dès 30 000 FCFA d\'achat. Emballage anti-choc inclus.', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 5h2l3 12h11l3-9H6"/></svg>' },
  { title: 'Livraison Bénin',     text: 'Toutes les grandes villes — délais et frais selon la zone. Paiement à la livraison possible.', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>' },
  { title: 'Paiement sécurisé',   text: 'Carte bancaire, MTN Mobile Money, Moov Money, virement, ou espèces à la livraison.', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18"/></svg>' },
]
</script>
