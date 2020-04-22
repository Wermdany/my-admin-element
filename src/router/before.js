import router from "@/router";
import store from "@/store";
router.beforeEach((to, from, next) => {
  if (Object.keys(store.getters.http).length !== 0) {
    store.dispatch("http/cancelAll", { msg: "切换路由自动取消上个页面的请求" });
    console.log("取消上个页面的请求");
  }
  next();
});
