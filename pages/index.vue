<template>
  <div
    class="w-screen h-screen md:flex md:justify-center md:items-center dark:bg-slate-900 dark:text-white"
  >
    <div class="w-full md:max-w-lg p-8 md:p-0">
      <div class="flex justify-between mb-3">
        <h1 class="text-4xl font-bold">Rico</h1>
        <img
          class="h-9 w-9 rounded-full align-middle"
          src="/rico.png"
          alt="Rico"
        />
      </div>
      <p class="text-lg">
        A Discord bot that helps you keep conversations flowing.
      </p>
      <p class="text-lg my-2">
        Add Spotify tracks, website links, and arbitrary text to your friends'
        corkboards, and keep threads unarchived for longer.
      </p>
      <div
        class="mt-8 grid grid-rows-3 md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4"
      >
        <button
          class="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 rounded-md font-semibold text-white p-4"
        >
          Invite to server
        </button>
        <button
          class="bg-sky-500 hover:bg-sky-400 active:bg-sky-600 rounded-md font-semibold text-white p-4"
        >
          Documentation
        </button>
        <nuxt-link
          class="text-center bg-purple-500 hover:bg-purple-400 active:bg-purple-600 rounded-md font-semibold text-white md:col-span-2 p-4"
          :to="isAuthenticated ? '/dashboard' : '/login'"
        >
          Open dashboard
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>
