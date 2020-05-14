import heads from "@/router/modules/common/head.route";
import loginTails from "@/router/modules/common/loginTail.route";
import { OPEN_ROUTE_MODULE_NAME } from "@/namespace";
import { formatComponentName } from "@/utils/format";
import { userRules } from "@/api/user";
import { HTTP_PASS } from "@/namespace";
import { resetRouter, addRouter } from "@/router";
import { delExternalRoute } from "@/utils/format";
import path from "path";
import deepCopy from "deepcopy";
//深拷贝，防止浅拷贝下 其他属性也被Vue劫持

let head = deepCopy(heads);
let loginTail = deepCopy(loginTails);
if (OPEN_ROUTE_MODULE_NAME) {
  head = formatComponentName(head, "common");
  loginTail = formatComponentName(loginTail, "common");
}
//未匹配到页面全部重定向至登陆页面
const unLoginTail = {
  path: "*",
  redirect: "/login",
  hidden: true
};
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
  routes: head.concat(unLoginTail),
  // 添加的路由，判断是获取到路由的标识
  addRoutes: [],
  firstRedirect: {}
};
const mutations = {
  SET_ROUTERS: (state, addRoutes) => {
    const add = addDefaultRedirect(addRoutes);
    const all = head.concat(addRoutes, loginTail);
    state.firstRedirect = add[0];
    state.addRoutes = add;
    state.routes = all;
    resetRouter();
    addRouter(delExternalRoute(all));
  },
  RESET_ROUTERS: state => {
    const all = head.concat(unLoginTail);
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
            commit("SET_ROUTERS", res.data);
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
