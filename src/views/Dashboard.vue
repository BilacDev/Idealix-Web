<template>
  <div class="dashboard-view">
    <side-menu />

    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>face</md-icon>
          <md-tooltip md-direction="left">Inserir Nova Criança</md-tooltip>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>timeline</md-icon>
          <md-tooltip md-direction="left">Adicionar Medição</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Dashboard',
  components: { SideMenu },
}
</script>

<style lang="scss">
.dashboard-view {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
