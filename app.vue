<template>
  <div
      id="rico-root"
      class="w-screen h-screen bg-slate-900 text-slate-100"
  >
    <!-- Navbar -->
    <nav
        v-show="store.isLoggedIn && $route.path.startsWith('/dashboard')"
        class="w-full position-sticky flex justify-between items-center px-8 py-4"
    >
      <!-- Navlinks -->
      <div
        class="grid grid-flow-col gap-x-6 select-none items-center"
      >
        <!-- Back button -->
        <span
            v-show="$route.name !== 'dashboard'"
            @click="$router.go(-1)"
            class="material-symbols-outlined cursor-pointer p-1 rounded-full hover:bg-slate-700 active:bg-slate-600"
        >
          arrow_back
        </span>

        <!-- Home button -->
        <span class="font-bold text-xl">Rico</span>

        <!-- Other links -->
        <a
            v-for="link in navLinks"
            :href="link.link"
            rel="noopener"
            target="_blank"
            class="text-slate-400 hover:text-slate-100 text-xl"
        >
          {{ link.text }}
        </a>
      </div>

      <!-- Logout menu -->
      <div
        class="flex items-center select-none"
      >
        <!-- User details -->
        <h6
          class="text-right text-white"
        >
          Hi, <strong>{{ store.username || 'User' }}</strong>
        </h6>
        <img
            :src="avatarUrl"
            :alt="store.username"
            class="rounded-full w-8 h-8 ml-4"
        >
      </div>
    </nav>

    <NuxtPage
      class="p-8"
    />
  </div>
</template>

<script>
import { useStore } from '@/stores'

export default {
  name: 'RicoApp',
  setup() {
    const store = useStore()
    const config = useRuntimeConfig()
    return { store, config }
  },
  data() {
    return {
      navLinks: [
        { text: 'Invite', link: '#' },
        { text: 'Docs', link: '#' },
        { text: 'GitHub', link: this.config.public.githubUrl }
      ]
    }
  },
  computed: {
    avatarUrl() {
      if (!this.store.isLoggedIn) { return '/rico.png' }
      return 'https://cdn.discordapp.com/avatars/' + this.store.userId + '/' + this.store.avatar + '.png'
    }
  }
}
</script>
