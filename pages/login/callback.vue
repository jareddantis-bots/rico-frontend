<template>
  <div
    class="w-full h-full flex justify-center items-center"
  >
    <h1
      class="text-2xl font-bold"
    >
      {{ status }}
    </h1>
  </div>
</template>

<script>
import { useStore } from '@/stores'

export default {
  name: 'LoginCallbackPage',
  data() {
    return {
      status: 'Logging in...'
    }
  },
  setup() {
    const store = useStore()
    const config = useRuntimeConfig()
    return { store, config }
  },
  beforeMount() {
    // Check query parameters
    const query = this.$route.query
    if (query.code !== null && query.state !== null) {
      // Save to backend
      $fetch(`${this.config.apiBase}/auth/callback`, {
        method: 'POST',
        body: {
          code: query.code,
          state: query.state
        }
      }).then((data) => {
        // Save session
        this.store.login(data.session_id, data.expires_at)

        // Save user details
        this.store.setUser(data.user.username, data.user.id)
        this.store.setAvatar(data.user.avatar)

        // Redirect to dashboard
        this.$router.push('/dashboard')
      })
    }
  },
}
</script>
