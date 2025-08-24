import { ref, computed } from 'vue'

export class PageMetaComposable {
  constructor(initialTitle = '', initialDescription = '') {
    this.title = ref(initialTitle)
    this.description = ref(initialDescription)
    this.keywords = ref([])
    this.loading = ref(false)
  }

  get pageTitle() {
    return computed(() => this.title.value ? `JB & Sons | ${this.title.value}` : 'JB & Sons')
  }

  get pageDescription() {
    return computed(() => this.description.value || 'JB & Sons')
  }

  setTitle(newTitle) {
    this.title.value = newTitle
    document.title = this.pageTitle.value
  }

  setDescription(newDescription) {
    this.description.value = newDescription
  }

  setKeywords(keywordArray) {
    this.keywords.value = keywordArray
  }

  setLoading(isLoading) {
    this.loading.value = isLoading
  }

  updateMeta() {
    document.title = this.pageTitle.value

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = this.pageDescription.value

    // Update meta keywords
    if (this.keywords.value.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.content = this.keywords.value.join(', ')
    }
  }
}

export function usePageMeta(title = '', description = '') {
  return new PageMetaComposable(title, description)
}
