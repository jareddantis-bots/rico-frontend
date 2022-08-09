import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie, {
    cookieOptions: {
      maxAge: 3600,
      sameSite: 'strict'
    }
  }))
})
