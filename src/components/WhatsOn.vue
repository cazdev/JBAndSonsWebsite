<template>
  <div id="whats-on">
    <div class="video-container">
      <h1 class="whats-on-title">WHAT'S <br/> ON</h1>
      <video
        ref="videoRef"
        loop
        muted
        playsinline
        class="beer-pour-video"
        preload="none"
      >
        <source data-src="/src/assets/videos/BeerPour.webm" type="video/webm">
      </video>
    </div>
    <div class="whats-on-text">
      <div>
        HAPPY HOUR<br/>
        4pm - 6pm<br/>
        EVERY DAY
      </div>
      <div>
        GUEST BEER TAPS<br/>
        CONSTANTLY ROTATING
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLazyLoading } from '../composables/useLazyLoading.js'

const videoRef = ref(null)
const { lazyLoadVideo } = useLazyLoading()

onMounted(() => {
  if (videoRef.value) {
    // Set up lazy loading for the video
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target
          const source = video.querySelector('source[data-src]')

          if (source && source.dataset.src) {
            // Load the video source
            source.src = source.dataset.src
            source.removeAttribute('data-src')
            video.load()

            // Start playing the video
            video.play().catch(e => {
              console.log('Video autoplay failed:', e)
            })
          }

          // Stop observing once loaded
          observer.unobserve(video)
        }
      })
    }, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    })

    observer.observe(videoRef.value)
  }
})
</script>

<style scoped>
#whats-on {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 64px;
  padding: 20px;
}

.video-container {
  position: relative;
  display: flex;
  align-items: center;
}

.whats-on-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  gap: 32px;
  width: 300px;
  color: var(--color-primary-dark);
}

.whats-on-title {
  position: absolute;
  text-align: center;
  font-weight: 200;
  top: -48px;
  right: -128px;
  font-size: 86px;
  line-height: 86px;
  margin: 0;
  z-index: 2;
}

.beer-pour-video {
  height: 450px;
  border-radius: 8px;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  #whats-on {
    flex-direction: column;
    gap: 32px;
    padding: 48px 10px;
    min-height: auto;
  }

  .video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .whats-on-title {
    position: static;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 32px;
  }

  .beer-pour-video {
    height: 300px;
    width: 100%;
  }

  .whats-on-text {
    font-size: 16px;
    gap: 24px;
    width: 50%;
  }
}
</style>
