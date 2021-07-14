import Vue from "vue";
import Vuex from "vuex";
// 10
import movies from "./modules/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // 10
    movies,
  },
});
