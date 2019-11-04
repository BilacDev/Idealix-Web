<template>
  <div class="sidemenu-component">
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
      <md-list-item v-for="kid in kids" v-key="kid.id" @click="">
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
  data: () => ({
    kids: [
      {
        id: 1,
        name: 'Abbey Christansen',
        picture: 'https://placeimg.com/40/40/people/1'
      },
      {
        id: 2,
        name: 'Alex Nelson',
        // picture: 'https://placeimg.com/40/40/people/2'
      },
      {
        id: 3,
        name: 'Mary Johnson',
        picture: 'https://placeimg.com/40/40/people/3'
      },
      {
        id: 3,
        name: 'Angela Saemi',
        // picture: 'https://placeimg.com/40/40/people/4'
      },
      {
        id: 3,
        name: 'Guilherme Rios',
        picture: 'https://placeimg.com/40/40/people/5'
      },
      {
        id: 3,
        name: 'Francisco Hugo',
        picture: 'https://placeimg.com/40/40/people/6'
      },
      {
        id: 3,
        name: 'Aline Capelli',
        picture: 'https://placeimg.com/40/40/people/7'
      }
    ]
  }),
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.sidemenu-component {
  width: 300px;
  height: 100%;
  max-height: 100%;
  background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
  box-shadow: 0 0 20px 0 $--black;
  h1 {
    margin: 30px 16px;
    color: $--white;
    font-weight: 400;
  }
  &__menu-items {
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    overflow: auto;
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

.md-subheader {
  color: $--background-opacity !important;
}
.md-list {
  background-color: transparent !important;
  &-item-content * {
    color: $--white !important;
  }

}

</style>
