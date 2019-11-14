import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nerr: [],
    add: [],
    t:0,
  },
  mutations: {
    Getpara(state, sin) {
      state.nerr.push(sin);
    },
    setclear(state, ins) {
      state.nerr = ins;
    },
    Getadd(state, adds) {
      state.add = adds;
    }
  },
  actions: {},
  modules: {},
  getters: {
    addPrice(state) {
      var t = 0;
      state.add.forEach(el => {
        t += el.specfoods[0].price * (el.__v || 1);
        console.log(el);
      });
      console.log(t);
      return t;
    }
  }
});
