import { createStore } from "vuex";

export default createStore({
  // state para armazenar dados
  state: {
    user: {
      name: "Rafael",
      email: "rafael@gmail.com",
    },
  },
  // métodos para manipulação de dados da state
  mutations: {
    registerUser(state, payload) {
      state.user.name = payload;
      console.log("Nome alterado!");
    },
  },
  actions: {},
  modules: {},
});
