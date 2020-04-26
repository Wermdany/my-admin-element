import http from "@/utils/request";
/**
 * 用户登录
 * @export
 * @param {Object} { data = {} } 账号和密码
 * @returns
 */
export function userLogin({ data = {} }) {
  return http({ funName: "userLogin", method: "post", url: "login", data });
}
export function userLogout() {
  return http({ funName: "userLogout", method: "post", url: "logout" });
}
export function userRules() {
  return http({ funName: "userRules", method: "post", url: "router" });
}
