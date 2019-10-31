<template>
  <div class="sidemenu-component">
    <h1>iDealix</h1>
    <md-list>
      <md-list-item @click="alert = !alert">
        <md-icon>face</md-icon>
        <span class="md-list-item-text">Adicionar Criança</span>
      </md-list-item>

      <md-list-item @click="alert = !alert">
        <md-icon>timeline</md-icon>
        <span class="md-list-item-text">Adicionar Marco</span>
      </md-list-item>

      <md-divider ></md-divider>
      <md-subheader>Criançada</md-subheader>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Abbey Christansen</span>

      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Alex Nelson</span>

      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/6" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Mary Johnson</span>

      </md-list-item>
    </md-list>

  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data: () => {
    alert: false
  }
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.sidemenu-component {
  width: 300px;
  height: 100vh;
  background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
  box-shadow: 0 0 20px 0 $--black;
  h1 {
    margin: 30px;
    color: $--white;
    font-weight: 400;
  }
  &__menu-option {

  }
}

.md-list {
  background-color: transparent !important;
}

</style>
