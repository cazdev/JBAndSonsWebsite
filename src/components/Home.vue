<template>
  <div>
    <h1>{{ home.pageTitle }}</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus a tortor vitae varius. Praesent aliquam urna at porta tincidunt. Praesent vulputate metus quis quam tristique cursus. Nam vel ullamcorper magna. Quisque ac blandit ligula. Mauris vitae lacus purus. Etiam eu placerat erat. Aenean orci ex, sodales sit amet hendrerit nec, pulvinar ac mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero augue. In dictum dolor aliquam ligula lacinia, non hendrerit nulla sagittis. Sed tempus eros ac diam lobortis, eu faucibus nulla egestas. Praesent in odio mi. Vivamus a lorem hendrerit, ornare erat quis, suscipit orci. In tempus semper felis, ut tempus ex finibus a.

    Phasellus dictum, enim vel efficitur consequat, massa ante facilisis quam, sed consequat diam dui nec mauris. Quisque dapibus at purus eget suscipit. Vestibulum sit amet lectus pellentesque, sollicitudin ante sed, maximus sem. Maecenas id ornare nulla, ac aliquam magna. Sed tristique orci bibendum fringilla fringilla. Nunc sollicitudin, augue vel venenatis dignissim, lorem ligula euismod dolor, ac commodo augue nisi quis neque. Curabitur ac risus at ligula congue bibendum id eu leo. Suspendisse at lectus ex. Suspendisse malesuada sagittis felis, in mattis tortor placerat eget. Nulla blandit tempus tincidunt. Etiam ullamcorper lorem ut tellus placerat, at tempor lacus dapibus.

    Vivamus arcu orci, fringilla quis erat id, fermentum egestas lectus. Ut ultricies, neque eu sollicitudin tincidunt, nulla ligula posuere felis, eget scelerisque magna metus at mi. Etiam elementum consequat dui, sit amet lobortis eros ornare non. Aenean nec diam eu libero vestibulum imperdiet. Nam vitae elementum ex. Integer laoreet, est ut finibus lacinia, erat est vehicula arcu, nec cursus dolor elit non purus. Praesent ipsum lacus, ornare id nulla et, suscipit viverra leo. Morbi euismod consequat enim at ultricies. Sed id imperdiet libero. Phasellus sit amet placerat nibh. Curabitur in consectetur lacus. Duis metus felis, auctor eu mi in, elementum condimentum nunc. Ut velit erat, blandit eget magna vitae, rhoncus consequat ante. Mauris ullamcorper orci a elementum hendrerit. Proin et lectus lacinia, porttitor enim tempor, sollicitudin justo. Aliquam accumsan ultricies nisi, aliquet blandit lacus lobortis et.
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
