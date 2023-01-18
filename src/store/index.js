import { createStore } from 'vuex'

export default createStore({
  state: {
    currentnumber:null,
    // contacts: [
    //   {
    //     name: 'Pierre',
    //     numero:0600000000,
    //   },
    //   {
    //     name: 'Paul',
    //     numero:0611111111,
    //   },
    //   {
    //     name: 'Patrick',
    //     numero:0622222222,
    //   },
    // ]
  },
  getters: {
  },
  mutations: {
    // ajoutContact(state, contact) {
    //   state.contacts.push(contact)
    // },
    addnumber(state, x) {
      state.currentnumber.push(x)
    }
  },
  actions: {
  },
  modules: {
  }
})
