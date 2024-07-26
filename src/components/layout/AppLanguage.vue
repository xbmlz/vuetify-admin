<script setup lang="ts">
import { useLocale } from 'vuetify'

const { locale } = useI18n()
const { current } = useLocale()

function setLang(lang: string) {
  locale.value = lang
  current.value = lang
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        size="small"
        color="medium-emphasis"
        icon="mdi-translate"
      />
    </template>

    <v-list slim density="compact" lines="one">
      <v-list-item
        :class="{ 'v-list-item--active': locale === 'zh' }"
        prepend-icon="mdi-ideogram-cjk-variant"
        title="简体中文"
        @click="setLang('zh')"
      />
      <v-list-item
        :class="{ 'v-list-item--active': locale === 'en' }"
        prepend-icon="mdi-alphabetical-variant"
        title="English"
        @click="setLang('en')"
      />
    </v-list>
  </v-menu>
</template>
