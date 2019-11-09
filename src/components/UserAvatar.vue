<template>
  <md-avatar class="useravatar-component" :class="size">
    <img v-if="picture" :src="picture" alt="People">
    <md-icon v-else-if="icon">{{ icon }}</md-icon>
    <span v-else>{{ nameInitials }}</span>
  </md-avatar>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    picture: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    nameInitials () {
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
  margin-right: 8px
}
</style>
