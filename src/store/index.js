import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'
import childsModule from './modules/childs'
import historicModule from './modules/historic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    addChildDialogVisibel: false,
    addPointDialogVisibel: false
  },
  getters: {
    isLoading: state => state.isLoading,
    addChildDialogVisibel: state => state.addChildDialogVisibel,
    addPointDialogVisibel: state => state.addPointDialogVisibel
  },
  mutations: {
    isoading: (state, visible) => (state.isLoading = visible),
    updateAddChildDialogVisibel: (state, visible) => (state.addChildDialogVisibel = visible),
    updateAddPointDialogVisibel: (state, visible) => (state.addPointDialogVisibel = visible)
  },
  actions: {
    isoading ({ commit }, visible) {
      commit('showLoading', visible)
    },
    updateAddChildDialogVisibel ({ commit }, visible) {
      commit('updateAddChildDialogVisibel', visible)
    },
    updateAddPointDialogVisibel ({ commit }, visible) {
      commit('updateAddPointDialogVisibel', visible)
    }
  },
  modules: {
    accountModule,
    childsModule,
    historicModule
  }
})
