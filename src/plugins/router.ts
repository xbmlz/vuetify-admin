import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

export const install: UserPlugin = (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(routes),
  })

  app.use(router)
}
