<template>
  <div>
    <h1
        class="font-bold text-3xl mb-12"
    >
      {{ loading ? 'Loading your notes...' : 'Your notes' }}
    </h1>
    <div
        v-show="!loading"
        class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Note card -->
      <div
        v-for="note in notes"
        :key="note.id"
        class="h-fit rounded-lg text-slate-900 group"
        :class="getBackground(note.type)"
      >
        <div class="p-4">
          <!-- Note type and controls -->
          <div class="flex justify-between items-center">
            <div
                class="rounded-md px-2 py-0.5 bg-black text-slate-200"
            >
              <img
                  v-if="note.type.startsWith('spotify:')"
                  src="/Spotify_Logo_RGB_White.png"
                  class="h-6 py-1"
              >
              <span
                  v-else
                  class="uppercase font-bold font-mono"
              >{{ resolveTrackType(note.type) }}
              </span>
            </div>
            <div
                @click="note.checked = !note.checked"
                class="cursor-pointer box-content select-none"
            >
              <span
                  class="material-symbols-outlined box-content rounded-md p-0.5 hover:bg-black/10 active:bg-black/30"
              >
                {{ note.checked ? 'check_box' : 'check_box_outline_blank' }}
              </span>
            </div>
          </div>
          <div class="mt-4">
            <h1 class="text-2xl font-bold mb-2">{{ note.title }}</h1>
            <p
                v-show="note.url !== ''"
            >
              <a
                  :href="note.url"
                  rel="noopener"
                  target="_blank"
                  class="border-b border-black/60 hover:border-b-2"
              >
                {{ extractUrlHost(note.url) }}
              </a>
              <span
                  class="material-symbols-outlined text-sm align-baseline ml-1"
              >
                open_in_new
              </span>
            </p>
          </div>
          <div class="mt-4 text-black/60 font-mono text-sm">
            <p>from <strong>{{ note.sender.username }}#{{ note.sender.discriminator }}</strong></p>
            <p>sent {{ note.timestamp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotesPage',
  data() {
    return {
      loading: true,
      notes: []
    }
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.loading = true
      $fetch('/api/notes')
          .then((data) => {
            // Turn timestamps into strings
            this.notes = data.map((note) => {
              const newNote = {
                ...note,
                checked: false
              }
              newNote.timestamp = this.createTimestampString(note.timestamp)
              return newNote
            })
            this.loading = false
          })
    },
    resolveTrackType(type) {
      const split = type.split(':')
      return split[split.length - 1]
    },
    extractUrlHost(url) {
      if (url === '') { return '' }
      const urlObj = new URL(url)
      return urlObj.host
    },
    createTimestampString(timestamp) {
      const dateObj = new Date(timestamp * 1000)
      const dateStr = dateObj.toLocaleDateString('en-US')
      const timeStr = dateObj.toLocaleTimeString('en-US')
      return `${dateStr} ${timeStr}`
    },
    getBackground(type) {
      if (type.startsWith('spotify:')) { return 'bg-green-200' }
      return 'bg-slate-200'
    }
  }
}
</script>
