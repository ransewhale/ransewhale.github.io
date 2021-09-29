import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ransewhale.net',
    title: 'RWapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ransewhale.net' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'twitter:card', content: 'summary' },
      { hid: 'og:image', property: 'og:image', content: 'https://ransewhale.net/rw.png' },
      { name: 'google-site-verification', content: 'Bh8GvN7afmYEnPtnXs96phh7Prjhii9kACFQESSVTgg' },
      {}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'},
      { rel: 'stylesheet', type: 'text/css', href: '/style/common.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/google-gtag',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // i18n
  i18n: {
    langDir: '~/lang',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json' },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json' }
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja'
    }
  },

  // Google Analytics
  'google-gtag': {
    id: 'G-GCWY9HGPS0',
    debug: true
  },
  
  generate: {
    fallback: true,
  }
}
