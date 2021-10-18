import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name: 'Rafael',
      email: 'rafael@gmail.com',
    }
  },
  mutations: {
    registerUser(state, payload){
      state.user.name = payload
      console.log("Nome alterado!")
    }
  },
  actions: {
  },
  modules: {
  }
})
