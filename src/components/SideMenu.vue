<template>
  <div class="sidemenu-component elevation">
    <h1 class="sidemenu-component__title">iDealix</h1>
    <md-list class="sidemenu-component__menu-items">
      <md-subheader>Opções</md-subheader>
      <md-list-item @click="$emit('open-add-child-dialog')">
        <md-icon>face</md-icon>
        <span class="md-list-item-text">Adicionar Criança</span>
      </md-list-item>
      <md-list-item @click="$emit('open-add-point-dialog')">
        <md-icon>timeline</md-icon>
        <span class="md-list-item-text">Inserir Marco</span>
      </md-list-item>
      <md-subheader>Crianças</md-subheader>
      <md-list-item
        v-for="child in childsList"
        :key="child.id"
        :to="`/dashboard/${child.id}`">
        <UserAvatar :name="child.name" />
        <span class="md-list-item-text">{{ child.name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    childsList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.sidemenu-component {
  width: 300px;
  background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);

  .sidemenu-component__title {
    height: 24px;
    display: flex;
    align-items: center;
    margin: 30px 16px;
    font-weight: 400;
    color: $--white;
  }

  .sidemenu-component__menu-items {
    overflow: auto;
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    background-color: transparent !important;

    .md-list {
      &-item-content * {color: $--white !important;}
      &-item-text {display: block; text-overflow: ellipsis; text-transform: capitalize;}
    }

    .md-subheader {color: $--white; opacity: 0.5;}
    &::-webkit-scrollbar {width: 8px; background: transparent;}
    &::-webkit-scrollbar-thumb {border-radius: 4px; background-color: #FAFAFA20;}
  }
}
</style>
