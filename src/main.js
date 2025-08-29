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
  history: createWebHistory('/JBAndSonsWebsite/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        // Wait for the DOM to be ready
        setTimeout(() => {
          const targetElement = document.querySelector(to.hash)
          if (targetElement) {
            // Check if we're already at the target section (within reasonable range)
            const currentScrollY = window.scrollY
            const targetElementTop = targetElement.getBoundingClientRect().top + window.scrollY
            const currentDistance = Math.abs(currentScrollY - targetElementTop)

            // If we're already close to the target (within 200px), don't scroll
            if (currentDistance < 200) {
              resolve({ top: currentScrollY, behavior: 'smooth' })
              return
            }

            // Calculate what the header height will be after scrolling to the target
            const calculateFinalHeaderHeight = () => {
              const header = document.querySelector('.header')
              if (!header) return 120 // fallback

              const isMobile = window.innerWidth <= 768
              const currentScrollY = window.scrollY
              const scrollThreshold = 100

              // On mobile, when header is expanded, we need to account for the logo margin-top
              if (isMobile && currentScrollY <= scrollThreshold) {
                // Mobile expanded state - reduce offset to show more content above
                return header.offsetHeight - 50 // Negative offset to scroll higher
              } else {
                // Desktop or mobile collapsed state
                return header.offsetHeight + 20 // Normal padding
              }
            }

            // Different approach for mobile expanded state
            const isMobileCheck = window.innerWidth <= 768
            const scrollY = window.scrollY
            const threshold = 100

            if (isMobileCheck && scrollY <= threshold) {
              // Mobile expanded state - use a much larger fixed offset
              const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
              const finalPosition = Math.max(0, elementPosition - 300) // Large fixed offset for mobile expanded
              resolve({
                top: finalPosition,
                behavior: 'smooth'
              })
              return
            }

            // Default behavior for desktop and mobile collapsed
            const headerHeight = calculateFinalHeaderHeight()
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
            const finalPosition = Math.max(0, elementPosition - headerHeight - 20)

            resolve({
              top: finalPosition,
              behavior: 'smooth'
            })
          } else {
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 100) // Small delay to ensure DOM is ready
      })
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
