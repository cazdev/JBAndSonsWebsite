<template>
  <!-- Phantom spacer that maintains consistent DOM height -->
  <div class="header-spacer"></div>

  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="navbar">
      <!-- Mobile hamburger menu -->
      <div class="mobile-nav" :class="{ 'scrolled': isScrolled }">
        <div class="nav-brand-mobile" :class="{ 'scrolled': isScrolled }">
          <a href="#" class="nav-link" @click.prevent="handleNavigation('/')">
            <picture>
              <source srcset="../assets/images/logo.webp" type="image/webp">
              <source media="(max-width: 480px)" srcset="../assets/images/logo-100w.png">
              <source media="(max-width: 768px)" srcset="../assets/images/logo-200w.png">
              <img src="../assets/images/logo-400w.png"
                   class="logo-mobile"
                   :class="{ 'scrolled': isScrolled }"
                   width="150"
                   height="142"
                   fetchpriority="high"
                   alt="JB & Sons Logo">
            </picture>
          </a>
        </div>
        <button class="hamburger"
                @click="toggleMobileMenu"
                :class="{ 'active': isMobileMenuOpen }"
                :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
                :aria-expanded="isMobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile menu dropdown -->
      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <div class="mobile-nav-item">
          <a href="/" class="mobile-nav-link" @click="closeMobileMenu">Home</a>
        </div>
        <div class="mobile-nav-item">
          <a href="/bookings" class="mobile-nav-link" @click="closeMobileMenu">Bookings</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#menu" class="mobile-nav-link" @click.prevent="handleAnchorNavigation('menu')">Menu</a>
        </div>
        <div class="mobile-nav-item">
          <a href="#whats-on" class="mobile-nav-link" @click.prevent="handleAnchorNavigation('whats-on')">Whats On</a>
        </div>
        <div class="mobile-nav-item">
          <a href="/vouchers" class="mobile-nav-link" @click="closeMobileMenu">Vouchers</a>
        </div>
        <div class="mobile-nav-item">
          <a href="/about" class="mobile-nav-link" @click="closeMobileMenu">About</a>
        </div>
        <div class="mobile-nav-item">
          <a href="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</a>
        </div>
      </div>

      <!-- Desktop navigation -->
      <div class="desktop-nav">
        <!-- Header container with fixed height -->
        <div class="header-container">
          <!-- Logo container with consistent positioning -->
          <div class="nav-brand" :class="{ 'scrolled': isScrolled }">
            <a href="#" class="nav-link" @click.prevent="handleNavigation('/')">
              <picture>
                <source srcset="../assets/images/logo.webp" type="image/webp">
                <source media="(max-width: 768px)" srcset="../assets/images/logo-200w.png">
                <source media="(max-width: 1200px)" srcset="../assets/images/logo-400w.png">
                <img src="../assets/images/logo-400w.png"
                     class="logo"
                     :class="{ 'scrolled': isScrolled }"
                     width="150"
                     height="142"
                     fetchpriority="high"
                     alt="JB & Sons Logo">
              </picture>
            </a>
          </div>

          <!-- Navigation menu with consistent positioning -->
          <div class="nav-menu" :class="{ 'scrolled': isScrolled }">
            <div class="nav-item">
              <a href="/bookings" class="nav-link">Bookings</a>
            </div>
            <div class="nav-item">
              <a href="#menu" class="nav-link" @click.prevent="handleAnchorNavigation('menu')">Menu</a>
            </div>
            <div class="nav-item">
              <a href="#whats-on" class="nav-link" @click.prevent="handleAnchorNavigation('whats-on')">Whats On</a>
            </div>
            <div class="nav-item">
              <a href="/vouchers" class="nav-link">Vouchers</a>
            </div>
            <div class="nav-item">
              <a href="/about" class="nav-link">About</a>
            </div>
            <div class="nav-item">
              <a href="/contact" class="nav-link">Contact</a>
            </div>
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


const handleAnchorNavigation = (sectionId) => {
  // Check if we're on the home page
  if (navigation.currentPath.value === '/') {
    // Already on home page, just scroll to section
    navigation.navigateToSection(sectionId)
  } else {
    // Navigate to home page first, then scroll to section
    navigation.navigateTo('/').then(() => {
      setTimeout(() => {
        navigation.navigateToSection(sectionId)
      }, 100)
    })
  }
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
/* Phantom spacer - invisible element that maintains consistent DOM height */
.header-spacer {
  height: var(--header-height-fixed);
  width: 100%;
  /* Invisible but takes up space in the DOM */
  visibility: hidden;
  pointer-events: none;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-header);
  padding: var(--spacing-xs) var(--spacing-xxxl);
  background-color: var(--color-background);
  /* Dynamic height that changes with scroll state */
  height: var(--header-visual-height-default);
  transition: var(--transition-navbar);
}

.header.scrolled {
  height: var(--header-visual-height-scrolled);
}

.navbar {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Desktop Navigation Container */
.desktop-nav {
  display: flex;
  width: 100%;
  height: 100%;
}

.header-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Logo positioning using absolute positioning within the fixed container */
.nav-brand {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition-navbar);
  z-index: 2;
}

.header.scrolled .nav-brand {
  left: 0;
  transform: translate(0, -50%);
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

/* Navigation menu positioning */
.nav-menu {
  position: absolute;
  left: 50%;
  top: calc(50vh + 100px);
  transform: translateX(-50%);
  display: flex;
  gap: var(--nav-gap-default);
  transition: var(--transition-navbar);
  opacity: 1;
}

.header.scrolled .nav-menu {
  top: 50%;
  left: auto;
  right: 0;
  transform: translateY(-50%);
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
  height: 100%;
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
  /* Remove the transform offset to prevent teleporting */
}

.header.scrolled .logo-mobile {
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  box-shadow: 0 2px 10px var(--color-primary-transparent-10);
  transform: translateY(-100%);
  opacity: 0;
  transition: var(--transition-fast);
  z-index: var(--z-index-mobile-menu);
  padding-top: calc(var(--spacing-md) * 2 + var(--hamburger-size));
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

/* Mobile Media Queries */
@media (max-width: 768px) {
  .header-spacer {
    height: var(--header-height-mobile-fixed);
  }

  .header {
    padding: var(--spacing-md) var(--spacing-md);
    /* Dynamic visual height for mobile */
    height: var(--header-visual-height-mobile-default);
    transition: var(--transition-navbar);
  }

  .header.scrolled {
    height: var(--header-visual-height-mobile-scrolled);
  }

  .mobile-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  }

  .mobile-nav.scrolled {
    justify-content: space-between;
  }

  .nav-brand-mobile {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition-navbar);
    z-index: 2;
  }

  .header.scrolled .nav-brand-mobile {
    left: var(--spacing-md);
    top: var(--spacing-md);
    transform: translate(0, 0);
  }

  .hamburger {
    position: fixed;
    right: var(--spacing-md);
    top: var(--spacing-md);
    transform: none;
    transition: var(--transition-navbar);
    z-index: var(--z-index-hamburger);
  }

  .mobile-nav.scrolled .hamburger {
    position: fixed;
    right: var(--spacing-md);
    top: var(--spacing-md);
    transform: none;
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
