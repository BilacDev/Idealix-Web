<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['kidHistory'],
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.kidHistory, this.options)
  }
}
</script>
