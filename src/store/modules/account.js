import axiosDispatch from '../axiosDispatch'

const resposablePath = '/responsible'

const initialState = JSON.parse(localStorage.getItem('iDealixLoggedPerson')) || {
  id: '',
  name: '',
  email: '',
  token: ''
}

const account = {
  state: initialState,
  getters: {
    isLoggedIn: state => !!state.token,
    getResponsibleData: state => state
  },
  mutations: {
    clearLoggedPerson (state) {
      // eslint-disable-next-line
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem('iDealixLoggedPerson')

      Object.assign(state, initialState)
    },
    setLoggedPerson (state, credentials) {
      state.id = credentials.id
      state.name = credentials.name
      state.email = credentials.email
      state.token = credentials.token

      // eslint-disable-next-line
      axios.defaults.headers.common['Authorization'] = state.token
      localStorage.setItem('iDealixLoggedPerson', JSON.stringify(state))
    }
  },
  actions: {
    createAccount ({ _ }, params) {
      delete params.accepted

      return axiosDispatch({
        url: `${resposablePath}/register`,
        method: 'POST',
        data: params,
        mutation: 'setLoggedPerson'
      })
    },

    setLoggedPerson ({ _ }, params) {
      delete params.rememberme

      return axiosDispatch({
        url: `${resposablePath}`,
        method: 'POST',
        data: params,
        mutation: 'setLoggedPerson'
      })
    },

    clearLoggedPerson ({ commit }) {
      commit('clearLoggedPerson')
      commit('clearChildsList')
      commit('clearCurrentChild')
    }
  }
}

export default account
