<script>
import { Line } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Line,
  props: {
    currentHistoric: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      classification: 'getClassification',
      currentChild: 'getCurrentChild'
    }),

    options () {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    },

    currentHistoricAges () {
      return this.currentHistoric.map(h => h.age)
    },

    filteredClassification () {
      return this.classification[this.currentChild.gender].filter(c =>
        this.currentHistoric
          .map(h => h.age > 24 && h.age % 12 ? h.age - (h.age % 12) : h.age)
          .includes(c.age)
      )
    },

    historic () {
      return {
        labels: this.currentHistoric.map(h => h.age),
        datasets: [
          {
            label: 'Ideal',
            borderColor: '#9f64eac6',
            data: this.filteredClassification.map(c => c.imc)
          },
          {
            label: 'Atual',
            borderColor: '#d44eb7c6',
            data: this.currentHistoric.map(h => h.imc)
          }
        ]
      }
    }
  },
  watch: {
    'currentChild.id' (_current) {
      this.fetchChart()
    }
  },
  mounted () {
    this.fetchChart()
  },
  methods: {
    fetchChart () {
      this.renderChart(this.historic, this.options)
    }
  }
}
</script>
