import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 'Hello world!'
  }),
  getters: {
    reversedMessage(state) {
      // this로 state접근이 되지 않는다~
      return state.message.split('').reverse().join('')
    }
  },
  actions: {
    reverseMessage() {
      // actions안에서는 this를 통해 state, getters, actions에 접근할 수 있다.
      this.message = this.message.split('').reverse().join('')
    }
  }
})
