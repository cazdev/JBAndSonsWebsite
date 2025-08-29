import { ref, computed } from 'vue'
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
    this.closeMenu()
  }

  // Simple anchor navigation - just scroll to the element with proper offset
  navigateToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      let headerHeight = 0
      if (sectionId === 'menu') {
        headerHeight = 50
      }
      else {
        headerHeight = 80
      }
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    this.closeMenu()
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
