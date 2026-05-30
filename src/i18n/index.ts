import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhCN from './zh-CN.json'
import zhTW from './zh-TW.json'
import ja from './ja.json'
import ko from './ko.json'
import es from './es.json'
import fr from './fr.json'
import ru from './ru.json'

const savedLocale = localStorage.getItem('celestia-locale')
const browserLocale = navigator.language

function detectLocale(): string {
  if (savedLocale && ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'es', 'fr', 'ru'].includes(savedLocale)) {
    return savedLocale
  }
  if (browserLocale.startsWith('zh')) {
    return browserLocale.includes('TW') || browserLocale.includes('HK') ? 'zh-TW' : 'zh-CN'
  }
  if (browserLocale.startsWith('ja')) return 'ja'
  if (browserLocale.startsWith('ko')) return 'ko'
  if (browserLocale.startsWith('es')) return 'es'
  if (browserLocale.startsWith('fr')) return 'fr'
  if (browserLocale.startsWith('ru')) return 'ru'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    ja,
    ko,
    es,
    fr,
    ru,
  },
})

export default i18n
