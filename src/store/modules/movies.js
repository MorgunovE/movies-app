// 17
import IDs from "@/store/mock/imdb_250";
// 12
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
// 60
// 77-1
// 91
const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE, TOGGLE_SEARCH } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    // 17-1
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    // 20-3
    movies: {},
    // 89
    isSearch: false,
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
    // 55
    moviesLength: ({ top250IDs }) => Object.keys(top250IDs).length,
    // 77-3
    // top250IDs: ({ top250IDs }) => top250IDs,
    // 89-1
    isSearch: ({ isSearch }) => isSearch,
  },
  mutations: {
    // 22-2
    [MOVIES](state, value) {
      state.movies = value;
    },
    // 60-1
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    // 77-2
    [REMOVE_MOVIE](state, index) {
      state.top250IDs.splice(index, 1);
    },
    // 91-1
    [TOGGLE_SEARCH](state, bool) {
      state.isSearch = bool;
    },
  },
  actions: {
    // 11-1
    // 17-3
    // 22-3
    // 72
    async fetchMovies({ getters, commit, dispatch }) {      
      // 22-4
      try {
        // 72-1
        dispatch("toggleLoader", true, { root: true });
        // 17-4
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
      } finally {
        // 72-2
        dispatch("toggleLoader", false, { root: true });
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
    // 103
    // initMoviesStore: {
    //   handler({ dispatch }) {
    //     dispatch("fetchMovies");
    //   },
    //   root: true,
    // },
    // 58
    changeCurrentPage({ commit, dispatch }, page) {
      // 60-2
      commit(CURRENT_PAGE, page);
      dispatch("fetchMovies");
    },
    // 77
    removeMovie({ commit, dispatch, state }, id) {
      const index = state.top250IDs.findIndex((item) => item === id);
      if (index !== -1) {
        commit(REMOVE_MOVIE, index);
        dispatch("fetchMovies");
      }
    },
    // 85
    async searchMovies({ commit, dispatch }, query) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await axios.get(`/?s=${query}`);
        // 87
        if (response.Error) {
          throw Error(response.Error);
        }
        // 87-2
        const movies = serializeResponse(response.Search);
        commit(MOVIES, movies);
      } catch (err) {
        // 87-1
        // console.log(err.message);
        // 101
        dispatch(
          "showNotify",
          {
            msg: err.message,
            title: "Error",
            variant: "danger",
          },
          { root: true }
        );
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    // 91-2
    toggleSearchState({ commit }, bool) {
      commit(TOGGLE_SEARCH, bool);
    },
  },
};

export default moviesStore;
