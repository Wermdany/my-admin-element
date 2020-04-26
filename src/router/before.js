import router from "@/router";
import store from "@/store";
import Nprogress from "nprogress";
import { WHITE_PAGES_LIST } from "@/namespace";
Nprogress.configure({
  showSpinner: false
});
router.beforeEach((to, from, next) => {
  if (to.name !== "redirect" && to.name !== "redirect-all") {
    // console.log(to.name == "redirect" || to.name == "redirect-all");
    Nprogress.start();
    store.dispatch("app/togglePageLoading", true);
  }
  if (Object.keys(store.getters.http).length !== 0) {
    store.dispatch("http/cancelAll", {
      msg: "切换路由，自动取消上个页面的请求"
    });
  }
  const token = store.getters.token;
  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
      Nprogress.done();
    } else {
      const hasRoles =
        store.getters.addRoutes && store.getters.addRoutes.length > 0;
      if (hasRoles) {
        next();
        Nprogress.done();
      } else {
        try {
          /**
           * 1.去发起请求获取路由
           * 2.如果token失败，直接要求重新登陆
           */
          store
            .dispatch("permission/generateRoutes")
            .then(() => {
              next({ ...to, replace: true }).catch(() => { });
            })
            .catch(err => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      }
    }
  } else {
    if (WHITE_PAGES_LIST.includes(to.path)) {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
      Nprogress.done();
    }
  }
});
router.afterEach(to => {
  if (to.name !== "redirect" && to.name !== "redirect-all") {
    Nprogress.done();
    setTimeout(() => {
      store.dispatch("app/togglePageLoading", false);
    }, 1000);
  }
});
