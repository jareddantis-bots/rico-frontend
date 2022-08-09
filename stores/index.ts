import { defineStore } from 'pinia'

interface RicoState {
  username: string | null,
  avatar: string | null,
  sessionId: string | null,
  sessionExpiry: number | null,
}

export const useStore = defineStore('main', {
  state: (): RicoState => ({
    username: null,
    avatar: null,
    sessionId: null,
    sessionExpiry: null
  }),
  getters: {
    getUsername: (state) => state.username,
    getAvatar: (state) => state.avatar,
    isLoggedIn: (state) => state.sessionId !== null && state.sessionExpiry > Date.now()
  },
  actions: {
    login (sessionId, sessionExpiry) {
      this.sessionId = sessionId
      this.sessionExpiry = sessionExpiry
    }
  },
  persist: {
    paths: ['sessionId', 'sessionExpiry']
  }
})
