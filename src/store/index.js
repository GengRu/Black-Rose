import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nerr: []
  },
  mutations: {
    Getpara(state, sin) {
      state.nerr.push(sin);
    },
    setclear(state, ins) {
      state.nerr = ins;
    }
  },
  actions: {},
  modules: {}
});
