// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { en, zhHans } from 'vuetify/locale'
import { md3 } from 'vuetify/blueprints'

export const install: UserPlugin = (app) => {
  const vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: useDark().value ? 'dark' : 'light',
    },
    locale: {
      locale: 'zhHans',
      messages: { zhHans, en },
    },
    icons: {
      defaultSet: 'mdi',
    },
  })
  app.use(vuetify)
}
