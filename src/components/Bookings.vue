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
    this.pageMeta = usePageMeta('Bookings', 'JB & Sons | Bookings')
    this.pageTitle = 'Bookings'
  }

  init() {
    this.pageMeta.setTitle('Bookings')
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
