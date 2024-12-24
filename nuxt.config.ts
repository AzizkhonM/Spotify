// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts'],
  app: {
    head: {
      title: 'Spotify', // Add a default title for your app
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Spotify' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' }, // Add your favicon here
      ],
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
})
