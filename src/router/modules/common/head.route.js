const head = [
  {
    path: "/redirect-all/:path(.*)",
    component: "redirect",
    hidden: true,
    name: "redirectAll",
    meta: {
      title: "全局重定向页面"
    }
  },
  {
    path: "/redirect",
    component: "main",
    name: "redirectParent",
    hidden: true,
    meta: {
      title: "系统重定向页面"
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: "redirect",
        meta: {
          title: "系统重定向页面"
        }
      }
    ]
  },
  {
    path: "/login",
    component: "login",
    hidden: true,
    name: "login",
    meta: { title: "用户登录", cache: false }
  }
];
export default head;
