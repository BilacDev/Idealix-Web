<template>
  <div class="dashboard-view">
    <md-card class="dashboard-view__details-card">
      <user-avatar :name="name" :picture="picture" size="md-large" />
      <div class="dashboard-view__details-content">
        <span>{{ name }}</span>
        <span>{{ age }} Anos</span>
      </div>
    </md-card>
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
    age: '06',
    picture: 'https://placeimg.com/40/40/people/20'
  })
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.card {
  // box-shadow: 0 0 20px 0 $--black;
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
}
.dashboard-view {
  padding: 20px;
  display: flex;
  &__details-card {
    display: flex;
    padding: 16px;
  }
  &__details-content {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.6em;
    }
  }
}
</style>
