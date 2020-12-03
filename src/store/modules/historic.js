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
    measurementDate: null,
    imc: null,
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
    // updateCurrentChild (state, currentChild) {
    //   state.currentChild.measurementDate = currentChild.currentChild
    //   state.currentChild.status = currentChild.status
    //   state.currentChild.height = currentChild.height
    //   state.currentChild.weight = currentChild.weight
    //   state.currentChild.imc = currentChild.imc
    // },
    setNewPoint (state, newPoint) {
      if (state.currentChild.id === newPoint.id_child) {
        state.currentChild.historic.push(newPoint)
        state.currentChild.measurementDate = newPoint.measurement_date
        state.currentChild.status = newPoint.status
        state.currentChild.height = newPoint.height
        state.currentChild.weight = newPoint.weight
        state.currentChild.imc = newPoint.imc
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
    // updateCurrentChild ({ _ }, childId) {
    //   if (childId === 'home') return

    //   return axiosDispatch({
    //     url: `${historicPath}/${childId}`,
    //     mutation: 'updateCurrentChild'
    //   })
    // },
    addNewPoint ({ dispatch }, newPoint) {
      return axiosDispatch({
        url: `${historicPath}`,
        method: 'POST',
        data: newPoint,
        mutation: 'setNewPoint'
      })
      // .then(res => {
      //   dispatch('updateCurrentChild', res.id_child)
      //   return res
      // })
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
