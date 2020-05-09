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
import { getStorageNullToDefault } from "@/utils/defaultVar";
const state = {
  // 侧边栏
  sidebar: {
    // 是否缩进,现在页面总是根据尺寸进行缩放
    isCollapse: getStorageNullToDefault(IS_COLLAPSE),
    // 是否开启动画,解决页面缩放或者不同尺寸下动画闪烁问题
    withoutAnimation: true
  },
  // 当前视窗大小
  device: "LG",
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
    state.sidebar.withoutAnimation = false;
    Storage.set(IS_COLLAPSE, !state.sidebar.isCollapse);
    state.sidebar.isCollapse = !state.sidebar.isCollapse;
  },
  CHANGE_SIDEBAR: (state, { isCollapse, withoutAnimation }) => {
    state.sidebar.withoutAnimation = withoutAnimation;
    Storage.set(IS_COLLAPSE, isCollapse);
    state.sidebar.isCollapse = isCollapse;
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
  },
  CHANGE_DEVICE: (state, device) => {
    state.device = device;
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
  },
  changeSideBar: ({ commit }, state) => {
    commit("CHANGE_SIDEBAR", state);
  },
  changeDevice({ commit }, device) {
    commit("CHANGE_DEVICE", device);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
