<template>
  <div class="main-container">
    <side-menu
      @addKidDialogVisable="addKidDialogVisibel = true"
      @addPointDialogVisable="addPointDialogVisibel = true"
      :kidsList="kidsList"
    />
    <main>
      <profile-header />
      <transition name="fade">
        <router-view/>
      </transition>
    </main>

    <md-dialog :md-active.sync="addKidDialogVisibel" class="main-container__dialogs">
      <md-dialog-title>Adicionar uma criança</md-dialog-title>
      <form novalidate @submit.prevent="validateUser">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="name">Nome</label>
          <md-input name="name" id="name" v-model="newKidForm.name" :disabled="isSending" />
        </md-field>
        <md-field>
          <md-icon>wc</md-icon>
          <label for="gender">Genero</label>
          <md-select name="gender" id="gender" v-model="newKidForm.gender" :disabled="isSending">
            <md-option value="m">É um Menino</md-option>
            <md-option value="f">É uma Menina</md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="gender">Data de nascimento</label>
          <md-input name="birthday" id="birthday" v-model="newKidForm.birthday" :disabled="isSending" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addKidDialogVisibel = false">Cancelar</md-button>
        <md-button class="md-primary md-raised" @click="addPintDialogVisibel = false">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="addPointDialogVisibel" class="main-container__dialogs">
      <md-dialog-title>Adicionar um marco</md-dialog-title>
      <form novalidate @submit.prevent="validateUser">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="gender">Criança</label>
          <md-select name="kid" id="kid" v-model="newMarkForm.kid" :disabled="isSending">
            <md-option v-for="kid in kidsList" :key="kid.id" :value="kid.id">
              <user-avatar :name="kid.name" :picture="kid.picture" size="md-small" />
              {{ kid.name }}
            </md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>360</md-icon>
          <label for="weight">Peso</label>
          <md-input name="weight" id="weight" v-model="newMarkForm.weight" :disabled="isSending" />
          <span class="md-suffix">Kg</span>
        </md-field>
        <md-field>
          <md-icon>height</md-icon>
          <label for="height">Altura</label>
          <md-input name="height" id="height" v-model="newMarkForm.height" :disabled="isSending" />
          <span class="md-suffix">m</span>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="height">Data da medição</label>
          <md-input name="madkday" id="madkday" v-model="newMarkForm.madkday" :disabled="isSending" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addPointDialogVisibel = false">Cancelar</md-button>
        <md-button class="md-primary md-raised" @click="addPointDialogVisibel = false">Adicionar</md-button>
      </md-dialog-actions>
    </md-dialog>

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
  </div>
</template>

<script>
import SideMenu from '@/views/partials/SideMenu'
import UserAvatar from '@/components/UserAvatar'
import ProfileHeader from '@/components/ProfileHeader'

export default {
  name: 'Home',
  components: {
    ProfileHeader,
    UserAvatar,
    SideMenu
  },
  data: () => ({
    isSending: false,
    addKidDialogVisibel: false,
    addPointDialogVisibel: false,
    newKidForm: {},
    newMarkForm: {}
  }),
  computed: {
    kidsList () {
      return this.$store.state.kidsList
    }
  }
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
  &__dialogs {
    border-radius: $--border-radius;
    width: 400px;
    padding:8px;
    .md-dialog-title {
      padding: 24px 16px 16px;
      margin: 0;
    }
    .md-dialog-actions {
      padding: 16px 16px 24px;
      margin: 0;
    }
    .md-menu.md-select {
      margin-left: 12px !important;
    }
    form {
      padding: 0 16px
    }
  }
}
</style>
