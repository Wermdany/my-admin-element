import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
Vue.use(Vuex);

// 引入modules下的所有文件
const modulesFiles = require.context("./modules", false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, path) => {
  // ./app.js => app
  const name = path.replace(/^\.\/(.*)\.\w+$/, "$1");
  // 如果文件是空的则，下面这句取不出来结果
  const value = modulesFiles(path);
  modules[name] = value.default;
  return modules;
}, {});
const store = new Vuex.Store({
  modules,
  getters
});
export default store;
