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
