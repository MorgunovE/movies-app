// 94
import mutations from "@/store/mutation";

// 96
const { SHOW_TOAST_NOTIFY } = mutations;

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    // 96-1
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    // 96-2
    [SHOW_TOAST_NOTIFY](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    // 96-3
    showNotify({ commit }, msg) {
      commit(SHOW_TOAST_NOTIFY, msg);
    },
  },
};
// 96-4
export default notificationStore;
