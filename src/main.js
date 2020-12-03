import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import VueToast from 'vue-toast-notification'
import VueMoney from 'v-money'
import Vuelidate from 'vuelidate'
import '@/plugins/axios'

import './styles/main.scss'
import 'vue-material/dist/vue-material.min.css'
import 'vue-toast-notification/dist/theme-sugar.css'

import UserAvatar from '@/components/UserAvatar'
Vue.component('UserAvatar', UserAvatar)

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueToast, { position: 'top-right' })
Vue.use(VueMoney)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  VueMaterial,
  render: h => h(App)
}).$mount('#app')

Vue.material.locale = {
  dateFormat: 'dd/MM/yyyy',
  days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  shorterDays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  shorterMonths: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  cancel: 'Cancelar',
  confirm: 'Ok'
}
