<template>
  <div>
    <h1>{{ services.pageTitle }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'

class ServicesComponent {
  constructor() {
    this.pageMeta = usePageMeta('Menu', 'JB & Sons | Menu')
    this.pageTitle = 'Menu'
  }

  init() {
    this.pageMeta.setTitle('Menu')
    this.pageMeta.updateMeta()
  }
}

const services = new ServicesComponent()

onMounted(() => {
  services.init()
})
</script>

<style scoped>
</style>
