<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import { useStore } from '@/stores'

export default {
  name: 'DashboardPage',
  middleware: ['auth'],
  setup() {
    const store = useStore()
    const config = useRuntimeConfig()
    return { store, config }
  },
  mounted() {
    // Get user details
    $fetch('/api/me')
        .then((data) => {
          // Save to state
          this.store.setUser(data.me.username, data.me.id)
          this.store.setAvatar(data.me.avatar)
        })
        .catch((error) => {
          console.error(error);
          this.$router.push('/login')
        })
  }
}
</script>
