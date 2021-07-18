// 68
import mutations from "@/store/mutation";
const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    // 68-1
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
  mutations: {
    // 68-2
    [TOGGLE_LOADER](state, bool) {
      state.isShowLoader = bool;
    },
  },
  actions: {
    // 68-3
    toggleLoader({ commit }, bool) {
      commit(TOGGLE_LOADER, bool);
    },
  },
};
// 68-4
export default loaderStore;
