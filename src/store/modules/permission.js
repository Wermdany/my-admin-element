import constant from "@/router/modules/constant.static";
import tail from "@/router/modules/tail.static";
import unLoginTail from "@/router/modules/unLoginTail.static";
import { userRules } from "@/api/user";
import { HTTP_PASS } from "@/namespace";
import { resetRouter, addRouter } from "@/router";
import path from "path";

function addDefaultRedirect(route) {
  if (!Array.isArray(route)) {
    throw new Error("路由必须是一个数组！");
  }
  let defaultRedirect = {
    path: "/",
    redirect: route[0].path,
    hidden: true
  };
  let first = route[0];
  if (first.redirect && first.children.length > 0) {
    // 目前只能查找一级
    defaultRedirect.redirect = first.redirect;
    for (let i = 0; i < first.children.length; i++) {
      if (path.resolve(first.path, first.children[i].path) === first.redirect) {
        first.children[i].meta.affix = true;
      }
    }
  } else {
    first.meta = { affix: true, ...first.meta };
    route.splice(1, first);
  }
  route.unshift(defaultRedirect);
  return route;
}
/**
 * 路由权限
 */
const state = {
  // 总路由
  routes: constant.concat(unLoginTail),
  // 添加的路由，判断是获取到路由的标识
  addRoutes: [],
  firstRedirect: {}
};
const mutations = {
  SET_ROUTERS: (state, addRoutes) => {
    const add = addDefaultRedirect(addRoutes);
    const all = constant.concat(addRoutes, tail);
    resetRouter();
    addRouter(all);
    state.firstRedirect = add[0];
    state.addRoutes = add;
    state.routes = all;
  },
  RESET_ROUTERS: state => {
    const all = constant.concat(unLoginTail);
    resetRouter();
    addRouter(all);
    state.addRoutes = [];
    state.routes = all;
    state.firstRedirect = {};
  }
};
const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      userRules()
        .then(res => {
          if (res.code == HTTP_PASS) {
            commit("SET_ROUTERS", [res.data]);
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  resetRoutes({ commit }) {
    return new Promise(resolve => {
      commit("RESET_ROUTERS");
      resolve();
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
