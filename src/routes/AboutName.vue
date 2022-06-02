<template>
  <h1>About/Name</h1>
  <button @click="moveToMain">
    main
  </button>
</template>

<script>
export default {
  methods: {
    moveToMain() {
      this.$router.push('/?s=frozen&page=1')
      // this.$router.push('/')
      this.$router.push({
        name: 'mainpage',
        params: {
          username: 'Hun'
        },
        // query: {
        //   s: 'frozen',
        //   page: '1'
        // }
      })
    }
  }
}
</script>
