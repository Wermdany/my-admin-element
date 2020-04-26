/**
 *  axios 封装
 */
import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { HTTP_HEADER_TOKEN_NAME, REPEAT_REQUEST_CODE } from "@/namespace";
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
    const http = store.getters.http;
    // TODO: 分页查询情况下，需要分别判断 url和 data
    if (http.hasOwnProperty(config.funName)) {
      return Promise.reject({
        code: REPEAT_REQUEST_CODE,
        message: "不要重复提交",
        config,
        __CANCEL__: true //cancel 会有这个属性，阻止重复提交和主动取消请求
      });
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
    //取消请求-回调，清除痕迹
    store.dispatch("http/response", response.config.funName);
    const { data } = response;
    // TODO: 系统定义 code 处理，比如 token失效
    return data;
  },
  err => {
    // 300 > validateStatus >= 200 、cancel
    const ErrJSon = {
      errMsg: err.message,
      name: err.name,
      config: err.config,
      stack: err.stack
    };
    //如果请求失败，同样清除信息，注意：如果同时发起多个请求，第一个失败可能会阻塞后面一个请求，未验证
    if (err.__CANCEL__ === undefined) {
      // console.log(err.__CANCEL__); // 主动取消请求会到reject,必须要再次取消
      // console.log(ErrJSon.config.funName);
      store.dispatch("http/response", ErrJSon.config.funName);
    }
    return Promise.reject(ErrJSon);
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
