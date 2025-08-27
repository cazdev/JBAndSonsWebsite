import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyLoading() {
  const observer = ref(null)

  const createObserver = (callback, options = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }

    observer.value = new IntersectionObserver(callback, { ...defaultOptions, ...options })
    return observer.value
  }

  const observeElement = (element, callback, options = {}) => {
    if (!element) return

    const obs = createObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target)
          obs.unobserve(entry.target)
        }
      })
    }, options)

    obs.observe(element)
  }

  const lazyLoadVideo = (videoElement) => {
    if (!videoElement) return

    observeElement(videoElement, (video) => {
      // Load video source if not already loaded
      if (video.dataset.src && !video.src) {
        video.src = video.dataset.src
        video.load()
      }

      // Start playing if autoplay is enabled
      if (video.hasAttribute('autoplay')) {
        video.play().catch(e => {
          console.log('Video autoplay failed:', e)
        })
      }
    })
  }

  const lazyLoadImage = (imageElement) => {
    if (!imageElement) return

    observeElement(imageElement, (img) => {
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      }
    })
  }

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    lazyLoadVideo,
    lazyLoadImage,
    observeElement
  }
}
