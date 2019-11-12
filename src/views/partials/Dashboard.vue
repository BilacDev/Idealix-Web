<template>
  <div class="dashboard-view">
    <div class="dashboard-view__top-cards">
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
    </div>
    <md-card class="dashboard-view__chart-card elevation">
      <history-chart :kid-history="history"></history-chart>
    </md-card>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import HistoryChart from '@/components/HistoryChart'

export default {
  name: 'Dashboard',
  components: {
    UserAvatar,
    HistoryChart
  },
  data: () => ({
    name: 'Joãozinho Silva',
    age: '06',
    gender: 'Menino',
    picture: 'https://placeimg.com/40/40/people/20',
    history: {
      labels: [this.getRandomInt(), this.getRandomInt()],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt()]
        },
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt()]
        }
      ]
    }
  }),
  methods: {
    getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
  }
}
</script>

<style lang="scss">
@import '../../styles/colors.scss';

.dashboard-view {
  padding: 0px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  &__top-cards {
    display: flex;
    margin-bottom: 16px;
  }
  &__details-card {
    flex: 1;
    background-color: $--white !important;
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
    align-items: stretch;
    align-self: stretch;
    display: flex;
    flex: 1;
    border-radius: $--border-radius;
  }
}
</style>
