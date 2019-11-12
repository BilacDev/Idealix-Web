<template>
  <div class="sidemenu-component elevation">
    <h1>iDealix</h1>
    <md-list class="sidemenu-component__menu-items">
      <md-subheader>Opções</md-subheader>
      <md-list-item @click="$emit('addKidDialogVisable')">
        <md-icon>face</md-icon>
        <span class="md-list-item-text">Adicionar Criança</span>
      </md-list-item>
      <md-list-item @click="$emit('addPointDialogVisable')">
        <md-icon>timeline</md-icon>
        <span class="md-list-item-text">Inserir Marco</span>
      </md-list-item>
      <md-subheader>Crianças</md-subheader>
      <md-list-item v-for="kid in kidsList" :key="kid.id" @click="goToKid(kid.id)">
        <user-avatar :name="kid.name" :picture="kid.picture" />
        <span class="md-list-item-text">{{ kid.name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'SideMenu',
  components: {
    UserAvatar
  },
  props: {
    kidsList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    goToKid (kidId) {
      this.$router.push({ path: `/dashboard/${kidId}` })
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/colors.scss';

.sidemenu-component {
  width: 300px;
  height: 100%;
  max-height: 100%;
  background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
  h1 {
    margin: 30px 16px;
    color: $--white;
    font-weight: 400;
  }
  &__menu-items {
    overflow: auto;
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    background-color: transparent !important;
    .md-list {
      &-item-content * {
        color: $--white !important;
      }
      &-item-text {
        display: block;
        text-overflow: ellipsis;
      }
    }
    .md-subheader {
      color: $--white;
      opacity: 0.5
    }
    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
      transition: all .4s;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #FAFAFA20;
    }
  }
}

</style>
