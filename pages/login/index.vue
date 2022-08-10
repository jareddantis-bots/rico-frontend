<template>
  <div
    class="w-full h-full flex justify-center items-center"
  >
    <div class="bg-white w-72 p-8 rounded-lg text-center text-black">
      <img
        src="/rico.png"
        alt="Rico"
        class="mx-auto w-16 h-16 mb-4 rounded-full"
      />
      <h1 class="text-2xl font-bold">Dashboard login</h1>
      <p class="mt-2 mb-8">Manage Rico for your server</p>
      <button
        class="text-center bg-purple-500 hover:bg-purple-400 active:bg-purple-600 rounded-md font-semibold text-white w-full p-4 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="store.isLoggedIn"
        @click="login"
      >
        Log in with Discord
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/stores'

export default {
  name: 'LoginPage',
  setup() {
    const store = useStore()
    const config = useRuntimeConfig()
    return { store, config }
  },
  beforeMount() {
    // Check if session ID is in query parameters
    const query = this.$route.query
    if (query.session_id !== null && query.expires_at !== null) {
      // Save session ID and expiry to state
      this.store.login(query.session_id, parseInt(query.expires_at))
    }

    // Redirect to dashboard if already logged in
    if (this.store.isLoggedIn) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    login() {
      window.location.href = this.config.apiBase + '/auth/login'
    },
  },
}
</script>
