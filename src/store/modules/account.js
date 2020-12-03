import axiosDispatch from '../axiosDispatch'

const resposablePath = '/responsible'

const getDefaultState = () => {
  return JSON.parse(localStorage.getItem('iDealixLoggedPerson')) ||
  { id: '', name: '', email: '', token: '' }
}

const account = {
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => !!state.token,
    getResponsibleData: state => state
  },
  mutations: {
    clearLoggedPerson (state) {
      // eslint-disable-next-line
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem('iDealixLoggedPerson')

      Object.assign(state, getDefaultState())
    },
    setLoggedPerson (state, { data, payload }) {
      console.log('ims payload', data, payload)
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.token = data.token

      // eslint-disable-next-line
      axios.defaults.headers.common['Authorization'] = state.token
      if (payload.rememberme) localStorage.setItem('iDealixLoggedPerson', JSON.stringify(state))
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
      const rememberme = params.rememberme
      delete params.rememberme

      return axiosDispatch({
        url: `${resposablePath}`,
        method: 'POST',
        data: params,
        payload: { rememberme },
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
