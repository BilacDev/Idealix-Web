<template>
  <div class="dashboard-view">
    <div class="dashboard-view__main-cards">
      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          :name="currentChild.name"
          icon="person"
          :picture="currentChild.picture"
          size="md-large"
          class="dashboard-view__details-icon" />
        <div class="dashboard-view__details-text">
          <h2>{{ currentChildMasked.name }}</h2>
          <div>{{ currentChildMasked.age }} - {{ currentChildMasked.gender }}</div>
        </div>
      </md-card>

      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          icon="favorite"
          size="md-large"
          class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Status Atual</h2>
          <div>{{ currentChildMasked.status }}</div>
        </div>
      </md-card>

      <md-card class="dashboard-view__details-card elevation">
        <UserAvatar
          icon="bubble_chart"
          size="md-large"
          class="dashboard-view__details-icon"/>
        <div class="dashboard-view__details-text">
          <h2>Último marco</h2>
          <div>{{ currentChildMasked.height }} - {{ currentChildMasked.weight }}</div>
        </div>
      </md-card>
    </div>

    <md-card class="dashboard-view__chart elevation">
      <md-empty-state
        v-if="!childsList.length || routerIdParam === 'home' || !currentChild.historic.length"
        :md-icon="emptyStateData.icon"
        :md-label="emptyStateData.label"
        :md-description="emptyStateData.description"
        :class="emptyStateData.class"
        class="dashboard-view__empty-state">
        <md-button
          v-if="emptyStateData.showButton"
          class="md-primary md-raised"
          @click="emptyStateData.buttonAction === 'updateAddChildDialogVisibel' ? updateAddChildDialogVisibel(true) : updateAddPointDialogVisibel(true)">
          {{ emptyStateData.buttonText }}
        </md-button>
      </md-empty-state>

      <HistoryChart
        v-else
        class="dashboard-view__history-chart"
        :kid-history="currentChild.historic"
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
    ...mapGetters({
      currentChild: 'getCurrentChild',
      childsList: 'getChildsList'
    }),

    currentChildMasked () {
      const {
        name,
        age,
        gender,
        status,
        height,
        weight
      } = this.currentChild

      return {
        name: name || '-',
        age: age < 1 ? `${~~(age * 12)} Meses` : `${~~age} Anos`,
        gender: gender === 'm' ? 'Menino' : gender === 'f' ? 'Menina' : '-',
        status: status || '-',
        height: `${height || '0.00'}m`.replace('.', ','),
        weight: `${weight || '0.00'}Kg`.replace('.', ',')
      }
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
    },

    routerIdParam () {
      return this.$route.params.id
    },

    emptyStateData () {
      if (!this.childsList.length) {
        return {
          icon: 'person_add',
          label: 'Adicione uma criança',
          description: 'Ops, parace que você ainda não adicionou nimguém por aqui. Adiciona uma criança para começar.',
          buttonText: 'Adicionar criança',
          buttonAction: 'updateAddChildDialogVisibel',
          showButton: true
        }
      } else if (this.routerIdParam === 'home') {
        return {
          icon: 'child_care',
          label: 'Bem vindo!',
          description: 'Seleciona uma criança para ver seus dados.',
          showButton: false,
          class: 'md-primary'
        }
      } else if (!this.history.length && this.childsList.map(c => c.id).includes(this.routerIdParam)) {
        return {
          icon: 'outlined_flag',
          label: 'Adicione o primeiro marco',
          description: 'Esta criança ainda não possui nenhuma medição. Adicione a o primeiro marco para acompanhar seu crescimento.',
          buttonText: 'Adicionar primeiro marco',
          buttonAction: 'updateAddPointDialogVisibel',
          showButton: true
        }
      } else {
        return {
          icon: 'cancel_presentation',
          label: 'Ops!',
          description: 'Parece que esta criança não está cadastrada ou houve algum erro. Cadastre a criança ou tente novamente mais tarde.',
          showButton: false
        }
      }
    }
  },
  watch: {
    'routerIdParam' (currentId) {
      this.handleGetCurrentChild(currentId)
    }
  },
  beforeMount () {
    this.handleGetCurrentChild(this.routerIdParam)
  },
  created () {
    this.history = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Ideal',
          backgroundColor: '#9f64eac6',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        },
        {
          label: 'Atual',
          backgroundColor: '#d44eb7c6',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getCurrentChild',
      'updateAddChildDialogVisibel',
      'updateAddPointDialogVisibel'
    ]),

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },

    handleGetCurrentChild (childId) {
      this.getCurrentChild(childId)
        .catch(err => {
          this.$toast.error('Ops! Houve um erro ao carregar esta criança.')
          console.log(err)
        })
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
    display: flex;
    align-items: center;

    .dashboard-view__empty-state {
      max-width: 600px;
    }
  }
}
</style>
