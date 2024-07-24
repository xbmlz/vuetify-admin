import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // title
    title?: string
    // icon
    icon?: string
  }
}
