import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Bookings from './pages/Bookings.vue'
import Contact from './pages/Contact.vue'
import Menu from './pages/Menu.vue'
import Vouchers from './pages/Vouchers.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/bookings', component: Bookings },
  { path: '/menu', component: Menu },
  {
    path: '/whatson',
    redirect: () => {
      // Navigate to home and scroll to whats-on section
      return { path: '/', hash: '#whats-on' }
    }
  },
  { path: '/vouchers', component: Vouchers },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
