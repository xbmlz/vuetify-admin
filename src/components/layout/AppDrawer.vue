<script setup lang="ts">
import { useDisplay } from 'vuetify'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash-es'
import pkg from '../../../package.json'
import { staticRoutes } from '@/router'

const appStore = useAppStore()
const { mobile, lgAndUp, width } = useDisplay()

const {
  drawer: drawerStored,
} = storeToRefs(appStore)

const drawer = computed({
  get() {
    if (!mobile.value)
      return drawerStored.value
    return false
  },
  set(val: boolean) {
    drawerStored.value = val
  },
})

const mini = computed(() => !drawerStored.value && !mobile.value)

nextTick(() => {
  drawerStored.value = lgAndUp.value && width.value !== 1280
})

// const appRoute = computed(() => {
//   // TODO: get app route from server
//   return clientRoutes
// })

// const drawerRoutes = computed(() => {
//   const copyRoutes = cloneDeep(appRoute.value) as RouteRecordRaw[]

//   copyRoutes.sort((a: RouteRecordRaw, b: RouteRecordRaw) => {
//     return (a.meta?.order || 0) - (b.meta?.order || 0)
//   })
//   function travel(_routes: RouteRecordRaw[], layer: number) {
//     if (!_routes)
//       return null

//     const collector: any = _routes.map((element) => {
//       // TODO: auth

//       // leaf node
//       if (element.meta?.hideChildren || !element.children) {
//         element.children = []
//         return element
//       }

//       // route filter hideInMenu true
//       element.children = element.children.filter(x => x.meta?.hidden !== true)

//       // Associated child node
//       const subItem = travel(element.children, layer + 1)

//       if (subItem.length) {
//         element.children = subItem
//         return element
//       }

//       // the else logic
//       if (layer > 1) {
//         element.children = subItem
//         return element
//       }

//       if (element.meta?.hideInMenu === false) {
//         return element
//       }

//       return null
//     })
//     return collector.filter(Boolean)
//   }
//   return travel(copyRoutes, 0)
// })

interface ItemProps {
  prependIcon: string
  to: string
}

interface Item {
  title: string
  props: ItemProps
  children?: Item[]
}

function formatRoutes(routes: RouteRecordRaw[]): Item[] {
  return routes.map((route) => {
    const { meta, children } = route
    const { title, icon } = meta || {}
    const item: Item = {
      title: title || '',
      props: {
        prependIcon: icon || '',
        to: route.path,
      },
    }
    if (children) {
      item.children = formatRoutes(children)
    }
    return item
  })
}

const items = computed(() => {
  const copyRoutes = cloneDeep(staticRoutes) as RouteRecordRaw[]
  return formatRoutes(copyRoutes)
})
</script>

<template>
  <v-navigation-drawer
    id="app-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="mini"
    :mini-variant="mini"
    app
  >
    <v-list expand dense nav>
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        subtitle="john@google.com"
        title="John Leider"
      >
        <template #append>
          <v-btn
            icon="mdi-menu-down"
            size="small"
            variant="text"
          />
        </template>
      </v-list-item>
    </v-list>
    <v-list :items="items">
      <template #title="{ item }">
        {{ item.title }}
      </template>
    </v-list>

    <template #append>
      <v-divider />

      <div class="d-flex align-center text-caption text-medium-emphasis pa-2">
        <div class="d-flex ms-auto overflow-hidden">
          <v-btn
            :text="pkg.version"
            class="text-caption"
            prepend-icon="mdi-tag-outline"
            size="small"
            variant="text"
            slim
          />
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
