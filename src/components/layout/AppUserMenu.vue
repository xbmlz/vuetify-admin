<script setup lang="ts">

</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        icon
        v-bind="props"
      >
        <v-avatar
          color="brown"
          size="small"
        >
          <v-img
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          />
        </v-avatar>
      </v-btn>
    </template>

    <v-list slim density="compact" lines="one">
      <v-list-item
        prepend-icon="mdi-bell-outline"
        title="Notifications"
      />
      <v-list-item
        prepend-icon="mdi-cog-outline"
        title="Settings"
      />
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
      />
    </v-list>
  </v-menu>
</template>
