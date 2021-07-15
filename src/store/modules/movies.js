// 17
import IDs from "@/store/mock/imdb_250";
// 11
import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {
    // 17-1
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
  },
  getters: {
    // 17-2
    slicedIDS:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {},
  actions: {
    // 11-1
    // 17-3
    async fetchMovies({ getters }) {
      // 17-4
      const { currentPage, moviesPerPage, slicedIDS } = getters;
      const from = currentPage * moviesPerPage - moviesPerPage;
      const to = currentPage * moviesPerPage;
      const moviesToFetch = slicedIDS(from, to);
      console.log(moviesToFetch);
      const request = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
      // tt0111161
      // const response = await axios.get("/",{
      //   params: {
      //     i: "tt0111161"
      //   }
      // });
      const response = await axios.get("/?i=tt0111161");
      console.log(response);
    },
  },
};

export default moviesStore;
