<script setup lang="ts">
const appStore = useAppStore()
const { drawer } = storeToRefs(appStore)
</script>

<template>
  <v-app-bar app flat :height="52">
    <template #prepend>
      <v-btn
        elevation="1"
        style="z-index: 1"
        size="small"
        :icon="drawer ? 'mdi-backburger' : 'mdi-menu-open' "
        @click="drawer = !drawer"
      />
      <AppBreadcrumbs />
    </template>

    <template #append>
      <AppLanguage />
      <AppThemeToggle />
      <AppUserMenu />
    </template>
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
