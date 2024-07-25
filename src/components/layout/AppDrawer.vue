<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import { useDisplay } from 'vuetify'

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

const items = computed(() => {
  routes.forEach((route) => {
    // eslint-disable-next-line no-console
    console.log(route)
  })
  return routes.map((route) => {
    return {
      title: route.meta?.title,
    }
  })
})

// eslint-disable-next-line no-console
console.log(items.value)

nextTick(() => {
  drawerStored.value = lgAndUp.value && width.value !== 1280
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
    <v-list>
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

    <v-list expand dense nav :items="items" />
  </v-navigation-drawer>
</template>
