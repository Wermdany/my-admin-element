/**
 * 载入所有的 name to components
 */
import { OPEN_ROUTE_MODULE_NAME } from "@/namespace";
// 获取目录名的正则 ./components/map.js => components
const RegExp = /\.\/([a-z]+)\/map\.js$/;

//读取所有的 map.js 文件
const MapFiles = require.context("./modules", true, /map\.js$/);
const MapFilesData = MapFiles.keys().reduce((data, item) => {
  const value = MapFiles(item).default;
  // 开启模块化组件命名比如组件名index:  index => [module]_index
  if (OPEN_ROUTE_MODULE_NAME) {
    const parentName = item.replace(RegExp, "$1");
    const ModuleValue = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        ModuleValue[`${parentName}_${key}`] = value[key];
      }
    }
    Object.assign(data, ModuleValue);
    return data;
  }

  Object.assign(data, value);
  return data;
}, {});
console.log(MapFilesData);
export default MapFilesData;
