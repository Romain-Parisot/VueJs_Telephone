import { createStore } from 'vuex'

export default createStore({
  state: {
    currentnumber:'',
    contacts: [
      {
        name: 'Pierre',
        numero:'0600000000',
      },
      {
        name: 'Paul',
        numero:'0611111111',
      },
      {
        name: 'Patrick',
        numero:'0622222222',
      },
    ]
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact) {
      state.contacts.push(contact)
    },
    addnumber(state, x) {
      if (state.currentnumber.length > 9) {
        return
      }
      else{
        state.currentnumber+=x
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
