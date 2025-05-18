// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: true,
  modules: [
  '@nuxtjs/tailwindcss',
  // '@nuxtjs/supabase',
  '@nuxt/icon',
  'nuxt-lodash',
  '@pinia-plugin-persistedstate/nuxt',
  '@pinia/nuxt'
],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK
    }
  },

  nitro: {
    routeRules: {
      '/.well-known/appspecific/com.chrome.devtools.json': { static: true }
    }
  },

  app: {
    head: {
      script: [
        {
          src:'https://js.stripe.com/v3/', 
          defer: true,
        },
      ],
    },
  },

})
