const childs = {
  state: {
    childsList: [
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
        picture: 'https://placeimg.com/40/40/people/2'
      },
      {
        id: 4,
        name: 'Mamyugas Pieroi',
        picture: 'https://placeimg.com/40/40/people/3'
      }
    ]
  },
  getters: {
    childsList: state => state.childsList
  },
  mutations: {
    clearChilds (state) {
      state.childsList = []
    }
  },
  actions: {
    getChilds ({ commit }, responsableId) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line
        axios.get('api/childs/', responsableId)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.error(error)
            reject(error)
          })
      })
    },
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
    }
  }
}

export default childs
