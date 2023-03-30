// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
          title: 'Azure OpenAI Examples',
          meta: [{ name: 'description', content: 'Azure OpenAI のサンプル' }],
          link: [{ rel: 'icon', href: '/favicon.ico' }],
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
      // public設定
      public: {
      },
      // private設定
      aoaiEndpoint: '',
      aoaiDeployname: '',
      aoaiApikey: '',
    }
})
