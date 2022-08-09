<template>
  <p>dashboard</p>
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
    const { data } = $fetch(this.config.public.apiBase + '/discord/me')
    console.log(data)
  }
}
</script>
