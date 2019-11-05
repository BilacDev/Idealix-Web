<template>
  <div class="infocards-component">
    <div class="infocards-component__kid-info">
      <user-avatar :name="name" :picture="picture" size="md-large" />
    </div>
    <div class="infocards-component__history-graphs">

    </div>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'Dashboard',
  components: {
    UserAvatar
  },
  data: () => ({
    name: 'Joãozinho Silva',
    picture: 'https://placeimg.com/40/40/people/20'
  })
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.card {
  box-shadow: 0 0 20px 0 $--black;
}
.infocards-component {
  display: flex;
  &__kid-info {
    padding: 10px;
  }
}
</style>
