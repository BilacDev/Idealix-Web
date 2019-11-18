import router from '@/router'

const account = {
  state: {
    id: '',
    name: '',
    email: '',
    picture: '',
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
        axios.post('api/accounts/token', credentials)
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
    }
  }
}

export default account
