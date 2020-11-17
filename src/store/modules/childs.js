import axiosDispatch from '../axiosDispatch'

const childsPath = '/child'

const childs = {
  state: [],
  getters: {
    getChildsList: state => state
  },
  mutations: {
    clearChildsList: (state) => (state.length = 0),
    setChildsList: (state, childsList) => (state.push(...childsList)),
    setNewChild: (state, newChild) => (state.push(newChild))
  },
  actions: {
    getChildsList ({ _ }) {
      return axiosDispatch({
        url: `${childsPath}`,
        mutation: 'setChildsList'
      })
    },

    addNewChild ({ _ }, newChild) {
      return axiosDispatch({
        url: `${childsPath}`,
        method: 'POST',
        data: newChild,
        mutation: 'setNewChild'
      })
    }
  }
}

export default childs
