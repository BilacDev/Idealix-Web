<template>
  <div class="external-view">
    <div class="external-view__container-logo elevation">
      <h1 class="external-view__logo">iDealix</h1>
    </div>

    <main class="external-view__container-form">
      <transition name="fade">
        <router-view class="external-view__content"/>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'External',
  beforeMount () {
    if (this.$store.getters.isLoggedIn) this.$store.dispatch('logout')
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.external-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: $--background;

  .external-view__container-logo {
    width: 50%;
    height: 100%;
    background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);

    .external-view__logo {
      height: 24px;
      display: flex;
      align-items: center;
      margin: 30px 16px;
      color: $--white;
      font-weight: 400;
    }
  }

  .external-view__container-form {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .external-view__content {
      width: 400px;

      .external-view__title {
        margin-bottom: 40px
      }

      .external-view__submit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .md-button { margin: 0; }
      }

      .external-view__switch-link {
        display: block;
        text-align: center;
        margin-top: 40px;
      }
    }
  }
}
</style>
