import { ref, computed, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export class NavigationComposable {
  constructor() {
    this.router = useRouter()
    this.route = useRoute()
    this.isMenuOpen = ref(false)
  }

  get currentPath() {
    return computed(() => this.route.path)
  }

  navigateTo(path) {
    this.router.push(path)
    this.scrollToMainContent()
    this.closeMenu()
  }

  scrollToMainContent() {
    // Use nextTick to ensure the route has changed and DOM is updated
    nextTick(() => {
      const mainContent = document.querySelector('.main-content')
      const header = document.querySelector('.header')

      if (mainContent) {
        // Get the main content's position
        const mainContentRect = mainContent.getBoundingClientRect()
        const mainContentTop = mainContentRect.top + window.pageYOffset

        // Calculate header height (accounting for potential dynamic sizing)
        let headerHeight = 0
        if (header) {
          headerHeight = header.offsetHeight
        }

        // Scroll to main content position minus header height with some padding
        const targetPosition = mainContentTop - headerHeight - 20 // 20px padding

        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        })
      } else {
        // Fallback to top of page if main-content not found
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  toggleMenu() {
    this.isMenuOpen.value = !this.isMenuOpen.value
  }

  closeMenu() {
    this.isMenuOpen.value = false
  }

  isActiveRoute(path) {
    return computed(() => this.route.path === path)
  }
}

export function useNavigation() {
  return new NavigationComposable()
}
