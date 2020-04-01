import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Config: { size: "mini" }
  },
  mutations: {
    changeConfig(state, newValue) {
      console.log(newValue);
      state.Config = newValue;
    }
  },
  actions: {},
  getters: {
    getConfig(state) {
      return state.Config;
    }
  }
});
