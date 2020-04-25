import router from "@/router";
import store from "@/store";
import Nprogress from "nprogress";
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
  next();
});
router.afterEach(to => {
  if (to.name !== "redirect" && to.name !== "redirect-all") {
    Nprogress.done();
    setTimeout(() => {
      store.dispatch("app/togglePageLoading", false);
    }, 1000);
  }
});
