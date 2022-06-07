import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 'Hello world!'
  }),
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('')
    }
  },
  actions: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
