// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'swiper/swiper-bundle.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts', 'nuxt-swiper', '@nuxt/ui',/* '@nuxtjs/i18n'*/],
  // i18n: {
  //   strategy: 'prefix_except_default', // Adds /uz/ but not /en/ (default)
  //   locales: [
  //     { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
  //     { code: 'uz', name: 'Uzbek', iso: 'uz-UZ', file: 'uz.json' },
  //   ],
  //   defaultLocale: 'en',  // Default language
  //   lazy: true,           // Load translations only when needed
  //   langDir: 'locales/',  // Folder where translation files are stored

  //   vueI18n: 'i18n.js'
  // },
  app: {
    head: {
      title: 'Spotify - Web Player: Music for everyone', // Add a default title for your app
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Spotify' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' }, // Add your favicon here
      ]
    },
  },
  plugins: ["~/plugins/preline.client.ts", '~/plugins/fitty.js'],
})