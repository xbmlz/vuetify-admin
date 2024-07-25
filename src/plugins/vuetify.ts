// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

export const install: UserPlugin = (app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: useDark().value ? 'dark' : 'light',
    },
  })
  app.use(vuetify)
}
