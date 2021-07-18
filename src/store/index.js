import Vue from "vue";
import Vuex from "vuex";
// 10
import movies from "./modules/movies";
// 69
import loader from "./modules/loader";

Vue.use(Vuex);
// 24
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // 10
    movies,
    // 69-1
    loader,
  },
});
// 25
store.dispatch("initMoviesStore");
// 24-1
export default store;
