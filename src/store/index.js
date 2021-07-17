import Vue from "vue";
import Vuex from "vuex";
// 10
import movies from "./modules/movies";

Vue.use(Vuex);
// 24
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // 10
    movies,
  },
});
// 25
store.dispatch("initMoviesStore");
// 24-1
export default store;
