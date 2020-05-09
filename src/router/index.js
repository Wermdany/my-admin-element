import Vue from "vue";
import Router from "vue-router";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
import heads from "@/router/modules/common/head.route";
import unLoginTails from "@/router/modules/common/unLoginTail.route";
import store from "@/store";
import deepCopy from "deepcopy";
Vue.use(Router);
const head = deepCopy(heads);
const unLoginTail = deepCopy(unLoginTails);
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
