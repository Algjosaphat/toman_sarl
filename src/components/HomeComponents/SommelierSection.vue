<template>
  <section class="relative py-24 lg:py-36 bg-[#fbf8f3] overflow-hidden">

    <div class="relative max-w-screen-2xl mx-auto px-8 lg:px-20">

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        <!-- Left: image with frame -->
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#F5C400]"></div>
          <div class="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#F5C400]"></div>

          <div class="relative aspect-[4/5] bg-[#22529C]/10 overflow-hidden">
            <img src="@/assets/Red_Grape-Juice_7000f_ss_alcool.jpeg" alt="Toman SARL — conseil vin à Cotonou" class="w-full h-full object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d214a]/40 via-transparent to-transparent"></div>

            <!-- Caption -->
            <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p class="text-[10px] tracking-[0.3em] uppercase text-[#F5C400] mb-1 font-semibold">Votre caviste</p>
                <p class="font-display text-2xl text-white">Toman SARL</p>
              </div>
              <div class="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#16336a] text-[10px] tracking-widest uppercase font-bold rounded-sm">
                Cotonou, Bénin
              </div>
            </div>
          </div>

          <!-- Floating review card -->
          <div class="hidden lg:block absolute -bottom-8 -left-8 bg-white border border-stone-200 rounded-sm p-5 shadow-2xl shadow-[#22529C]/15 max-w-xs">
            <div class="flex items-center gap-2 mb-2">
              <div class="flex gap-0.5">
                <span v-for="i in 5" :key="i" class="text-[#F5C400] text-sm">★</span>
              </div>
              <span class="text-xs text-stone-500 font-semibold">4.8 / 5</span>
            </div>
            <p class="text-sm text-stone-700 leading-relaxed italic">"Des vins primés Gold, livrés à Cotonou. Un service impeccable et des conseils vraiment utiles."</p>
            <p class="text-xs text-stone-500 mt-3">— Client Toman SARL, Cotonou</p>
          </div>
        </div>

        <!-- Right: content -->
        <div class="lg:col-span-6 lg:pl-8">
          <span class="eyebrow">Conseil & service</span>
          <h2 class="font-display text-5xl lg:text-6xl text-[#16336a] leading-[1.05] mt-2 mb-8">
            Un conseil
            <span class="italic text-[#22529C]">à votre table.</span>
          </h2>

          <p class="text-lg text-stone-600 leading-relaxed mb-6">
            Choisir un vin ne se résume pas à un prix ou une étiquette. C'est une rencontre entre une bouteille et un moment, un plat, une émotion.
          </p>
          <p class="text-base text-stone-600 leading-relaxed mb-10">
            Chez Toman SARL, nous vous accompagnons — par WhatsApp, en boutique ou lors d'une dégustation — pour trouver la bouteille Vredenheim qui vous correspond. Sans jargon, avec sincérité.
          </p>

          <!-- Services -->
          <div class="space-y-1 mb-12">
            <div v-for="service in services" :key="service.label"
                 class="flex items-start gap-4 py-4 border-t border-stone-200 last:border-b">
              <div class="w-9 h-9 shrink-0 rounded-full bg-[#22529C]/10 text-[#22529C] flex items-center justify-center mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-medium text-[#16336a]">{{ service.label }}</p>
                <p class="text-sm text-stone-500">{{ service.description }}</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-4">
            <RouterLink to="/contact" class="btn-primary">
              Demander conseil
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </RouterLink>
            <a href="https://wa.me/22900000000" target="_blank" class="inline-flex items-center gap-2 px-7 py-4 border border-[#22529C]/20 text-[#22529C] hover:bg-[#22529C] hover:text-white font-medium text-sm tracking-wide rounded-sm transition-all no-underline">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
              WhatsApp direct
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { label: 'Accord mets-vins',   description: 'Suggestions Vredenheim sur mesure pour vos repas et événements.' },
  { label: 'Choix d\'un cadeau', description: 'La bouteille parfaite pour marquer un moment — livrée à Cotonou.' },
  { label: 'Cave personnelle',   description: 'Conseil pour constituer votre sélection Vredenheim à votre rythme.' },
  { label: 'Dégustation privée', description: 'À domicile ou en boutique, sur rendez-vous — découvrez tous nos cépages.' },
]
</script>