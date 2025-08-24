import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Bookings from './components/Bookings.vue'
import Contact from './components/Contact.vue'
import Menu from './components/Menu.vue'
import WhatsOn from './components/WhatsOn.vue'
import Vouchers from './components/Vouchers.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/bookings', component: Bookings },
  { path: '/menu', component: Menu },
  { path: '/whatson', component: WhatsOn },
  { path: '/vouchers', component: Vouchers },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/JBAndSonsWebsite/'),
  routes
})

createApp(App).use(router).mount('#app')
