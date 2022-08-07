<template>
  <div
    class="w-screen h-screen flex justify-center items-center dark:bg-slate-900"
  >
    <div class="bg-white w-72 p-8 rounded-lg text-center">
      <img
        src="/rico.png"
        alt="Rico"
        class="mx-auto w-16 h-16 mb-4 rounded-full"
      />
      <h1 class="text-2xl font-bold">Dashboard login</h1>
      <p class="mt-2 mb-8">Manage Rico for your server</p>
      <button
        class="text-center bg-purple-500 hover:bg-purple-400 active:bg-purple-600 rounded-md font-semibold text-white w-full p-4 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="isAuthenticated"
        @click="login"
      >
        Log in to Discord
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  beforeMount() {
    // Redirect to dashboard if already logged in
    if (this.isAuthenticated) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('discord')
    },
  },
}
</script>
