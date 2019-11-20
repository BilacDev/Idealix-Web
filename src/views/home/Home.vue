<template>
  <div class="main-container">
    <side-menu
      @addChildDialogVisable="addChildDialogVisibel = true"
      @addPointDialogVisable="addPointDialogVisibel = true"
      :childsList="childsList"
    />
    <main class="main-container__content">
      <profile-header />
      <transition name="fade">
        <router-view/>
      </transition>
    </main>

    <md-dialog :md-active.sync="addChildDialogVisibel" class="main-container__dialogs">
      <md-dialog-title>Adicionar uma criança</md-dialog-title>
      <form novalidate @submit.prevent="validateUser" class="main-container__dialogs--form">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="name">Nome</label>
          <md-input name="name" id="name" v-model="newChildForm.name" :disabled="isSending" />
        </md-field>
        <md-field>
          <md-icon>wc</md-icon>
          <label for="gender">Genero</label>
          <md-select name="gender" id="gender" v-model="newChildForm.gender" :disabled="isSending">
            <md-option value="m">É um Menino</md-option>
            <md-option value="f">É uma Menina</md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="gender">Data de nascimento</label>
          <md-input name="birthday" id="birthday" v-model="newChildForm.birthday" :disabled="isSending" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addChildDialogVisibel = false" :disabled="isSending">Cancelar</md-button>
        <md-button class="md-primary md-raised" @click="addPintDialogVisibel = false" :disabled="isSending">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="addPointDialogVisibel" class="main-container__dialogs">
      <md-dialog-title>Adicionar um marco</md-dialog-title>
      <form novalidate @submit.prevent="validateUser" class="main-container__dialogs--form">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="gender">Criança</label>
          <md-select name="child" id="child" v-model="newPointForm.child" :disabled="isSending">
            <md-option v-for="child in childsList" :key="child.id" :value="child.id">
              <span>
                <user-avatar :name="child.name" :picture="child.picture" size="md-small" />
                {{ child.name }}
              </span>
            </md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>360</md-icon>
          <label for="weight">Peso</label>
          <md-input name="weight" id="weight" v-model="newPointForm.weight" :disabled="isSending" />
          <span class="md-suffix">Kg</span>
        </md-field>
        <md-field>
          <md-icon>height</md-icon>
          <label for="height">Altura</label>
          <md-input name="height" id="height" v-model="newPointForm.height" :disabled="isSending" />
          <span class="md-suffix">m</span>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="height">Data da medição</label>
          <md-input name="madkday" id="madkday" v-model="newPointForm.madkday" :disabled="isSending" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addPointDialogVisibel = false" :disabled="isSending">Cancelar</md-button>
        <md-button class="md-primary md-raised" @click="addPointDialogVisibel = false" :disabled="isSending">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button class="md-icon-button" @click="addChildDialogVisibel = true">
          <md-icon>face</md-icon>
          <md-tooltip md-direction="left">Adicionar Criança</md-tooltip>
        </md-button>
        <md-button class="md-icon-button" @click="addPointDialogVisibel = true">
          <md-icon>timeline</md-icon>
          <md-tooltip md-direction="left">Inserir Marco</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import UserAvatar from '@/components/UserAvatar'
import ProfileHeader from '@/components/ProfileHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProfileHeader,
    UserAvatar,
    SideMenu
  },
  data: () => ({
    isSending: false,
    addChildDialogVisibel: false,
    addPointDialogVisibel: false,
    newChildForm: {},
    newPointForm: {}
  }),
  computed: {
    ...mapGetters({
      childsList: 'childsList',
      responsableData: 'responsableData'
    })
    // responsableId () {
    //   return this.$store.getters.responsableData.id
    // },
    // childsList () {
    //   return this.$store.getters.childsList
    // }
  },
  beforeMount () {
    this.$store.dispatch('getChilds', this.responsableId)
      .then(() => {

      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.main-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: $--background;
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &__dialogs {
    border-radius: $--border-radius;
    width: 400px;
    padding: 8px;
    .md-dialog-title {padding: 24px 16px 16px; margin: 0;}
    .md-menu.md-select {margin-left: 12px !important;}
    .md-dialog-actions {padding: 16px;}
    &--form {padding: 0 16px}
  }
}
</style>
