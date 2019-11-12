import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kidsList: [
      {
        id: 1,
        name: 'Abbey Christansens',
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
  mutations: {

  },
  actions: {

  }
})
