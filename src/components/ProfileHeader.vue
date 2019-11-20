<template>
  <header class="profileheader-component">
    <md-menu md-align-trigger md-direction="bottom-end" md-size="medium">
      <div class="profileheader-component__dropdown-button md-button"  md-menu-trigger>
        <user-avatar :name="mainNames" :picture="userInfo.picture" size="md-small" class="profileheader-component__avatar-icon" />
        <span class="profileheader-component__dropdown-button--text">{{ mainNames }}</span>
        <md-icon class="profileheader-component__dropdown-button--text">arrow_drop_down</md-icon>
      </div>
      <md-menu-content class="profileheader-component__dropdown-list">
        <md-menu-item class="profileheader-component__dropdown-item" @click="$router.push('/profile')">
          <md-icon class="profileheader-component__dropdown-item--icon">person</md-icon>
          <span class="md-list-item-text">Perfil</span>
        </md-menu-item>
        <md-divider/>
        <md-menu-item class="profileheader-component__dropdown-item" @click="this.$store.dispatch('logout');$router.push('/login')">
          <md-icon class="profileheader-component__dropdown-item--icon">directions_run</md-icon>
          <span class="md-list-item-text">Sair</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </header>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'ProfileHeader',
  components: { UserAvatar },
  computed: {
    userInfo () {
      return this.$store.getters.responsableData
    },
    mainNames () {
      let fullName = this.userInfo.name.split(' ')
      let mainNames = fullName[0] + ' ' + fullName[fullName.length - 1]
      return mainNames
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.profileheader-component {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 32px);
  height: 24px;
  margin: 30px 16px;
  &__dropdown-button {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-right: -4px !important;
    padding: 10px 0px 10px 8px;
    &--text {font-size: 1.2em; color: $--default-text !important;}
  }
  &__dropdown-item {
    &--icon {margin-right: 8px !important;}
  }
  &__dropdown-list {
    .md-menu-content-container {border-radius: $--border-radius !important;}
  }
}
</style>
