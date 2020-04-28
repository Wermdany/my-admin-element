import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@/router/before";
import "@/styles/index.less";
Vue.config.productionTip = false;
import { Message } from "element-ui";
import { UI_SIZE } from "@/namespace";
import { getStorageNullToDefault } from "@/utils/defaultVar";
Vue.prototype.$message = Message;
Vue.prototype.$ELEMENT = { size: getStorageNullToDefault(UI_SIZE) };
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
