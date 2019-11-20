const history = {
  state: {
    info: {
      id: '5',
      name: 'Alex Nelson',
      gender: 'Menino',
      age: '6',
      picture: '',
      status: 'Saudável',
      height: '1,20m',
      weight: '45,2kg'
    },
    history: {}
  },
  getters: {
    childInfo: state => state.info,
    childHistory: state => state.history
  },
  mutations: {
    clearHistory (state) {
      state.info.id = ''
      state.info.name = ''
      state.info.gender = ''
      state.info.age = ''
      state.info.picture = ''
      state.info.status = ''
      state.info.height = ''
      state.info.weight = ''
      state.history = {}
    },
    setChild (state, childInfo) {
      state.info.id = childInfo.id
      state.info.name = childInfo.name
      state.info.gender = childInfo.gender
      state.info.age = childInfo.age
      state.info.picture = childInfo.picture
      state.info.status = childInfo.status
      state.info.height = childInfo.height
      state.info.weight = childInfo.weight
      state.history = childInfo.history
    }
  },
  actions: {
    getChild ({ commit }, childId) {
      // return new Promise ((resolve, reject) => {
      //   axios.get('api/child/' + childId)
      //     .then(response => {
      //        commit('setChild', childInfo)
      //        resolve(response)
      //      })
      //      .catch(error => {
      //        reject(error)
      //      })
      // })
    },
    addPoint ({ commit }, newPoint) {
      // return new Promise ((resolve, reject) => {
      //   axios.post('api/child/', newPoint)
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
