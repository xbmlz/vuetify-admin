import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import zh from '@/locales/zh.json'

export const install: UserPlugin = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { zh, en },
    missingWarn: false,
    fallbackWarn: false,
  })

  app.use(i18n)
}
