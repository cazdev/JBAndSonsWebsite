<template>
  <div id="app">
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <nav class="navbar">
        <!-- Mobile hamburger menu -->
        <div class="mobile-nav">
          <div class="nav-brand-mobile">
            <router-link to="/" class="nav-link">
              <img src="./assets/images/logo.png" class="logo-mobile">
            </router-link>
          </div>
          <button class="hamburger" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <!-- Mobile menu dropdown -->
        <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
          <div class="mobile-nav-item">
            <router-link to="/bookings" class="mobile-nav-link" @click="closeMobileMenu">Bookings</router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link to="/menu" class="mobile-nav-link" @click="closeMobileMenu">Menu</router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link to="/whatson" class="mobile-nav-link" @click="closeMobileMenu">Whats On</router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link to="/vouchers" class="mobile-nav-link" @click="closeMobileMenu">Vouchers</router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About Us</router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact Us</router-link>
          </div>
        </div>

        <!-- Desktop navigation (existing) -->
        <div class="desktop-nav">
          <div class="nav-brand" :class="{ 'scrolled': isScrolled }">
            <router-link to="/" class="nav-link">
              <img src="./assets/images/logo.png" class="logo" :class="{ 'scrolled': isScrolled }">
            </router-link>
          </div>
          <div class="nav-menu" :class="{ 'scrolled': isScrolled }">
            <div class="nav-item">
              <router-link to="/bookings" class="nav-link">Bookings</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/menu" class="nav-link">Menu</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/whatson" class="nav-link">Whats On</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/vouchers" class="nav-link">Vouchers</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Us</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 JB & Sons. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useNavigation } from './composables/useNavigation.js'
import { usePageMeta } from './composables/usePageMeta.js'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

class AppComponent {
  constructor() {
    this.navigation = useNavigation()
    this.pageMeta = usePageMeta('Home', 'JB & Sons - Purveyors of fine booze & burgers')
  }

  init() {
    this.pageMeta.updateMeta()
    this.setupScrollListener()
  }

  setupScrollListener() {
    const handleScroll = () => {
      const scrollThreshold = 100 // Adjust this value to control when the animation triggers
      isScrolled.value = window.scrollY > scrollThreshold
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
}

const app = new AppComponent()

onMounted(() => {
  app.init()
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-header);
  transition: var(--transition-navbar);
  padding: var(--spacing-md) var(--spacing-xxxl);
  background-color: var(--color-background);
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  transition: var(--transition-navbar);
}

.header.scrolled .navbar {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  transition: var(--transition-navbar);
}

.header.scrolled .nav-brand {
  margin-bottom: 0;
}

.logo {
  height: var(--logo-size-default);
  width: var(--logo-size-default);
  transition: var(--transition-navbar);
}

.header.scrolled .logo {
  height: var(--logo-size-scrolled);
  width: var(--logo-size-scrolled);
}

.nav-menu {
  display: flex;
  margin-top: var(--nav-margin-top);
  gap: var(--nav-gap-default);
  transition: var(--transition-navbar);
  margin-bottom: var(--nav-margin-bottom);
}

.header.scrolled .nav-menu {
  margin-top: 0;
  gap: var(--nav-gap-scrolled);
}

.nav-menu a {
  font-family: var(--font-family-heading);
  text-decoration: none;
  color: var(--color-primary);
  font-size: var(--font-size-nav-desktop);
  transition: var(--transition-navbar);
}

.header.scrolled .nav-menu a {
  font-size: var(--font-size-nav-desktop-scrolled);
}

.nav-menu a:hover {
  text-decoration: underline;
}

.main-content {
  margin-top: var(--margin-top-content-default); /* Account for the initial header height */
  transition: margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header.scrolled + .main-content {
  margin-top: var(--margin-top-content-scrolled); /* Reduced margin when scrolled */
}

/* Add some content height to enable scrolling for testing */
.main-content {
  min-height: 150vh;
}

/* Mobile Navigation Styles */
.mobile-nav {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-brand-mobile {
  flex-shrink: 0;
}

.logo-mobile {
  height: var(--logo-size-mobile);
  width: var(--logo-size-mobile);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: var(--hamburger-size);
  height: var(--hamburger-size);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: var(--z-index-hamburger);
}

.hamburger span {
  width: var(--hamburger-size);
  height: var(--hamburger-bar-height);
  background: var(--color-primary);
  border-radius: var(--border-radius-base);
  transition: var(--transition-quick);
  position: relative;
  transform-origin: 1px;
}

.hamburger.active span:first-child {
  transform: rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-primary);
  box-shadow: 0 2px 10px var(--color-primary-transparent-10);
  transform: translateY(-100%);
  opacity: 0;
  transition: var(--transition-fast);
  z-index: var(--z-index-mobile-menu);
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-item {
  padding: 0;
}

.mobile-nav-link {
  display: block;
  padding: var(--mobile-menu-padding);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-nav-mobile);
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--color-primary-transparent-10);
  transition: var(--transition-hover);
}

.mobile-nav-link:hover {
  background-color: var(--color-primary-transparent-05);
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.desktop-nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  transition: var(--transition-navbar);
}

.header.scrolled .desktop-nav {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* Mobile Media Queries */
@media (max-width: 768px) {
  .header {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .mobile-nav {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .main-content {
    margin-top: var(--margin-top-content-mobile) !important;
  }
}

@media (max-width: 480px) {
  .header {
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .mobile-nav-link {
    padding: var(--mobile-menu-padding-small);
    font-size: var(--font-size-nav-mobile-small);
  }
}
</style>
