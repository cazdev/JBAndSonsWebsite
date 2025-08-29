<template>
  <div>
    <div id="home"></div>
    <WhatsOn />
    <HomeMenu />
    <Locations />
    <OpenHours/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
import WhatsOn from '../components/WhatsOn.vue'
import HomeMenu from '../components/HomeMenu.vue'
import Locations from '../components/Locations.vue'
import OpenHours from '../components/OpenHours.vue'

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
