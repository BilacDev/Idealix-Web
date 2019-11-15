<template>
  <div class="dashboard-view">
    <div class="dashboard-view__triple">
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar :name="name" :picture="picture" size="md-large" />
        <div class="dashboard-view__card-text">
          <span>{{ name }}</span>
          <span>{{ age }} Anos - {{ gender }}</span>
        </div>
      </md-card>
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar icon="favorite" size="md-large" />
        <div class="dashboard-view__card-text">
          <span>Status Atual</span>
          <span>Saldavel</span>
        </div>
      </md-card>
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar icon="favorite" size="md-large" />
        <div class="dashboard-view__card-text">
          <span>Ultimo marco</span>
          <span>22,16Kg - 1,25m</span>
        </div>
      </md-card>
    </div>
    <md-card class="dashboard-view__chart elevation">
      <history-chart class="dashboard-view__history-chart" :kid-history="history" :styles="chartStyles"></history-chart>
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
    history: {}
  }),
  computed: {
    chartStyles () {
      const styles = {
        flex: 1,
        display: 'flex',
        position: 'relative',
        height: '100%',
        width: '100%',
        maxHeight: '100%',
        maxWidth: '100%'
      }
      return styles
    }
  },
  created () {
    this.history = {
      labels: ['1', '2'],
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
  },
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.dashboard-view {
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  &__triple {
    display: flex;
  }
  &__details-card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    margin-right: 20px;
    border-radius: $--border-radius;
    &:last-child {margin-right: 0px;}
  }
  &__card-text {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    span {
      font-size: 1.12em;
      &:first-of-type {
        font-size: 1.4em;
      }
    }
  }
  &__chart {
    flex: 1;
    display: flex;
    padding: 16px;
    margin-top: 20px;
    border-radius: $--border-radius;
  }
}
</style>
