<template>
  <div class="dashboard-view">
    <side-menu />

    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button" @click="addKid = true">
          <md-icon>face</md-icon>
          <md-tooltip md-direction="left">Inserir Nova Criança</md-tooltip>
        </md-button>
        <md-button class="md-icon-button" @click="addPoint = true">
          <md-icon>timeline</md-icon>
          <md-tooltip md-direction="left">Adicionar Medição</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>

    <md-dialog :md-active.sync="addKid">
      <md-dialog-title>Adicionar uma Criança</md-dialog-title>

      <form novalidate @submit.prevent="validateUser">
        <md-field>
          <label for="first-name">Nome</label>
          <md-input name="name" id="name" autocomplete="name" v-model="form.name" :disabled="sending" />
        </md-field>
        <md-field>
          <label for="gender">Genego</label>
          <md-input type="text" name="gender" id="gender" autocomplete="email" v-model="form.gender" :disabled="sending" />
        </md-field>
        <md-field>
          <label for="date">Data nascimento</label>
          <md-input type="date" name="date" id="date" v-model="form.date" :disabled="sending" />
        </md-field>
      </form>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Cancelar</md-button>
        <md-button class="md-primary" @click="showDialog = false">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="addPoint">
      <md-dialog-title>Adicionar uma medição</md-dialog-title>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Cancelar</md-button>
        <md-button class="md-primary" @click="showDialog = false">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>


  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Dashboard',
  components: { SideMenu },
  data: () => ({
    addPoint: false,
    addKid: false,
    form: {
      name,

    }
  })
}
</script>

<style lang="scss">
.dashboard-view {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
