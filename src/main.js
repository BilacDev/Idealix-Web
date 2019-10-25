import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './main.scss'

Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  VueMaterial,
  render: h => h(App)
}).$mount('#app')
