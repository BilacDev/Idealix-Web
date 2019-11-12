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
      const opts = {
        responsive: true,
        maintainAspectRatio: false
      }
      return opts
    }
  },
  beforeMount () {

  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
