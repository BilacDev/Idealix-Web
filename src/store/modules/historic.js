import axiosDispatch from '../axiosDispatch'

const historicPath = '/historic'

const initialState = {
  currentChild: {
    id: '',
    name: '',
    gender: '',
    age: null,
    status: '',
    height: null,
    weight: null,
    historic: []
  },
  classification: {
    m: [],
    f: []
  }
}

const historic = {
  state: initialState,
  getters: {
    getCurrentChild: state => state.currentChild,
    getClassification: state => state.classification
  },
  mutations: {
    clearCurrentChild (state) {
      Object.assign(state.currentChild, initialState.currentChild)
    },
    setCurrentChild (state, currentChild) {
      Object.assign(state.currentChild, currentChild)
    },
    setNewPoint (state, newPoint) {
      if (state.currentChild.id === newPoint.id_child) {
        state.currentChild.historic.push(newPoint)
      }
    },
    setClassification (state, classification) {
      state.classification.m = classification.filter(c => c.gender === 'm')
      state.classification.f = classification.filter(c => c.gender === 'f')
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
    },
    getClassification ({ _ }) {
      return axiosDispatch({
        url: `/classification`,
        mutation: 'setClassification'
      })
    }
  }
}

export default historic
