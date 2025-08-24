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
    this.pageMeta = usePageMeta('About', 'JB & Sons | Vouchers')
    this.pageTitle = 'Vouchers'
  }

  init() {
    this.pageMeta.setTitle('Vouchers')
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
