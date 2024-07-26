import type { RouteRecordRaw } from 'vue-router'
import { DEFAULT_LAYOUT } from '../basic'

const components: RouteRecordRaw = {
  path: '/components',
  name: 'ComponentsLayout',
  component: DEFAULT_LAYOUT,
  redirect: '/components/charts',
  meta: {
    title: '组件',
    icon: 'mdi-home',
    order: 2,
  },
  children: [
    {
      path: 'charts',
      name: 'Charts',
      component: () => import('@/pages/components/charts/index.vue'),
      meta: {
        title: 'Charts',
        order: 2,
      },
    },
    {
      path: 'markdown',
      name: 'Markdown',
      component: () => import('@/pages/components/markdown/index.vue'),
      meta: {
        title: 'Markdown',
        order: 2,
      },
    },
  ],
}

export default components
