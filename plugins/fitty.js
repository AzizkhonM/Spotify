import fitty from 'fitty'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      fitty: (selector, options = {}) => fitty(selector, options)
    }
  }
})
