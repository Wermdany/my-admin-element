import Vue from "vue";
import Router from "vue-router";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
Vue.use(Router);

/**
 * add modules
 */

const modulesFiles = require.context("./modules", false, /\.static\.js$/);
const module = modulesFiles.keys().reduce((modules, item) => {
  const reg = /^\.\/(.*)\.static\.\w+$/;
  const name = item.replace(reg, "$1");
  const value = modulesFiles(item);
  modules[name] = value.default;
  return modules;
}, {});
console.log(module);

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 })
  });

const router = new createRouter();

router.addRoutes(componentToName(module.constant, nameToComponent));
export function addRouter(route) {
  router.addRoutes(route);
}
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
