import Vue from "vue";
import Router from "vue-router";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
import heads from "@/router/modules/common/head.route";
import { OPEN_ROUTE_MODULE_NAME } from "@/namespace";
import { formatComponentName } from "@/utils/format";
import store from "@/store";
import deepCopy from "deepcopy";
Vue.use(Router);

let head = deepCopy(heads);
if (OPEN_ROUTE_MODULE_NAME) {
  head = formatComponentName(head, "common");
}
//未匹配到页面全部重定向至登陆页面
const unLoginTail = {
  path: "*",
  redirect: "/login",
  hidden: true
};

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: []
  });

const router = new createRouter();
if (!store.getters.token) {
  router.addRoutes(componentToName(head.concat(unLoginTail), nameToComponent));
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
