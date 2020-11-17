import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'
import childsModule from './modules/childs'
import historicModule from './modules/historic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  getters: {
    isLoading: state => state.isLoading
  },
  mutations: {
    showLoading: (state) => (state.isLoading = true),
    hideLoading: (state) => (state.isLoading = false)
  },
  actions: {
    showLoading ({ commit }) {
      commit('showLoading')
    },
    hideLoading ({ commit }) {
      commit('hideLoading')
    }
  },
  modules: {
    accountModule,
    childsModule,
    historicModule
  }
})
