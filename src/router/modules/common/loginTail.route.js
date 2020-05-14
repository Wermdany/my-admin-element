const tail = [
  {
    path: "/404",
    component: "page404",
    hidden: true,
    name: "page404",
    meta: {
      title: "页面404错误"
    }
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
    name: "intercept",
    meta: {
      title: "全局路由拦截"
    }
  }
];
export default tail;
