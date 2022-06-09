<template>
  <h1>About</h1>
  <RouterLink to="/about/name">
    Name~
  </RouterLink>
  <RouterView />

  <input
    type="file" 
    @change="selectFile" />
</template>

<script>
export default {
  methods: {
    selectFile(event) {
      console.log(event)
      const reader = new FileReader()
      for (const file of event.target.files) {
        console.log(file)
        reader.readAsDataURL(file)
        reader.addEventListener('load', e => {
          console.log(e.target.result)  // base64의 값이 들어있다!
        })
      }
    }
  }
}
</script>
