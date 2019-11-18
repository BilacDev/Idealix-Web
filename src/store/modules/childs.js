const childs = {
  state: {
    childsList: {}
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    addChild ({ commit }, newChild) {
      // return new Promise((resolve, reject) => {
      //   // eslint-disable-next-line
      //   axios.post('api/', newChild)
      //     .then(response => {
      //       resolve(response)
      //     })
      //     .catch(error => {
      //       reject(error)
      //     })
      // })
    },
    removeChild ({ commit }, childId) {
      // return new Promise((resolve, reject) => {
      //   // eslint-disable-next-line
      //   axios.delete('api/childs/' + childId)
      //     .then(response => {
      //       resolve(response)
      //     })
      //     .catch(error => {
      //       reject(error)
      //     })
      // })
    },
    getChilds ({ commit }, responsableId) {
      // return new Promise((resolve, reject) => {
      //   // eslint-disable-next-line
      //   axios.get('api/childs/' + responsableId)
      //     .then(response => {
      //       resolve(response)
      //     })
      //     .catch(error => {
      //       reject(error)
      //     })
      // })
    }
  }
}

export default childs
