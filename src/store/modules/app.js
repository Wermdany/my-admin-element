/**
 * 系统设置
 */
import Storage from "@/utils/storage";
import {
  UI_SIZE,
  SIDEBAR_LOGO,
  FIXED_HEADER,
  OPEN_TAGS_VIEW,
  IS_COLLAPSE
} from "@/namespace";
const state = {
  // 侧边栏
  sidebar: {
    // 是否缩进
    isCollapse: Storage.get(IS_COLLAPSE) || false,
    // 是否开启动画
    withoutAnimation: false
  },
  // 当前视窗大小
  device: "desktop",
  // 全局组件大小
  size: localStorage.getItem(UI_SIZE) || "medium",
  // 是否显示logo
  sidebarLogo: Storage.get(SIDEBAR_LOGO) || true,
  // 是否固定头部
  fixedHeader: Storage.get(FIXED_HEADER) || true,
  // 是否打开标签页
  openTagsView: Storage.get(OPEN_TAGS_VIEW) || true
};
const mutations = {
  TOGGLE_SIDEBAR: state => {
    Storage.set(IS_COLLAPSE, !state.sidebar.isCollapse);
    state.sidebar.isCollapse = !state.sidebar.isCollapse;
  },
  TOGGLE_FIXED_HEADER: state => {
    Storage.set(FIXED_HEADER, !state.fixedHeader);
    state.fixedHeader = !state.fixedHeader;
  },
  SET_SIZE: (state, size) => {
    Storage.set(UI_SIZE, size);
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
