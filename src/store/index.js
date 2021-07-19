import Vue from "vue";
import Vuex from "vuex";
// 10
import movies from "./modules/movies";
// 69
import loader from "./modules/loader";
// 97
import notification from "./modules/notification";

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
    // 97-1
    notification,
  },
});
// 25
// 104
// store.dispatch("initMoviesStore");
// 24-1
export default store;
