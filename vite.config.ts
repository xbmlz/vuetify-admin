import { URL, fileURLToPath } from 'node:url'
import process from 'node:process'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import dayjs from 'dayjs'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const isBuild = process.argv.slice(2).includes('build')

  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      // https://vuejs.org/
      Vue({
        template: { transformAssetUrls },
      }),

      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss',
        },
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'pinia',
          '@vueuse/core',
          'vue-router',
          'vue-i18n',
        ],
        dts: 'types/auto-imports.d.ts',
        vueTemplate: true,
        dirs: [
          'src/composables',
          'src/stores',
        ],
        eslintrc: {
          enabled: true,
        },
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
        ],
      }),

      // https://unocss.dev/
      UnoCSS(),

      // https://devtools-next.vuejs.org/
      !isBuild && VueDevTools(),
    ],
    define: {
      __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
    },
  }
}
