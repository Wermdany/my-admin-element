import { NEVER_SHOW_TAG_VIEW_PAGES_NAME } from "@/namespace";

// 拥有动态路由的可以开启多个
const regex = /\/:\w+/g;
/**
 * 新增一个缓存节点
 */
function addCached({ cachedViews }, view) {
  let { matched, name, path } = view;
  if (!matched) return;
  const format = formatMatched(matched, name, cachedViews, path);
  mergeCached(cachedViews, format);
}
/**
 *
 * @param {*} param
 * @param {*} view
 */
function removeCached({ cachedViews }, view) {
  let { matched, name, path } = view;
  if (!matched) return;
  const format = formatMatched(matched, name, cachedViews, path);
  delCached(cachedViews, format);
}
/**
 * 把 matched 格式化为树形格式
 * @param {Array} matched
 * @param {String} name
 */
function formatMatched(matched, name, parent, path) {
  let route = {
    name: "",
    parent
  };
  matched = matched.slice(1);
  route.name = matched[0].name;
  if (regex.test(matched[0].path)) {
    route.many = true;
  }
  if (matched.length == 1) {
    route.path = path;
  }
  if (matched[0].name !== name) {
    route.children = [].concat(formatMatched(matched, name, route, path));
  }
  return route;
}
/**
 * 合并 cache
 */
function mergeCached(all, format) {
  let index = all.findIndex(v => v.name === format.name);
  if (index == -1) {
    all.push(format);
  } else {
    if (format.children && format.children.length) {
      mergeCached(all[index].children, format.children[0]);
    } else {
      //如果是动态路由则可以添加多个，在销毁的时候只有全部关闭才会取消缓存
      if (
        format.many &&
        format.path &&
        all.findIndex(v => v.path === format.path) === -1
      ) {
        all.push(format);
      }
    }
  }
}

function delCached(all, format) {
  let index = all.findIndex(v => {
    if (v.path && format.path) {
      return v.name === format.name && v.path === format.path;
    } else {
      return v.name === format.name;
    }
  });
  if (index == -1) {
    return;
  } else {
    if (format.children && format.children.length) {
      delCached(all[index].children, format.children[0]);
    } else {
      let parent = all[index].parent;
      all.splice(index, 1);
      if (!all.length && !Array.isArray(parent)) {
        delParentCached(parent);
      }
    }
  }
}

function delParentCached(parent) {
  if (
    !Array.isArray(parent.parent) &&
    (parent.children.length == 1 || parent.children.length == 0)
  ) {
    delParentCached(parent.parent);
  } else {
    if (Array.isArray(parent.parent)) {
      let index = parent.parent.findIndex(v => v.name === parent.name);
      parent.parent.splice(index, 1);
    } else {
      let index = parent.children.findIndex(v => v.name === parent.name);
      parent.children.splice(index, 1);
    }
  }
}

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
    if (view.meta.noCache) return;
    addCached(state, view);
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
    removeCached(state, view);
    // const index = state.cachedViews.indexOf(view.name);
    // index > -1 && state.cachedViews.splice(index, 1);
  },
  DEL_OTHERS_VISITED_VIEWs: (state, view) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path;
    });
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    state.cachedViews = [];
    addCached(state, view);
  },
  DEL_ALL_VISITED_VIEWS: state => {
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
