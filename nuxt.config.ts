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
  '@pinia/nuxt'
],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },

  app: {
    head: {
      script: [
        {
          src:'https://js.stripe.com/v3/', defer: true
        }
      ],
    }
  }

})
