<template>
  <div
      class="flex flex-col items-center"
  >
    <h1
        class="font-bold text-3xl mb-12 text-center"
    >
      What would you like to do today?
    </h1>

    <!-- Actions -->
    <nuxt-link
        v-for="action in actions"
        :to="action.link"
        class="group max-w-xl w-full"
    >
      <div
          class="border-2 border-slate-400 rounded-lg group-hover:border-slate-100 group-hover:bg-slate-100
                group-focus:border-slate-400 group-focus:bg-slate-400 overflow-hidden
                mb-8 grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr] gap-4 md:gap-6"
      >
        <!-- Icon -->
        <div
            class="bg-slate-400 group-hover:bg-slate-100 group-focus:bg-slate-400
                  flex justify-center items-center w-12 md:w-24 h-full"
        >
          <span
              class="material-symbols-outlined text-slate-900 md:text-4xl"
          >
            {{ action.icon }}
          </span>
        </div>

        <!-- Description -->
        <div
            class="text-slate-200 group-hover:text-slate-900 flex flex-col justify-center mr-2 my-4"
        >
          <h3 class="font-bold md:text-xl text-base mb-2">{{ action.title }}</h3>
          <p class="text-sm md:text-base">{{ action.desc }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  middleware: ['auth'],
  data() {
    return {
      actions: [
        {
          title: 'Manage your notes',
          desc: 'View, delete, and export compatible notes to Spotify',
          icon: 'manage_search',
          link: '/dashboard/notes'
        },
        {
          title: 'Manage your guilds',
          desc: 'Control thread management in guilds where you\'re an admin',
          icon: 'inbox_customize',
          link: '/dashboard/guilds'
        }
      ]
    }
  }
}
</script>
