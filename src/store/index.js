import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      id: 1,
      name: 'Guilherme Rios da Cunha',
      picture: 'https://placeimg.com/40/40/people/10'
    },
    kidsList: [
      {
        id: 1,
        name: 'Abbey Christansens Teste Nome Grande',
        picture: 'https://placeimg.com/40/40/people/1'
      },
      {
        id: 2,
        name: 'Alex Nelson',
        picture: ''
      },
      {
        id: 3,
        name: 'Mary Johnson',
        picture: 'https://placeimg.com/40/40/people/3'
      },
      {
        id: 4,
        name: 'Mamyugas Pieroi',
        picture: ''
      },
      {
        id: 5,
        name: 'Blateuse Blateus',
        picture: 'https://placeimg.com/40/40/people/5'
      },
      {
        id: 6,
        name: 'Kuyso Ismaul',
        picture: 'https://placeimg.com/40/40/people/6'
      },
      {
        id: 7,
        name: 'Woazoil Huena',
        picture: 'https://placeimg.com/40/40/people/7'
      }
    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    accountModule
  }
})
