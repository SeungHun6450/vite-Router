<template>
  <h1>About</h1>
  <RouterLink to="/about/name">
    Name~
  </RouterLink>
  <RouterView />
  <!-- 1. mapStores 사용-->
  <div>{{ messageStore.message }}</div>
  <div>{{ messageStore.reversedMessage }}</div>
  <button @click="messageStore.reverseMessage">
    Reverse!!
  </button>
  <!-- 새로운 데이터로 할당해서 계산, vuex에서는 안되는 기능! 즉, 수정이 어디서든 가능하다(수정권한 따로 지정x) -->
  <button @click="messageStore.message = 'Hun?!#'">
    Hun!
  </button>

  <!-- 2. mapState, mapActions 사용-->
  <!-- <div>{{ message }}</div>
  <div>{{ reversedMessage }}</div>
  <button @click="reverseMessage">
    Reverse!!
  </button> -->
</template>

<script>
// import { mapState, mapActions } from 'pinia'
import { mapStores } from 'pinia'
import { useMessageStore } from '~/store/message'


export default {
  // 1. import { mapStores } from 'pinia' 사용 시
  computed: {
    ...mapStores([useMessageStore])
  },

  // 2. import { mapState, mapActions } from 'pinia' 사용 시
  // computed: {
  //   // vuex와 다르게 모듈 이름이 들어가는 곳에 모듈 자체를 넣는다
  //   ...mapState(useMessageStore, [
  //     'message',
  //     'reversedMessage'
  //   ])
  // },
  // methods: {
  //   ...mapActions(useMessageStore, [
  //     'reverseMessage'
  //   ])
  // }

  // RouterView
  // created() {
    // 페이지 정보를 가지고 있는 $route
    // console.log(this.$route)
  // }
}
</script>
