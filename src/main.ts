import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

const app = createApp(App)

Object.values(
  import.meta.glob<{ install: UserPlugin }>('./plugins/*.ts', { eager: true }),
).forEach(i => i.install?.(app))

app.mount('#app')
