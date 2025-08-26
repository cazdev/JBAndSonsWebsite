<template>
  <div>
    <h1>{{ contact.pageTitle }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'

class ContactComponent {
  constructor() {
    this.pageMeta = usePageMeta('Contact', 'JB & Sons | Contact')
    this.pageTitle = 'Contact'
  }

  init() {
    this.pageMeta.setTitle('Contact')
    this.pageMeta.updateMeta()
  }
}

const contact = new ContactComponent()

onMounted(() => {
  contact.init()
})
</script>

<style scoped>
</style>
