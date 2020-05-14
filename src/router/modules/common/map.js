/**
 * 默认全局公用页面名字映射
 */
export default {
  // 主题页面布局
  main: {
    component: () => import("@/layouts/main"),
    introduce: "系统整体布局组件"
  },
  redirect: {
    component: () => import("@/views/redirect"),
    introduce: "系统整体重定向辅助页面"
  },
  index: {
    component: () => import("@/views/index"),
    introduce: "系统整体测试主页"
  },
  login: {
    component: () => import("@/views/login"),
    introduce: "系统整体登陆页面"
  },
  page404: {
    component: () => import("@/views/error-page/404"),
    introduce: "系统整体404错误页面"
  }
};
