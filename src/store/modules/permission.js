import constant from "@/router/modules/constant.static";
import tail from "@/router/modules/tail.static";
import { userRules } from "@/api/user";
import { HTTP_PASS } from "@/namespace";
import { resetRouter, addRouter } from "@/router";

function addDefaultRedirect(route) {
  if (!Array.isArray(route)) {
    throw new Error("路由必须是一个数组！");
  }
  let defaultRedirect = {
    path: "/",
    redirect: route[0].path,
    hidden: true
  };
  route.unshift(defaultRedirect);
  return route;
}
/**
 * 路由权限
 */
const state = {
  // 总路由
  routes: constant.concat(tail),
  // 添加的路由，判断是获取到路由的标识
  addRoutes: [],
  firstRedirect: {}
};
const mutations = {
  SET_ROUTERS: (state, addRoutes) => {
    resetRouter();
    state.addRoutes =
      addRoutes.length == 0 ? [] : addDefaultRedirect(addRoutes);
    state.routes = constant.concat(addRoutes, tail);
    addRouter(state.routes);
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
      commit("SET_ROUTERS", []);
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
