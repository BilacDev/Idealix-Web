<script>
import { Line } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Line,
  props: ['childHistory'],
  computed: {
    ...mapGetters({ classification: 'getClassification' }),

    options () {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    },

    historic () {
      return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Ideal',
            backgroundColor: '#9f64eac6',
            data: this.classification
          },
          {
            label: 'Atual',
            backgroundColor: '#d44eb7c6',
            data: this.childHistory
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.historic, this.options)
  }
}
</script>
