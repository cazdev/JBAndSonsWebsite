<template>
  <div>
    <h1>{{ about.pageTitle }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'

class AboutComponent {
  constructor() {
    this.pageMeta = usePageMeta('About', 'JB & Sons | Whats On')
    this.pageTitle = 'Whats On'
  }

  init() {
    this.pageMeta.setTitle('Whats On')
    this.pageMeta.updateMeta()
  }
}

const about = new AboutComponent()

onMounted(() => {
  about.init()
})
</script>

<style scoped>
</style>
