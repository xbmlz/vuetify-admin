import type { RouteRecordRaw } from 'vue-router'

export const DEFAULT_LAYOUT = () => import('@/layouts/default.vue')

export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  redirect: 'dashboard',
}

export const LOGIN_ROUTE: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    requiresAuth: false,
  },
}
