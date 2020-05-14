/**
 * 生成，所有的 route 页面
 */

import { OPEN_ROUTE_MODULE_NAME } from "@/namespace";
import { formatComponentName } from "@/utils/format";
const RegExp = /\.\/([a-z]+)[\\/a-zA-Z\\.]*\.js$/;

const RouteFiles = require.context("./modules", true, /route\.js$/);

const Route = RouteFiles.keys().reduce((data, item) => {
  const parent = item.replace(RegExp, "$1");
  const value = RouteFiles(item).default;
  if (OPEN_ROUTE_MODULE_NAME) {
    var ModuleValue = formatComponentName(value, parent);
  }
  if (data.hasOwnProperty(parent)) {
    data[parent] = data[parent].concat(ModuleValue || value);
  } else {
    data[parent] = ModuleValue || value;
  }
  return data;
}, {});
export default Route;
