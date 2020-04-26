import Vue from "vue";
import Router from "vue-router";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
import constant from "@/router/modules/constant.static";
import tail from "@/router/modules/tail.static";
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
router.addRoutes(componentToName(constant.concat(tail), nameToComponent));
export function addRouter(route) {
  console.log(3, router.matcher);
  const pushRoute = componentToName(route, nameToComponent);
  console.log(33, pushRoute);
  router.addRoutes(pushRoute);
  console.log(4, router.matcher);
}
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  console.log(1, router.matcher);
  router.matcher = newRouter.matcher; // reset router
  console.log(2, router.matcher);
}
export default router;
