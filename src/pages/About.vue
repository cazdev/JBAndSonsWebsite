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
    this.pageMeta = usePageMeta('About', 'JB & Sons | About')
    this.pageTitle = 'About'
  }

  init() {
    this.pageMeta.setTitle('About')
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
