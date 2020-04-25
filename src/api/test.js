import http from "@/utils/request";
export function test({ data = {}, urlParams, options } = {}) {
  // 为了实现在一个请求任务中按需求的指定向取消请求，所以需要在这个里面传入本方法的名字，arguments.callee.name 在严格模式下不允许被调用，同时打包后的代码总是在严格模式下运行的
  return http({ funName: "test", url: "data1", data, urlParams, options });
}
export function testOne({ data = {}, urlParams, options } = {}) {
  return http({ funName: "testOne", url: "message", data, urlParams, options });
}
