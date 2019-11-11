<template>
  <div class="dashboard-view">
    <md-card class="dashboard-view__details-card elevation">
      <user-avatar :name="name" :picture="picture" size="md-large" />
      <div class="dashboard-view__details-content">
        <span>{{ name }}</span>
        <span>{{ age }} Anos - {{ gender }}</span>
      </div>
    </md-card>
    <md-card class="dashboard-view__details-card elevation">
      <user-avatar icon="favorite" size="md-large" />
      <div class="dashboard-view__details-content">
        <span>Status Atual</span>
        <span>Saldavel</span>
      </div>
    </md-card>
    <md-card class="dashboard-view__details-card elevation">
      <user-avatar icon="favorite" size="md-large" />
      <div class="dashboard-view__details-content">
        <span>Ultimo marco</span>
        <span>Peso: 22,16Kg - Altura: 1,25m</span>
      </div>
    </md-card>
    <md-card class="dashboard-view__chart-card elevation">

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
    gender: 'Menino',
    picture: 'https://placeimg.com/40/40/people/20'
  })
}
</script>

<style lang="scss">
@import '../../styles/colors.scss';

.card {
  // box-shadow: 0 0 15px 0 $--black;
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
}
.dashboard-view {
  padding: 0px 16px 16px 16px;
  display: flex;
  &__details-card {
    // width: 33.3%;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 16px;
    margin-right: 20px;
    border-radius: $--border-radius;
    &:last-child {
      margin-right: 0px;
    }
  }
  &__details-content {
    display: flex;
    flex-direction: column;
    margin: 5px;
    span {
      font-size: 1.2em;
      &:first-of-type {
        font-size: 1.6em;
      }
    }
  }
  &__chart-card {
    display: flex;
    flex: 1;
    width: 100%
  }
}
</style>
