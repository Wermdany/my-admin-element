import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;
/**
 * 注入原型
 */
Vue.prototype.$ELEMENT = store.getters.getConfig;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
