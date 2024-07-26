import type { RouteRecordRaw } from 'vue-router'

export const DEFAULT_LAYOUT = () => import('@/layouts/default.vue')

export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  redirect: 'dashboard/index',
}

export const LOGIN_ROUTE: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
  },
}

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/layouts/404.vue'),
  meta: {
  },
}
