<script setup lang="ts">
const appStore = useAppStore()
const { drawer } = storeToRefs(appStore)
</script>

<template>
  <v-app-bar app flat :height="48">
    <v-btn elevation="1" fab small style="z-index: 1" @click="drawer = !drawer">
      <v-icon>
        {{ drawer ? 'mdi-backburger' : 'mdi-menu-open' }}
      </v-icon>
    </v-btn>

    <AppBreadcrumbs />
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  border-block-end-width: thin !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(
    var(--v-border-color),
    var(--v-border-opacity)
  ) !important;
}
</style>
