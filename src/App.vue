<template>
  <v-app id="App">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  text-decoration: none;
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  overflow: hidden;
  box-shadow: none;
  box-sizing: border-box;
}
#App {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #ad7791, #87a4ad);
}
</style>
