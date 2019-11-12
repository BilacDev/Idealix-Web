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
    },
    styles () {
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
  beforeMount () {

  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
