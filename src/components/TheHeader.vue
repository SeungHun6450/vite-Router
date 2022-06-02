<template>
  <header>
    <RouterLink
      v-for="nav in navigations"
      :key="nav.path"
      :to="nav.path">
      {{ nav.name }}
    </RouterLink>
  </header>
</template>


<script>
export default {
  data() {
    return {
      navigations: [
        { path: '/', name: 'Home~'},
        { path: '/movies/:movieID', name: 'Movie~'},
        { path: '/about', name: 'About~'},
        { path: '/abc', name: 'ABC~'},
      ]
    }
  }
}
</script>
