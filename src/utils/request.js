/**
 *  axios 封装
 */
import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { HTTP_HEADER_TOKEN_NAME } from "@/namespace";
const service = axios.create({
  baseURL: process.env.VUE_APP_HTTP_BASE_URL,
  timeout: 5000
});
const CancelToken = axios.CancelToken;
/**
 *请求拦截器
 */
const requestInter = service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers[HTTP_HEADER_TOKEN_NAME] = store.getters.token;
    }
    /**
     *
     */
    config.cancelToken = new CancelToken(cancel => {
      store.dispatch("http/setCancel", { cancel, funName: config.funName });
    });
    return config;
  },
  err => {
    // TODO: 收集错误信息
    return Promise.reject(err);
  }
);

const responseInter = service.interceptors.response.use(
  response => {
    const { data, status } = response;
    store.dispatch("http/response", response.config.funName);
    // TODO: 系统定义 code 处理，比如 token失效
    return data;
  },
  err => {
    // TODO: 网络错误的处理 收集返回错误信息
    return Promise.reject(err);
  }
);
/**
 * 手动清除请求拦截
 */
export function ejectRequestInter() {
  service.interceptors.request.eject(requestInter);
}

/**
 * 手动清除响应拦截
 */
export function ejectResponseInter() {
  service.interceptors.response.eject(responseInter);
}

/**
 * 全局请求函数
 * @param {String} name 业务代码中发情请求的函数名
 * @param {String} url 请求详细地址
 * @param {Object} data 请求参数
 * @param {String} method 请求类型
 * @param {any} urlParams 路径参数
 * @param {Object} options axios其他配置
 */
export default async function ({
  funName = "",
  url = "",
  data = {},
  method = "GET",
  urlParams = "",
  options = {}
}) {
  // TODO: 提供了 axios 所有配置的接口，但是是替换操作，比如会覆盖默认的 headers 造成请求错误
  const config = { ...options, funName };
  config.method = method.toLocaleUpperCase();
  config.url = url;
  urlParams && (config.url += "/" + urlParams);
  config.method == "GET" ? (config.params = data) : (config.data = data);
  return await service(config);
}
