import { useStore } from '@/stores'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()
  if (!store.isLoggedIn) {
    return navigateTo('/login')
  }
})
