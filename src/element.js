/**
 * element-ui 注入 vue 方法
 *
 */
import Vue from "vue";
import { getStorageNullToDefault } from "@/utils/defaultVar";
import { Message, MessageBox, Notification } from "element-ui";
import { UI_SIZE } from "@/namespace";
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$ELEMENT = { size: getStorageNullToDefault(UI_SIZE) };
