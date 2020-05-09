const head = [
  {
    path: "/redirect-all/:path(.*)",
    component: "redirect",
    hidden: true,
    name: "redirect-all"
  },
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
    path: "/login",
    component: "login",
    hidden: true,
    meta: { title: "用户登录" }
  }
];
Object.freeze(head[0].children);
export default head;