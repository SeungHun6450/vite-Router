<template>
  <RouterView name="TheHeader" />
  <RouterView />
  <APITest />
</template>

<script>
import APITest from '~/routes/APITest.vue'

export default {
  components: {
    APITest
  }
}
</script>

<style lang="scss">
#app {
  height: 3000px;
}
</style>
