<template>
  <main class="bg-[#fbf8f3]">

    <!-- Hero -->
    <section class="relative bg-[#0d214a] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/image3.jpeg" alt="" class="w-full h-full object-cover opacity-15"/>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0d214a] via-[#0d214a]/85 to-[#0d214a]"></div>
      </div>
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#F5C400]/8 blur-3xl pointer-events-none"></div>

      <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div class="max-w-3xl">
          <div class="gold-divider mb-6 text-[#F5C400] text-[10px] tracking-[0.4em] uppercase font-semibold">
            Contact
          </div>
          <h1 class="font-display text-white leading-[1.05]" style="font-size: clamp(2.5rem, 6vw, 4.5rem);">
            Parlons
            <span class="italic text-gradient-gold">de vin.</span>
          </h1>
          <p class="text-white/70 max-w-2xl mt-6 text-lg leading-relaxed">
            Une question, un conseil, un besoin sur mesure ? Notre équipe vous répond avec attention. Choisissez le canal qui vous convient.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact methods -->
    <section class="max-w-screen-2xl mx-auto px-8 lg:px-20 -mt-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <a v-for="m in methods" :key="m.label"
           :href="m.href" :target="m.target"
           class="group bg-white border border-stone-200 hover:border-[#F5C400]/50 rounded-sm p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#22529C]/10 no-underline text-inherit"
        >
          <div class="w-12 h-12 mb-5 flex items-center justify-center rounded-sm bg-[#22529C]/10 text-[#22529C] group-hover:bg-[#F5C400] group-hover:text-[#16336a] transition-all">
            <span v-html="m.icon"></span>
          </div>
          <p class="text-[10px] tracking-[0.3em] uppercase text-[#b88d00] font-semibold mb-1">{{ m.label }}</p>
          <p class="font-display text-lg text-[#16336a] mb-3 leading-tight">{{ m.value }}</p>
          <p class="text-xs text-stone-500 leading-relaxed">{{ m.subtitle }}</p>
        </a>
      </div>
    </section>

    <!-- Form & info -->
    <section class="py-20 lg:py-28">
      <div class="max-w-screen-2xl mx-auto px-8 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16">

        <!-- Form -->
        <div class="lg:col-span-7">
          <span class="eyebrow">Envoyez-nous un message</span>
          <h2 class="font-display text-4xl lg:text-5xl text-[#16336a] leading-[1.05] mt-2 mb-3">
            Un message, une<br/>
            <span class="italic text-[#22529C]">réponse personnelle.</span>
          </h2>
          <p class="text-stone-600 mb-10 max-w-lg">Nous répondons sous 24h ouvrées. Pour les urgences, privilégiez WhatsApp.</p>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Nom</label>
                <input v-model="form.name" type="text" required
                       class="w-full px-4 py-3.5 bg-white border border-stone-200 focus:border-[#22529C] outline-none rounded-sm text-stone-800 transition-colors"/>
              </div>
              <div>
                <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Prénom</label>
                <input v-model="form.firstName" type="text" required
                       class="w-full px-4 py-3.5 bg-white border border-stone-200 focus:border-[#22529C] outline-none rounded-sm text-stone-800 transition-colors"/>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Email</label>
                <input v-model="form.email" type="email" required
                       class="w-full px-4 py-3.5 bg-white border border-stone-200 focus:border-[#22529C] outline-none rounded-sm text-stone-800 transition-colors"/>
              </div>
              <div>
                <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Téléphone</label>
                <input v-model="form.phone" type="tel"
                       class="w-full px-4 py-3.5 bg-white border border-stone-200 focus:border-[#22529C] outline-none rounded-sm text-stone-800 transition-colors"/>
              </div>
            </div>

            <div>
              <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Sujet</label>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <button v-for="s in subjects" :key="s" type="button" @click="form.subject = s"
                        class="px-4 py-3 text-sm rounded-sm border transition-all"
                        :class="form.subject === s
                          ? 'bg-[#22529C] text-white border-[#22529C]'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-[#22529C]'">
                  {{ s }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-[10px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Message</label>
              <textarea v-model="form.message" required rows="6"
                        class="w-full px-4 py-3.5 bg-white border border-stone-200 focus:border-[#22529C] outline-none rounded-sm text-stone-800 transition-colors resize-none"
                        placeholder="Dites-nous tout…"></textarea>
            </div>

            <label class="flex items-start gap-3 text-xs text-stone-600">
              <input v-model="form.consent" type="checkbox" class="mt-0.5 w-4 h-4 accent-[#22529C]"/>
              <span>J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la <RouterLink to="/confidentialite" class="text-[#22529C] underline">politique de confidentialité</RouterLink>.</span>
            </label>

            <button type="submit" :disabled="!form.consent || submitted" class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              <span>{{ submitted ? 'Message envoyé !' : 'Envoyer le message' }}</span>
              <svg v-if="!submitted" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7-7 7"/></svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            </button>

            <p v-if="submitted" class="text-emerald-700 text-sm flex items-center gap-2 animate-fade-in">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Merci, nous vous répondons sous 24h.
            </p>
          </form>
        </div>

        <!-- Info sidebar -->
        <aside class="lg:col-span-5">
          <div class="bg-[#16336a] text-white rounded-sm p-8 lg:p-10 mb-6 relative overflow-hidden">
            <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#F5C400]/15 blur-2xl pointer-events-none"></div>

            <h3 class="font-display text-3xl mb-2">La boutique</h3>
            <p class="text-white/60 text-sm mb-8">Venez goûter, échanger, découvrir.</p>

            <ul class="space-y-5">
              <li class="flex items-start gap-4">
                <div class="w-9 h-9 shrink-0 rounded-full bg-[#F5C400]/20 border border-[#F5C400]/30 text-[#F5C400] flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <div>
                  <p class="text-[10px] tracking-[0.25em] uppercase text-[#F5C400] font-semibold mb-1">Adresse</p>
                  <p>Cotonou, Bénin</p>
                  <a href="#" class="text-xs text-white/50 hover:text-[#F5C400] transition-colors mt-1 inline-block">Voir sur la carte →</a>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-9 h-9 shrink-0 rounded-full bg-[#F5C400]/20 border border-[#F5C400]/30 text-[#F5C400] flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>
                </div>
                <div>
                  <p class="text-[10px] tracking-[0.25em] uppercase text-[#F5C400] font-semibold mb-1">Horaires</p>
                  <p>Lundi – Samedi · 09h – 21h</p>
                  <p class="text-sm text-white/60">Dimanche · sur rendez-vous</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-9 h-9 shrink-0 rounded-full bg-[#F5C400]/20 border border-[#F5C400]/30 text-[#F5C400] flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p class="text-[10px] tracking-[0.25em] uppercase text-[#F5C400] font-semibold mb-1">Téléphone</p>
                  <a href="tel:+22900000000" class="hover:text-[#F5C400] transition-colors no-underline">+229 00 00 00 00</a>
                </div>
              </li>
            </ul>
          </div>

          <!-- Map placeholder -->
          <div class="aspect-[4/3] bg-stone-100 border border-stone-200 rounded-sm overflow-hidden relative">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3585%2C6.3573%2C2.4485%2C6.4173&amp;layer=mapnik"
              class="w-full h-full border-0"
              loading="lazy"
              title="Boutique Toman Cotonou"
            ></iframe>
          </div>

          <!-- FAQ -->
          <div class="bg-white border border-stone-200 rounded-sm p-6 lg:p-8 mt-6">
            <h3 class="font-display text-2xl text-[#16336a] mb-4">Questions fréquentes</h3>
            <div class="space-y-3">
              <details v-for="(q, i) in faq" :key="i" class="group border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                <summary class="flex items-center justify-between cursor-pointer text-sm font-medium text-[#16336a] hover:text-[#22529C] transition-colors list-none py-2">
                  {{ q.q }}
                  <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="text-sm text-stone-600 leading-relaxed mt-2">{{ q.a }}</p>
              </details>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  firstName: '',
  email: '',
  phone: '',
  subject: 'Conseil',
  message: '',
  consent: false,
})

const subjects = ['Conseil', 'Commande', 'Pro / Resto', 'Autre']

const methods = [
  {
    label: 'WhatsApp',
    value: 'Réponse immédiate',
    subtitle: 'La voie la plus rapide pour un conseil sur mesure.',
    href: 'https://wa.me/22966653864',
    target: '_blank',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',
  },
  {
    label: 'Téléphone',
    value: '+229 01 66 62 96 34',
    subtitle: 'Du lundi au samedi, de 9h à 21h.',
    href: 'tel:+2290166629634',
    target: '_self',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    label: 'Email',
    value: 'contact@tomansarl.bj',
    subtitle: 'Réponse sous 24h ouvrées, du lundi au samedi.',
    href: 'mailto:contact@tomansarl.bj',
    target: '_self',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>',
  },
  {
    label: 'En boutique',
    value: 'Cotonou, Bénin la von à droite qui fait face à l\'hôtel safari',
    subtitle: 'Sans rendez-vous · dégustations sur rdv.',
    href: '#map',
    target: '_self',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  },
]

const faq = [
  { q: 'Livrez-vous en dehors de Cotonou ?', a: 'Oui, nous livrons partout au Bénin via nos partenaires logistiques. Le délai et les frais varient selon la zone.' },
  { q: 'Acceptez-vous le Mobile Money ?',     a: 'Bien sûr. MTN Mobile Money, Moov Money, ainsi que carte bancaire et espèces à la livraison.' },
  { q: 'Faites-vous des cadeaux d\'entreprise ?', a: 'Oui — coffrets sur mesure, gravure, livraison groupée. Contactez-nous pour un devis personnalisé.' },
  { q: 'Puis-je réserver une dégustation ?', a: 'Avec plaisir, en boutique ou à domicile (Cotonou). Sur rendez-vous, à partir de 6 personnes.' },
]

function handleSubmit() {
  submitted.value = true
}
</script>
