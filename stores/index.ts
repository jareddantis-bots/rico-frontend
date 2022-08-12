import { defineStore } from 'pinia'

interface RicoState {
  username: string | null,
  userId: number | null,
  avatar: string | null,
  sessionId: string | null,
  sessionExpiry: number | null,
}

export const useStore = defineStore('main', {
  state: (): RicoState => ({
    username: null,
    userId: null,
    avatar: null,
    sessionId: null,
    sessionExpiry: null
  }),
  getters: {
    getUsername: (state) => state.username,
    getAvatar: (state) => state.avatar,
    getCookie: (state) => `Bearer ${state.sessionId}`,
    isLoggedIn: (state) => state.sessionId !== null && state.sessionExpiry > Date.now()
  },
  actions: {
    login (sessionId, sessionExpiry) {
      this.sessionId = sessionId
      this.sessionExpiry = sessionExpiry
    },
    setUser (username, userId) {
      this.username = username
      this.userId = userId
    },
    setAvatar (avatar) {
      this.avatar = avatar
    }
  },
  persist: {
    paths: ['sessionId', 'sessionExpiry', 'username', 'userId', 'avatar']
  }
})
