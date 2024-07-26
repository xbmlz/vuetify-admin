import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { LOGIN_ROUTE, NOT_FOUND_ROUTE, ROOT_ROUTE } from './basic'

const modules = import.meta.glob('./modules/*.ts', { eager: true })

function formatModules(_modules: any, result: RouteRecordRaw[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule)
      return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

export const staticRoutes: RouteRecordRaw[] = formatModules(modules, [])

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [LOGIN_ROUTE, ROOT_ROUTE, ...staticRoutes, NOT_FOUND_ROUTE],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
