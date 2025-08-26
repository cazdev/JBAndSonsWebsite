<template>
  <div id="app">
    <AppHeader />

    <main class="main-content">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNavigation } from './composables/useNavigation.js'
import { usePageMeta } from './composables/usePageMeta.js'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

class AppComponent {
  constructor() {
    this.navigation = useNavigation()
    this.pageMeta = usePageMeta('Home', 'JB & Sons - Purveyors of fine booze & burgers')
  }

  init() {
    this.pageMeta.updateMeta()
  }
}

const app = new AppComponent()

onMounted(() => {
  app.init()
})
</script>

<style scoped>
.main-content {
  margin-top: var(--margin-top-content-default); /* Account for the initial header height */
  transition: margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.header.scrolled) + .main-content {
  margin-top: var(--margin-top-content-scrolled); /* Reduced margin when scrolled */
}

/* Add some content height to enable scrolling for testing */
.main-content {
  min-height: 150vh;
}

/* Mobile Media Queries */
@media (max-width: 768px) {
  .main-content {
    margin-top: var(--margin-top-content-mobile-default) !important;
    transition: margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :deep(.header.scrolled) + .main-content {
    margin-top: var(--margin-top-content-mobile-scrolled) !important;
  }
}
</style>
