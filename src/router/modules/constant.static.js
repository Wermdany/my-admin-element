const constent = [
  {
    path: "/redirect",
    component: "main",
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: "redirect"
      }
    ]
  },
  {
    path: "/redirect-all/:path(.*)",
    component: "redirect",
    hidden: true,
    name: "redirect-all"
  },
  {
    path: "/",
    component: "main",
    redirect: "/index",
    meta: { title: "主题", icon: "delete" },
    children: [
      {
        path: "index",
        component: "index",
        name: "index",
        affix: true,
        meta: { title: "布局", icon: "delete" }
      },
      {
        path: "ad",
        component: "index",
        name: "index1",
        affix: true,
        meta: { title: "布局1", icon: "delete" }
      }
    ]
  },
  {
    path: "/login",
    component: "login",
    hidden: true,
    meta: { title: "用户登录" }
  }
];
export default constent;
