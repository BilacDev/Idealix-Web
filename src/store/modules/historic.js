import axiosDispatch from '../axiosDispatch'

const historicPath = '/historic'

const initialState = {
  id: '',
  name: '',
  gender: '',
  age: null,
  status: '',
  height: null,
  weight: null,
  historic: []
}

const historic = {
  state: initialState,
  getters: {
    getCurrentChild: state => state
  },
  mutations: {
    clearCurrentChild (state) {
      Object.assign(state, initialState)
    },
    setCurrentChild (state, currentChild) {
      Object.assign(state, currentChild)
    },
    setNewPoint (state, newPoint) {
      state.historic.push(newPoint)
    }
  },
  actions: {
    getCurrentChild ({ _ }, childId) {
      if (childId === 'home') return

      return axiosDispatch({
        url: `${historicPath}/${childId}`,
        mutation: 'setCurrentChild'
      })
    },
    addNewPoint ({ _ }, newPoint) {
      return axiosDispatch({
        url: `${historicPath}`,
        method: 'POST',
        data: newPoint,
        mutation: 'setNewPoint'
      })
    }
  }
}

export default historic
