<template>
  <div id="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  // text-decoration: none;
  // margin: 0;
  // border: 0;
  // padding: 0;
  // outline: 0;
  // overflow: hidden;
  // box-shadow: none;
  // box-sizing: border-box;
}
#App {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right bottom, #78475f, #4e7495);
  // background-image: url('https://www.hellomoto.com.br/wp-content/uploads/2019/07/MOTOROLA_HEADER_HELLOMOTO_PLB_FERIAS_CRIANCAS_1920x927px.jpg');
  // background-position: center;
  // background-size: cover;
}
</style>
