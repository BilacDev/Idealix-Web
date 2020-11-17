import axiosDispatch from '../axiosDispatch'

const historicPath = '/historic'

const initialState = {
  id: '',
  name: '',
  gender: '',
  status: '',
  age: null,
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
      axiosDispatch({
        url: `${historicPath}/${childId}`,
        mutation: 'setCurrentChild'
      })
    },
    addNewPoint ({ _ }, newPoint) {
      axiosDispatch({
        url: `${historicPath}`,
        method: 'POST',
        data: newPoint,
        mutation: 'setNewPoint'
      })
    }
  }
}

export default historic
