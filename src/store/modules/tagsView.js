import { NEVER_SHOW_TAG_VIEW_PAGES_NAME } from "@/namespace";
const state = {
  // page name
  cachedViews: [],
  // a page Object
  visitedViews: []
};
const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (NEVER_SHOW_TAG_VIEW_PAGES_NAME.includes(view.name)) return;
    if (state.visitedViews.some(v => v.path === view.path)) return;
    state.visitedViews.push(
      Object.assign({}, view, { title: view.meta.title || "no-name" })
    );
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (NEVER_SHOW_TAG_VIEW_PAGES_NAME.includes(view.name)) return;
    if (state.cachedViews.includes(view.name)) return;
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name);
    }
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1);
        break;
      }
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name);
    index > -1 && state.cachedViews.splice(index, 1);
  },
  DEL_OTHERS_VISITED_VIEWs: (state, view) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path;
    });
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    const index = state.cachedViews.indexOf(view.name);
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1);
    } else {
      state.cachedViews = [];
    }
  },
  DEL_ALL_VISITED_VIEWS: state => {
    console.log(state);
    const affix = state.visitedViews.filter(v => v.meta && v.meta.affix);
    state.visitedViews = affix;
  },
  DEL_ALL_CACHED_VIEWS: state => {
    state.cachedViews = [];
  },
  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  }
};
const actions = {
  addVisitedView({ commit }, view) {
    commit("ADD_VISITED_VIEW", view);
  },
  addCachedView({ commit }, view) {
    commit("ADD_CACHED_VIEW", view);
  },
  addView({ dispatch }, view) {
    dispatch("addVisitedView", view);
    dispatch("addCachedView", view);
  },
  delVisitedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit("DEL_VISITED_VIEW", view);
      resolve([...state.visitedViews]);
    });
  },
  delCachedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit("DEL_CACHED_VIEW", view);
      resolve([...state.cachedViews]);
    });
  },
  delView({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch("delVisitedView", view);
      dispatch("delCachedView", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      });
    });
  },
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit("DEL_OTHERS_VISITED_VIEWs", view);
      resolve([...state.visitedViews]);
    });
  },
  delOthersCachedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit("DEL_OTHERS_CACHED_VIEWS", view);
      resolve([...state.cachedViews]);
    });
  },
  delOthersViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch("delOthersCachedViews", view);
      dispatch("delOthersVisitedViews", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      });
    });
  },
  delAllCachedViews({ commit }, view) {
    return new Promise(resolve => {
      commit("DEL_ALL_CACHED_VIEWS", view);
      resolve([...state.cachedViews]);
    });
  },
  delAllVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit("DEL_ALL_VISITED_VIEWS", view);
      resolve([...state.visitedViews]);
    });
  },
  delAllViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch("delAllCachedViews", view);
      dispatch("delAllVisitedViews", view);
      resolve({
        cachedViews: [...state.cachedViews],
        visitedViews: [...state.visitedViews]
      });
    });
  },
  updateVisitedView({ commit }, view) {
    commit("UPDATE_VISITED_VIEW", view);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
