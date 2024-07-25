<script setup lang="ts">
const route = useRoute()

const items = route.matched.map(item => ({
  title: item.meta.title || '',
  disabled: false,
  href: item.path,
}))
</script>

<template>
  <v-breadcrumbs :items="items" />
</template>
