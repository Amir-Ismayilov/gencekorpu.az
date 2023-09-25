export default {
  ssr: false,
  axios: {
    baseURL: process.env.API_URL
  },
  head: {
    title: 'Gəncə Körpü',
    // titleTemplate: '%s - rəsmi sayt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Bridge construction'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'company', content: 'Lider Web Studio'},
      {name: 'developer', content: 'Amir Ismayilov'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#4BA0EE', throttle: 0, height: '3px', css: true},

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'leaflet/dist/leaflet.css',
    'leaflet-fullscreen/dist/leaflet.fullscreen.css',
    '@/assets/app.css'
  ],

  plugins: [
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/vue-gallery.client.js'},
    {src: '~/plugins/vue-toast.js'},
    {src: '~/plugins/vuelidate.js'},
    {src: '~/plugins/vue-awesome-swiper.js', ssr: false}
  ],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      { code: 'az', name: 'Azerbaijani', iso: 'az-AZ' },
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'ru', name: 'Russian', iso: 'ru-RU' }
    ],
    defaultLocale: 'az',
    // strategy: "prefix",
    vueI18n: {
      fallbackLocale: 'en',
      strategy: 'no_prefix',
      messages: {
        az: require('./lang/az.json'),
        en: require('./lang/en.json'),
        ru: require('./lang/ru.json')
      }
    }
  },

  build: {},
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {x: 0, y: 0};
      }
    }
  }
}
