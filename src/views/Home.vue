<template>
  <div class="main-container">
    <side-menu
      @addKidDialogVisable="addKidDialogVisibel = true"
      @addPointDialogVisable="addPointDialogVisibel = true"
    />

    <main>
      <profile-header />
      <transition name="fade">
        <router-view/>
      </transition>
    </main>


    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button" @click="addKidDialogVisibel = true">
          <md-icon>face</md-icon>
          <md-tooltip md-direction="left">Adicionar Criança</md-tooltip>
        </md-button>
        <md-button class="md-icon-button" @click="addPointDialogVisibel = true">
          <md-icon>timeline</md-icon>
          <md-tooltip md-direction="left">Inserir Marco</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>


    <md-dialog :md-active.sync="addKidDialogVisibel">
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
          <label for="gender">Data de Nascimento</label>
          <md-datepicker name="date" id="date" v-model="form.date" :disabled="sending" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addKidDialogVisibel = false">Cancelar</md-button>
        <md-button class="md-primary" @click="addPintDialogVisibel = false">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="addPointDialogVisibel">
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
import ProfileHeader from '@/components/ProfileHeader'

export default {
  name: 'Home',
  components: {
    ProfileHeader,
    SideMenu
  },
  data: () => ({
    addKidDialogVisibel: false,
    addPointDialogVisibel: false,
    form: {}
  })
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.main-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: $--background;
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
