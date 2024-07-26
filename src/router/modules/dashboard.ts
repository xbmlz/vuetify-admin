import type { RouteRecordRaw } from 'vue-router'
import { DEFAULT_LAYOUT } from '../basic'

const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'DashboardLayout',
  component: DEFAULT_LAYOUT,
  redirect: '/dashboard/index',
  meta: {
    title: '仪表盘',
    icon: 'mdi-monitor-dashboard',
    order: 1,
  },
  children: [
    {
      path: 'index',
      name: 'Dashboard',
      component: () => import('@/pages/dashboard/index.vue'),
      meta: {
        title: '首页',
        order: 1,
      },
    },
  ],
}

export default dashboard
