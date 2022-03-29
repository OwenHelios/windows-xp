import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'menus',
  state() {
    return {
      contextMenuOpen: false,
    }
  },
})
