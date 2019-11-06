<template>
  <md-avatar class="useravatar-component" :class="size">
    <img v-if="picture" :src="picture" alt="People">
    <span v-else>{{ initials }}</span>
  </md-avatar>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    name: String,
    picture: String,
    size: String
  },
  computed: {
    initials () {
      if (this.name && this.name.trim()) {
        let split = this.name.split(' ').filter(Boolean)
        if (split.length > 1) {
          return split[0].substring(0, 1) + split[split.length - 1].substring(0, 1)
        } else if (split.length === 1) {
          return split[0].substring(0, 2)
        }
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.useravatar-component {
  margin-right: 10px
}
</style>
