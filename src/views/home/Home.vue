<template>
  <div class="main-container">
    <SideMenu
      :childsList="childsList"
      class="elevation"
      @addChildDialogVisable="addChildDialogVisibel = true"
      @addPointDialogVisable="addPointDialogVisibel = true"
    />

    <main class="main-container__content">
      <ProfileHeader :responsableInfo="responsableInfo" />

      <transition name="fade">
        <router-view/>
      </transition>
    </main>

    <md-dialog
      :md-active.sync="addChildDialogVisibel"
      class="main-container__dialogs">
      <md-dialog-title>Adicionar uma criança</md-dialog-title>
      <form
        class="main-container__dialogs--form"
        novalidate
        @submit.prevent="validateUser">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="name">Nome</label>
          <md-input
            v-model="newChildForm.name"
            :disabled="isSending"
            id="name"
            name="name" />
        </md-field>
        <md-field>
          <md-icon>wc</md-icon>
          <label for="gender">Genero</label>
          <md-select
            v-model="newChildForm.gender"
            :disabled="isSending"
            id="gender"
            name="gender">
            <md-option value="m">É um Menino</md-option>
            <md-option value="f">É uma Menina</md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="gender">Data de nascimento</label>
          <md-input
            v-model="newChildForm.birthday"
            :disabled="isSending"
            id="birthday"
            name="birthday" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button
          :disabled="isSending"
          class="md-primary"
          @click="addChildDialogVisibel = false">
          Cancelar
        </md-button>
        <md-button
          :disabled="isSending"
          class="md-primary md-raised"
          @click="addPintDialogVisibel = false">
          Adicionar
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog
      :md-active.sync="addPointDialogVisibel"
      class="main-container__dialogs">
      <md-dialog-title>Adicionar um marco</md-dialog-title>
      <form
        class="main-container__dialogs--form"
        novalidate
        @submit.prevent="validateUser">
        <md-field>
          <md-icon>mood</md-icon>
          <label for="gender">Criança</label>
          <md-select
            :disabled="isSending"
            v-model="newPointForm.child"
            id="child"
            name="child">
            <md-option
              v-for="child in childsList"
              :key="child.id"
              :value="child.id">
              <span>
                <UserAvatar
                :name="child.name"
                :picture="child.picture"
                size="md-small" />
                {{ child.name }}
              </span>
            </md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-icon>360</md-icon>
          <label for="weight">Peso</label>
          <md-input
            v-model="newPointForm.weight"
            :disabled="isSending"
            id="weight"
            name="weight" />
          <span class="md-suffix">Kg</span>
        </md-field>
        <md-field>
          <md-icon>height</md-icon>
          <label for="height">Altura</label>
          <md-input
            v-model="newPointForm.height"
            :disabled="isSending"
            id="height"
            name="height" />
          <span class="md-suffix">m</span>
        </md-field>
        <md-field>
          <md-icon>today</md-icon>
          <label for="height">Data da medição</label>
          <md-input
            v-model="newPointForm.pointday"
            :disabled="isSending"
            id="madkday"
            name="madkday" />
        </md-field>
      </form>
      <md-dialog-actions>
        <md-button
          :disabled="isSending"
          class="md-primary"
          @click="addPointDialogVisibel = false">
          Cancelar
        </md-button>
        <md-button
          :disabled="isSending"
          class="md-primary md-raised"
          @click="addPointDialogVisibel = false">
          Adicionar
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
      <md-speed-dial-content>
        <md-button
          class="md-icon-button"
          @click="addChildDialogVisibel = true">
          <md-icon>face</md-icon>
          <md-tooltip md-direction="left">Adicionar Criança</md-tooltip>
        </md-button>
        <md-button
          class="md-icon-button"
          @click="addPointDialogVisibel = true">
          <md-icon>timeline</md-icon>
          <md-tooltip md-direction="left">Inserir Marco</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
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
    isSending: false,
    addChildDialogVisibel: false,
    addPointDialogVisibel: false,
    newChildForm: {},
    newPointForm: {}
  }),
  computed: {
    responsableInfo () {
      return this.$store.getters.responsableInfo
    },
    childsList () {
      return this.$store.getters.childsList
    }
  },
  beforeMount () {
    this.$store.dispatch('getChilds', this.responsableInfo.id)
      .then(() => {

      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {

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

  .main-container__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

.main-container__dialogs {
  border-radius: $--border-radius;
  width: 400px;
  padding: 8px;

  .md-dialog-title { padding: 24px 16px 16px; margin: 0; }
  .md-menu.md-select { margin-left: 12px !important; }
  .md-dialog-actions { padding: 16px; }
  &--form { padding: 0 16px }
}
</style>
