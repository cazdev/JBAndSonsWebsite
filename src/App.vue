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
  /* Fixed margin-top that matches the fixed header height */
  margin-top: var(--header-height-fixed);
  /* No transition needed since header height never changes */
}

/* Add some content height to enable scrolling for testing */
.main-content {
  min-height: 150vh;
}

/* Mobile Media Queries */
@media (max-width: 768px) {
  .main-content {
    /* Fixed margin-top for mobile that matches the fixed mobile header height */
    margin-top: var(--header-height-mobile-fixed);
  }
}
</style>
