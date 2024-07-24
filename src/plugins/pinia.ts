import { createPinia } from 'pinia'

export const pinia = createPinia()

export const install: UserPlugin = (app) => {
  app.use(pinia)
}
