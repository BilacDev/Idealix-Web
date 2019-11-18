const history = {
  state: {
    id: '',
    name: '',
    picture: '',
    gender: '',
    age: ''
  },
  getters: {
  },
  mutations: {
    clearHistory (state) {
      state.id: '',
      state.name: '',
      state.picture: '',
      state.gender: '',
      state.age: ''
    }
  },
  actions: {
    getHistory ({ commit }, childId) {
      // return new Promise ((resolve, reject) => {
      //   axios.get('api/' + childId)
      //     .then(response => {
      //        resolve(response)
      //      })
      //      .catch(error => {
      //        reject(error)
      //      })
      // })
    },
    addPoint ({ commit }, newPoint) {
      // return new Promise ((resolve, reject) => {
      //   axios.post('api/' + newPoint)
      //     .then(response => {
      //        resolve(response)
      //      })
      //      .catch(error => {
      //        reject(error)
      //      })
      // })
    }
  }
}

export default history
