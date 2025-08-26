<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="navbar">
      <!-- Mobile hamburger menu -->
      <div class="mobile-nav" :class="{ 'scrolled': isScrolled }">
        <div class="nav-brand-mobile" :class="{ 'scrolled': isScrolled }">
          <a href="#" class="nav-link" @click.prevent="handleNavigation('/')">
            <img src="../assets/images/logo.png" class="logo-mobile" :class="{ 'scrolled': isScrolled }">
          </a>
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
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/')">Home</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/bookings')">Bookings</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/menu')">Menu</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/whatson')">Whats On</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/vouchers')">Vouchers</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/about')">About Us</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" @click.prevent="handleNavigation('/contact')">Contact Us</a>
        </div>
      </div>

      <!-- Desktop navigation (existing) -->
      <div class="desktop-nav">
        <div class="nav-brand" :class="{ 'scrolled': isScrolled }">
          <a href="#" class="nav-link" @click.prevent="handleNavigation('/')">
            <img src="../assets/images/logo.png" class="logo" :class="{ 'scrolled': isScrolled }">
          </a>
        </div>
        <div class="nav-menu" :class="{ 'scrolled': isScrolled }">
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/bookings')">Bookings</a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/menu')">Menu</a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/whatson')">Whats On</a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/vouchers')">Vouchers</a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/about')">About Us</a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/contact')">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigation } from '../composables/useNavigation.js'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const navigation = useNavigation()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleNavigation = (path) => {
  navigation.navigateTo(path)
  closeMobileMenu()
}

const setupScrollListener = () => {
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

onMounted(() => {
  setupScrollListener()
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
  padding: var(--spacing-xs) var(--spacing-xxxl);
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
  margin-bottom: 0px;
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

/* Mobile Navigation Styles */
.mobile-nav {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: var(--transition-navbar);
}

.nav-brand-mobile {
  flex-shrink: 0;
  transition: var(--transition-navbar);
}

.logo-mobile {
  height: var(--logo-size-mobile-default);
  width: var(--logo-size-mobile-default);
  transition: var(--transition-navbar);
  margin-top: 600px;
}

.header.scrolled .logo-mobile {
  margin-top: 0;
  height: var(--logo-size-mobile-scrolled);
  width: var(--logo-size-mobile-scrolled);
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
  box-shadow: 0 2px 10px var(--color-primary-transparent-10);
  transform: translateY(calc(-100% - 100px));
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
    padding: var(--spacing-md) var(--spacing-md);
  }

  .mobile-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .mobile-nav.scrolled {
    justify-content: space-between;
  }

  .nav-brand-mobile {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: var(--transition-navbar);
  }

  .mobile-nav.scrolled .nav-brand-mobile {
    position: static;
    left: auto;
    transform: none;
  }

  .hamburger {
    position: absolute;
    right: 0;
    top: 15px;
    transition: var(--transition-navbar);
  }

  .mobile-nav.scrolled .hamburger {
    position: absolute;
    right: 0;
    top: 15px;
  }

  .mobile-menu {
    display: block;
  }

  .desktop-nav {
    display: none;
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
