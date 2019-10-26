<template>
  <div>
    <md-avatar class="md-avatar-icon md-primary">
      <!-- <img src="/assets/examples/avatar.png" alt="Avatar"> -->
      {{ name }}
    </md-avatar>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  data: () => ({
    name: 'GR'
  })
}
</script>

<style lang="scss">

</style>
