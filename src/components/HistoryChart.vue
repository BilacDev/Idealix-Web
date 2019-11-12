<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['kidHistory'],
  computed: {
    // chartData () {
    //   this.
    // },
    options () {

    }
  },
  mounted () {
    this.renderChart(this.kidHistory)
  }
}
</script>
