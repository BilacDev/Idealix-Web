<template>
  <div class="dashboard-view">
    <side-menu />

    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>Add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>Kid</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>His</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Dashboard',
  components: { SideMenu }
}
</script>

<style lang="scss">
.dashboard-view {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
