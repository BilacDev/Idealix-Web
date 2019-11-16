<template>
  <div class="external-view">
    <div class="external-view__logo elevation">
      <h1>iDealix</h1>
    </div>
    <main class="external-view__container">
      <transition name="fade">
        <router-view class="external-view__content"/>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'External'
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.external-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  &__logo {
    width: 50%;
    height: 100%;
    background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
    h1 {
      height: 24px;
      display: flex;
      align-items: center;
      margin: 30px 16px;
      color: $--white;
      font-weight: 400;
    }
  }
  &__container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {margin-bottom: 40px;}
  }
  &__content {
    width: 400px;
  }
}
</style>
