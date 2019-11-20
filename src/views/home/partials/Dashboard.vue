<template>
  <div class="dashboard-view">
    <div class="dashboard-view__triple">
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar :name="childInfo.name" :picture="childInfo.picture" size="md-large" class="dashboard-view__details-icon" />
        <div class="dashboard-view__details-text">
          <h2>{{ childInfo.name }}</h2>
          <span>{{ childInfo.age }} Anos - {{ childInfo.gender }}</span>
        </div>
      </md-card>
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar icon="favorite" size="md-large" class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Status Atual</h2>
          <span>{{ childInfo.status }}</span>
        </div>
      </md-card>
      <md-card class="dashboard-view__details-card elevation">
        <user-avatar icon="bubble_chart" size="md-large" class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Ultimo marco</h2>
          <span>{{ childInfo.height }} - {{ childInfo.weight }}</span>
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
    editChildForm: {
      name: '',
      gender: '',
      age: '',
      picture: ''
    }
  }),
  computed: {
    childInfo () {
      return this.$store.getters.childInfo
    },
    childHistory () {
      return this.$store.getters.childHistory
    },
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
  beforeCreate () {
    let childId = this.$route.params.id
    this.$store.dispatch('getChild', childId)
      .then(() => {

      })
      .catch(error => {
        console.error(error)
      })
  },
  created () {
    this.history = {
      labels: ['1', '2', '3', '4'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        },
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
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
@import '../../../styles/variables.scss';

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
    &:nth-child(1) .dashboard-view__details-icon {background-color: #621ba2;}
    &:nth-child(2) .dashboard-view__details-icon {background-color: #d44eb7;}
    &:nth-child(3) .dashboard-view__details-icon {background-color: #9f64ea;}
    // &:nth-child(1) .dashboard-view__details-icon {background-color: #4b62d6;}
    // &:nth-child(1) .dashboard-view__details-icon {background-color: #ffad31;}
    // &:nth-child(2) .dashboard-view__details-icon {background-color: #3471e2;}
    // &:nth-child(3) .dashboard-view__details-icon {background-color: #f7ae0a;}
    // &:nth-child(3) .dashboard-view__details-icon {background-color: #da3813;}
  }
  &__details-icon {
    .md-icon, span {color: $--white !important;}
  }
  &__details-text {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    span {
      font-size: 1.12em;
    }
    h2 {
      font-size: 1.4em;
      font-weight: 400;
      margin: 0;
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
