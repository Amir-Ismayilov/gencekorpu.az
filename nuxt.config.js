export default {
  ssr: false,
  axios: {
    baseURL: process.env.API_URL
  },
  // env: {
  //   image_url: process.env.ASSET_URL
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gəncə Korpu',
    titleTemplate: '%s - rəsmi sayt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Football'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'company', content: 'Lider Web Studio'},
      {name: 'developer', content: 'Amir Ismayilov'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#0133f6', throttle: 200, height: '3px', css: true},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'leaflet/dist/leaflet.css',
    'leaflet-fullscreen/dist/leaflet.fullscreen.css',
    '@/assets/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/vue-gallery.client.js'},
    {src: '~/plugins/vue-toast.js'},
    {src: '~/plugins/vuelidate.js'},
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-i18n',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['store-middleware'],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {x: 0, y: 0};
      }
    }
  },
}
