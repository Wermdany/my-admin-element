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
import { getStorageNullToDefault } from "@/store/defaultVar";
const state = {
  // 侧边栏
  sidebar: {
    // 是否缩进
    isCollapse: getStorageNullToDefault(IS_COLLAPSE),
    // 是否开启动画
    withoutAnimation: false
  },
  // 当前视窗大小
  device: "desktop",
  // 全局组件大小
  size: getStorageNullToDefault(UI_SIZE),
  // 是否显示logo
  sidebarLogo: getStorageNullToDefault(SIDEBAR_LOGO),
  // 是否固定头部
  fixedHeader: getStorageNullToDefault(FIXED_HEADER),
  // 是否打开标签页
  openTagsView: getStorageNullToDefault(OPEN_TAGS_VIEW),
  //页面是否正在加载中
  pageLoading: true
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
  TOGGLE_SIDEBAR_LOGO: state => {
    Storage.set(SIDEBAR_LOGO, !state.sidebarLogo);
    state.sidebarLogo = !state.sidebarLogo;
  },
  TOGGLE_OPEN_TAGS_VIEW: state => {
    Storage.set(OPEN_TAGS_VIEW, !state.openTagsView);
    state.openTagsView = !state.openTagsView;
  },
  SET_SIZE: (state, size) => {
    Storage.set(UI_SIZE, size);
    state.size = size;
  },
  TOGGLE_PAGE_LOADING: (state, data) => {
    state.pageLoading = data;
  }
};
const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  toggleFixedHeader({ commit }) {
    commit("TOGGLE_FIXED_HEADER");
  },
  toggleSidebarLogo({ commit }) {
    commit("TOGGLE_SIDEBAR_LOGO");
  },
  toggleOpenTagsView({ commit }) {
    commit("TOGGLE_OPEN_TAGS_VIEW");
  },
  togglePageLoading({ commit }, data) {
    commit("TOGGLE_PAGE_LOADING", data);
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
