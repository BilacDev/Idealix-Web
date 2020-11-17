<template>
  <div class="dashboard-view">
    <div class="dashboard-view__main-cards">
      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          :name="childInfo.name"
          :picture="childInfo.picture"
          size="md-large"
          class="dashboard-view__details-icon" />
        <div class="dashboard-view__details-text">
          <h2>{{ childInfo.name }}</h2>
          <div>{{ childInfo.age }} Anos - {{ childInfo.gender }}</div>
        </div>
      </md-card>

      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          icon="favorite"
          size="md-large"
          class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Status Atual</h2>
          <div>{{ childInfo.status }}</div>
        </div>
      </md-card>

      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          icon="bubble_chart"
          size="md-large"
          class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Último marco</h2>
          <div>{{ childInfo.height }} - {{ childInfo.weight }}</div>
        </div>
      </md-card>
    </div>

    <md-card class="dashboard-view__chart elevation">
      <HistoryChart
        class="dashboard-view__history-chart"
        :kid-history="history"
        :styles="chartStyles" />
    </md-card>
  </div>
</template>

<script>
import HistoryChart from '@/components/HistoryChart'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    HistoryChart
  },
  computed: {
    ...mapGetters({ currentChild: 'getCurrentChild' }),
    chartStyles () {
      return {
        flex: 1,
        display: 'flex',
        position: 'relative',
        height: '100%',
        width: '100%',
        maxHeight: '100%',
        maxWidth: '100%'
      }
    }
  },
  beforeMount () {
    const childId = this.$route.params.id
    this.getCurrentChild(childId)
  },
  created () {
    this.history = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Ideal',
          // backgroundColor: '#f87979c6',
          backgroundColor: '#9f64eac6',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        },
        {
          label: 'Atual',
          // backgroundColor: '#487fe2c6',
          backgroundColor: '#d44eb7c6',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }
      ]
    }
  },
  methods: {
    ...mapActions([ 'getCurrentChild' ]),

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.dashboard-view {
  padding: 0px 20px 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .dashboard-view__main-cards {
    display: flex;

    .dashboard-view__details-card {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 16px;
      margin-right: 20px;
      border-radius: $--border-radius;
      &:last-child { margin-right: 0px; }
      &:nth-child(1) .dashboard-view__details-icon { background-color: #621ba2; }
      &:nth-child(2) .dashboard-view__details-icon { background-color: #d44eb7; }
      &:nth-child(3) .dashboard-view__details-icon { background-color: #9f64ea; }

      .dashboard-view__details-icon {
        margin-right: 16px;
        .md-icon, span { color: $--white !important; }
      }

      .dashboard-view__details-text {
        h2 { font-weight: 400; margin: 0; }
      }
    }
  }

  .dashboard-view__chart {
    flex: 1;
    padding: 16px;
    margin-top: 20px;
    border-radius: $--border-radius;
  }
}
</style>
