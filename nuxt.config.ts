// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '~/assets/css/main.css'
  ],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
      '@nuxt/ui',
     '@pinia/nuxt',
     'pinia-plugin-persistedstate/nuxt',
  ],
  components: [
    { path: '~/components/layout', prefix: 'Layout' }, // e.g., <LayoutHeader />
    // { path: '~/components/ui', prefix: 'Ui' },          // optional
    // { path: '~/components/forms', prefix: 'Form' },     // optional
  ],
})