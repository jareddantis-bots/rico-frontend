<template>
  <div
      id="rico-root"
      class="w-screen h-screen bg-slate-900 text-slate-100"
  >
    <!-- Navbar -->
    <nav v-show="store.isLoggedIn && $route.path.startsWith('/dashboard')">
      <p class="text-white">Hello, {{ store.username }}</p>
      <img :src="'https://cdn.discordapp.com/avatars/' + store.userId + '/' + store.avatar + '.png'" alt="">
    </nav>

    <NuxtPage />
  </div>
</template>

<script>
import { useStore } from '@/stores'

export default {
  name: 'RicoApp',
  setup() {
    const store = useStore()
    return { store }
  }
}
</script>
