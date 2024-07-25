<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineProps({
  items: {
    type: Array as PropType<RouteRecordRaw[]>,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="item in items" :key="item.path">
    <template v-if="!item.children || !item.children.length">
      <v-list-item :to="item.path" :title="item.meta?.title" :prepend-icon="item.meta?.icon" />
    </template>
    <v-list-group v-else value="Admin">
      <template #activator>
        <AppDrawerItem :item="item.children" />
      </template>
    </v-list-group>
  </template>
</template>
