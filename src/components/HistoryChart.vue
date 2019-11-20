<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['kidHistory'],
  computed: {
    chartData () {
      return this.kidHistory
    },
    options () {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  beforeMount () {

  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
