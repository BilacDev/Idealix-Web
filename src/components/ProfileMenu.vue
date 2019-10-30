<template>
  <div class="header-component">

    <md-menu md-direction="top-start">
      <md-button md-menu-trigger>
        <md-avatar class="md-avatar-icon">
          <!-- <img src="/assets/examples/avatar.png" alt="Avatar"> -->
          {{ name }}
        </md-avatar>
        <span>{{ fullName }}</span>
      </md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data: () => ({
    name: 'GR',
    fullName: 'Guilherme Rios'
  })
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.header-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  h1 {
    margin: 0;
    font-weight: 400;
  }
}
</style>
