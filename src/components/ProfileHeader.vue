<template>
  <header class="profileheader-component">
    <md-menu md-align-trigger md-direction="bottom-end" md-size="medium">
      <div class="profileheader-component__menu-button md-button"  md-menu-trigger>
        <user-avatar :name="mainNames" :picture="userInfo.picture" class="profileheader-component__avatar-icon" />
        <span class="profileheader-component__user-name">{{ mainNames }}</span>
        <md-icon>arrow_drop_down</md-icon>
      </div>
      <md-menu-content>
        <md-menu-item class="profileheader-component__action-icon" @click="$router.push('/profile')">
          <md-icon>person</md-icon>
          <span>Perfil</span>
        </md-menu-item>
        <md-divider/>
        <md-menu-item class="profileheader-component__action-icon" @click="$router.push('/login')">
          <md-icon>directions_run</md-icon>
          <span>
            Sair
          </span>
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
  data: () => ({
    userInfo: {
      id: 1,
      name: 'Guilherme Rios da Cunha',
      picture: 'https://placeimg.com/40/40/people/10'
    }
  }),
  computed: {
    mainNames () {
      let fullName = this.userInfo.name.split(' ')
      let mainNames = fullName[0] + ' ' + fullName[fullName.length - 1]
      return mainNames
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.profileheader-component {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 32px);
  height:40px;
  margin: 20px 16px;
  &__menu-button {
    cursor: pointer;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    margin-right: -8px !important;
    padding: 8px;
  }
  &__user-name, .md-icon {
    font-size: 1.4em;
    color: $--default-text !important;
  }
  &__action-icon {
    .md-list-item-content {
      justify-content: flex-start;
      font-family: 'Montserrat', sans-serif;
    }
    .md-icon {
      margin-right: 8px !important;
      color: $--accent-text !important;
    }
  }
}
</style>
