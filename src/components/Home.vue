<template>
  <div>
    <h1>{{ home.pageTitle }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'

class HomeComponent {
  constructor() {
    this.pageMeta = usePageMeta('Home', 'JB & Sons')
    this.pageTitle = 'Home'
  }

  init() {
    this.pageMeta.setTitle('Home')
    this.pageMeta.updateMeta()
  }
}

const home = new HomeComponent()

onMounted(() => {
  home.init()
})
</script>

<style scoped>
</style>
