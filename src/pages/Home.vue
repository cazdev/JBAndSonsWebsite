<template>
  <div>
    <WhatsOn />
    <HomeMenu />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
import WhatsOn from '../components/WhatsOn.vue'
import HomeMenu from '../components/HomeMenu.vue'

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
