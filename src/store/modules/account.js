import router from '@/router'

const account = {
  state: {
    id: 1,
    name: 'Guilherme Rios da Cunha',
    email: 'guilherme.rc.98@gmil.com',
    picture: 'https://placeimg.com/40/40/people/10',
    token: localStorage.getItem('iDealixToken') || ''
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    logout (state) {
      state.id = ''
      state.name = ''
      state.email = ''
      state.picture = ''
      state.token = ''
    }
  },
  actions: {
    logout ({ commit }, options) {
      commit('logout')
      commit('clearChilds')
      commit('clearHistory')
      localStorage.removeItem('iDealixToken')
      // eslint-disable-next-line
      delete axios.defaults.headers.common['Authorization']
      if (options && options.redirect === false) {} else router.push('/login')
    },
    login ({ commit }, credentials) {
      // eslint-disable-next-line
      delete axios.defaults.headers.common['Authorization']
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line
        axios.post('api/account/token', credentials)
          .then(response => {
            const token = response.data.token
            // eslint-disable-next-line
            axios.defaults.headers.common['Authorization'] = token
            localStorage.setItem('iDealixToken', token)
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('iDealixToken')
            reject(error)
          })
      })
    },
    editProfile ({ commit }, profileData) {
      // return new Promise((resolve, reject) => {
      //   // eslint-disable-next-line
      //   axios.post('api/', profileData)
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

export default account