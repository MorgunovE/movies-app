// 17
import IDs from "@/store/mock/imdb_250";
// 11
import axios from "@/plugins/axios";
// 22
import mutations from "@/store/mutation";

// 20
function serializeResponse(movies) {
  // 20-2
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}
// 22-1
const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    // 17-1
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    // 20-3
    movies: {},
  },
  getters: {
    // 17-2
    slicedIDS:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    // 29
    moviesList: ({ movies }) => movies,
  },
  mutations: {
    // 22-2
    [MOVIES](state, value) {
      state.movies = value;
    },
  },
  actions: {
    // 11-1
    // 17-3
    // 22-3
    async fetchMovies({ getters, commit }) {
      // 17-4
      // 22-4
      try {
        const { currentPage, moviesPerPage, slicedIDS } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDS(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        // 18
        const response = await Promise.all(requests);
        // 20-1
        const movies = serializeResponse(response);
        // 22-4
        commit(MOVIES, movies);
      } catch (err) {
        console.log(err);
      }

      // tt0111161
      // const response = await axios.get("/",{
      //   params: {
      //     i: "tt0111161"
      //   }
      // });
      // const response = await axios.get("/?i=tt0111161");
    },
    // 23
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
  },
};

export default moviesStore;
