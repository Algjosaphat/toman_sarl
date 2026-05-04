import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import Product from '../views/Product.vue'

const routes = [
  { path: '/',                  name: 'Home',    component: Home,    meta: { title: 'Toman SARL · L\'art du vin' } },
  { path: '/shop',              name: 'Shop',    component: Shop,    meta: { title: 'La Cave · Toman SARL' } },
  { path: '/produit/:slug',     name: 'Product', component: Product, meta: { title: 'Bouteille · Toman SARL' } },
  { path: '/about',             name: 'About',   component: About,   meta: { title: 'Notre Maison · Toman SARL' } },
  { path: '/contact',           name: 'Contact', component: Contact, meta: { title: 'Nous contacter · Toman SARL' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
