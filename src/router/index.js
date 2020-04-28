import Vue from "vue";
import Router from "vue-router";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
import constant from "@/router/modules/constant.static";
import unLoginTail from "@/router/modules/unLoginTail.static";
import store from "@/store";
Vue.use(Router);

/**
 * add modules
 */

// const modulesFiles = require.context("./modules", false, /\.static\.js$/);
// const module = modulesFiles.keys().reduce((modules, item) => {
//   const reg = /^\.\/(.*)\.static\.\w+$/;
//   const name = item.replace(reg, "$1");
//   const value = modulesFiles(item);
//   modules[name] = value.default;
//   return modules;
// }, {});

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: []
  });

const router = new createRouter();
if (!store.getters.token) {
  router.addRoutes(
    componentToName(constant.concat(unLoginTail), nameToComponent)
  );
}
export function addRouter(route) {
  const pushRoute = componentToName(route, nameToComponent);
  router.addRoutes(pushRoute);
}
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
