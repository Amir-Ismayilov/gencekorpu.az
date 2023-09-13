export default {
  locales: ['az', 'en', 'fr'], // Список поддерживаемых языков
  defaultLocale: 'az',  // Язык по умолчанию
  vueI18n: {
    fallbackLocale: 'en', // Резервный язык (если перевод не найден)
    messages: {
      az: require('./locales/az.json'),
      en: require('./locales/en.json'), // Файлы с переводами для каждого языка
      fr: require('./locales/fr.json'),
    },
  },
}
