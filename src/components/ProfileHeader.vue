<template>
  <header class="profileheader-component">
    <md-menu md-align-trigger md-direction="bottom-end" md-size="medium">
      <div class="profileheader-component__dropdown-button md-button"  md-menu-trigger>
        <UserAvatar
          :name="mainNames"
          :picture="responsableInfo.picture"
          size="md-small"
          class="profileheader-component__avatar-icon" />
        <span class="profileheader-component__dropdown-button--text">{{ mainNames }}</span>
        <md-icon class="profileheader-component__dropdown-button--text">arrow_drop_down</md-icon>
      </div>

      <md-menu-content>
        <md-menu-item
          class="profileheader-component__dropdown-item"
          @click="$router.push('/login')">
          <md-icon class="profileheader-component__dropdown-item--icon">directions_run</md-icon>
          <span class="md-list-item-text">Sair</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </header>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    responsableInfo: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    mainNames () {
      const fullName = this.responsableInfo.name.split(' ')
      return `${fullName[0]} ${fullName[fullName.length - 1]}`
    }
  }
}
</script>

<style lang="scss">
.profileheader-component {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 24px;
  margin: 30px 20px;

  .profileheader-component__dropdown-button {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 10px 0px 10px 8px;
    &--text { font-size: 1.2em; }
  }
}

.profileheader-component__dropdown-item {
  &--icon { margin-right: 8px !important; }
}
</style>
