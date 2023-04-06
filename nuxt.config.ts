// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
          title: 'Azure OpenAI Examples',
          meta: [{ name: 'description', content: 'Azure OpenAI のサンプル' }],
          link: [{ rel: 'icon', href: '/favicon.ico' }],
        },
    },
    css: [
      'vuetify/lib/styles/main.sass'
    ],
    build: {
      transpile: ['vuetify']
    },
    runtimeConfig: {
      // public設定
      public: {
        maxTokens : 800,
        temperature : 0.8,
        topP : 0.95,
        frequencyPenalty : 0,
        presencePenalty : 0,
      },
      // private設定
      aoaiEndpoint: '',
      aoaiDeployname: '',
      aoaiApikey: '',
      aoaiApiVersion: '2023-03-15-preview',
    }
})
