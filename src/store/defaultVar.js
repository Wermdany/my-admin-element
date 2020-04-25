/**
 * 获取本地缓存的信息，如果不存在，就返回默认值
 */
import {
  UI_SIZE,
  SIDEBAR_LOGO,
  FIXED_HEADER,
  OPEN_TAGS_VIEW,
  IS_COLLAPSE,
  USER_INFO
} from "@/namespace";
import Storage from "@/utils/storage";

const defaultVar = {
  [UI_SIZE]: "medium",
  [SIDEBAR_LOGO]: true,
  [FIXED_HEADER]: true,
  [OPEN_TAGS_VIEW]: true,
  [IS_COLLAPSE]: false,
  [USER_INFO]: { token: "", name: "", avatar: "", introduction: "" }
};
export default defaultVar;

export function getStorageNullToDefault(namespace) {
  if (defaultVar.hasOwnProperty(namespace)) {
    const res = Storage.get(namespace);
    if (res === null) {
      return defaultVar[namespace];
    } else {
      return res;
    }
  } else {
    throw new Error(`是否缺少设置已经使用缓存变量 ${namespace} 的默认值`);
  }
}
