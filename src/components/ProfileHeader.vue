<template>
  <div class="profileheader-component">
    <user-avatar :name="name" :picture="picture" class="profileheader-component__avatar-icon" />
    <span class="profileheader-component__user-name">{{ name }}</span>
    <md-icon>arrow_drop_down</md-icon>
  </div>
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

.profileheader-component {
  // width: 100%;
  height:40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 16px;
  &__user-name, .md-icon {
    font-size: 1.4em;
  }
  .md-avatar {
    margin: 0;
    margin-right: 10px;
  }
}
</style>
