<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = useDark({
  onChanged(dark: boolean) {
    theme.global.name.value = dark ? 'dark' : 'light'
  },
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <v-btn
    size="small"
    color="medium-emphasis"
    :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
    @click="toggleDark()"
  />
</template>
