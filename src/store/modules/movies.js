// 11
import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // 11-1
    async fetchMovies(contex) {
      console.log(contex);
      // tt0111161
      const response = await axios.get("/?i=tt0111161");
      console.log(response);
    },
  },
};

export default moviesStore;
