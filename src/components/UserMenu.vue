<template>
  <div class="header-component">
    <h1>iDealix</h1>
    <div class="">
      <md-avatar class="md-avatar-icon md-primary">
        <!-- <img src="/assets/examples/avatar.png" alt="Avatar"> -->
        {{ name }}
      </md-avatar>
      <span>{{ fullName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
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
