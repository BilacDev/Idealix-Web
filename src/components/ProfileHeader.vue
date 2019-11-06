<template>
  <header class="profileheader-component">
    <md-menu md-align-trigger md-direction="bottom-end" md-size="medium">
      <div class="profileheader-component__menu-button md-button"  md-menu-trigger>
        <user-avatar :name="name" :picture="picture" class="profileheader-component__avatar-icon" />
        <span class="profileheader-component__user-name">{{ name }}</span>
        <md-icon>arrow_drop_down</md-icon>
      </div>
      <md-menu-content>
        <md-menu-item class="profileheader-component__action-icon" @click="">
          <md-icon>person</md-icon>
          Perfil
        </md-menu-item>
        <md-divider/>
        <md-menu-item class="profileheader-component__action-icon" @click="">
          <md-icon>directions_run</md-icon>
          Sair
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </header>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'ProfileHeader',
  components: {
    UserAvatar
  },
  data: () => ({
    tmpname: 'Guilherme Rios da Cunha',
    picture: 'https://placeimg.com/40/40/people/10'
  }),
  computed: {
    name () {
      let names = this.tmpname.split(' ')
      let name = names[0] + ' ' + names[names.length - 1]
      return name
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
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -8px !important;
    padding: 8px;
    text-transform: capitalize;
    cursor: pointer;
  }
  &__user-name, .md-icon {
    font-size: 1.4em;
    color: $--text-default !important;
  }
  &__action-icon {
    text-align: left;
    .md-list-item-content {
      justify-content: flex-start;
    }
    .md-icon {
      margin: 0px 10px 0px 0px !important;
      color: $--text-default !important;
    }
  }
}
</style>
