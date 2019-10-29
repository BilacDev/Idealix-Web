<template>
  <div class="sidemenu-component">
    <h1>iDealix</h1>

  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data: () => {

  }
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.sidemenu-component {
    width: 400px;
    height: 100vh;
    background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
    box-shadow: 0 0 20px 0 $--black;
    h1 {
      margin: 30px;
      color: white;
      font-weight: 400;
    }
  }
</style>
