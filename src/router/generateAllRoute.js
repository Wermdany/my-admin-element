/**
 * 生成，所有的 route 页面
 */

import { OPEN_ROUTE_MODULE_NAME } from "@/namespace";

const RegExp = /\/([a-z]+)\/route\.js$/;

const RouteFiles = require.context("./modules", true, /route\.js$/);

const Route = RouteFiles.keys().reduce((data, item) => {
  const value = RouteFiles(item).default;
  if (OPEN_ROUTE_MODULE_NAME) {
    const parent = item.replace(RegExp, "$1");
  }
  data = data.concat(value);
  return data;
}, []);

export default Route;
