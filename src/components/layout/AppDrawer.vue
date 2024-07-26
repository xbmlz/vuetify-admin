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

// interface ItemProps {
//   prependIcon: string
//   to: string
// }

// interface Item {
//   title: string
//   props: ItemProps
//   children?: Item[]
// }

function formatRoutes(routes: RouteRecordRaw[]): any {
  return routes.map((route) => {
    const { meta, children } = route
    const { title, icon } = meta || {}

    if (children && !meta?.hideChildren) {
      return {
        title: title || route.name,
        order: meta?.order || 0,
        children: formatRoutes(children),
        props: {
          prependIcon: icon,
        },
      }
    }
    return {
      title: title || route.name,
      order: meta?.order || 0,
      props: {
        replace: true,
        to: {
          name: route.name,
        },
      },
    }
  }).sort((a, b) => a.order - b.order)
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
    <template #prepend>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        />
      </v-list>

      <v-divider />
    </template>

    <v-list :items="items" />

    <template #append>
      <v-divider />

      <div class="text-emphasis flex items-center pa-2 text-xl">
        <div class="ms-auto flex overflow-hidden">
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
