import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@/router/before";
import "@/styles/index.less";
Vue.config.productionTip = false;
import deepCopy from "deepcopy";
import "@/element";
//注入一个深拷贝方法
Vue.prototype.$deepCopy = deepCopy;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
