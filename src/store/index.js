import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'
import childsModule from './modules/childs'
import historyModule from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    accountModule,
    childsModule,
    historyModule
  }
})
