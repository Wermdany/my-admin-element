/**
 * 全局设置
 */
import Storage from "@/utils/storage";
const state = {
  // 侧边栏
  sidebar: {
    // 是否缩进
    isCollapse: Storage.get("IS_COLLAPSE") || false,
    // 是否开启动画
    withoutAnimation: false
  },
  device: "desktop",
  size: localStorage.getItem("UI_SIZE") || "small",
  sidebarLogo: Storage.get("SIDEBAR_LOGO") || true,
  fixedHeader: Storage.get("FIXED_HEADER") || true,
  openTagsView: Storage.get("OPEN_TAGS_VIEW") || true
};
const mutations = {
  TOGGLE_SIDEBAR: state => {
    Storage.set("IS_COLLAPSE", !state.sidebar.isCollapse);
    state.sidebar.isCollapse = !state.sidebar.isCollapse;
  },
  TOGGLE_FIXED_HEADER: state => {
    Storage.set("FIXED_HEADER", !state.fixedHeader);
    state.fixedHeader = !state.fixedHeader;
  },
  SET_SIZE: (state, size) => {
    Storage.set("UI_SIZE", size);
    state.size = size;
  }
};
const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  toggleFixedHeader({ commit }) {
    commit("TOGGLE_FIXED_HEADER");
  },
  setSize({ commit }, size) {
    commit("SET_SIZE", size);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
