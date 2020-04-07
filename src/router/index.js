import Vue from "vue";
import Router from "vue-router";
import constantRouter from "./modules/constant";
import nameToComponent from "./nameToComponent";
import { componentToName } from "@/utils/format";
Vue.use(Router);

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 })
  });

const router = new createRouter();

router.addRoutes(componentToName(constantRouter, nameToComponent));
export function addRouter(route) {
  router.addRoutes(route);
}
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
