<template>
  <div class="about">
    <user-menu />
    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
import UserMenu from '@/components/UserMenu'

export default {
  name: 'Dashboard',
  components: {
    UserMenu
  },
}
</script>

<style lang="scss">


</style>
