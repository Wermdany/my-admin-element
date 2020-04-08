const constent = [
  {
    path: "/redirect/:path(.*)",
    component: "redirect",
    hidden: true,
    name: "redirect"
  },
  {
    path: "/",
    component: "main",
    redirect: "/index",
    children: [
      {
        path: "index",
        component: "index",
        name: "index",
        meta: { title: "布局", icon: "delete" }
      }
    ]
  },
  {
    path: "/asd",
    component: "main",
    redirect: "/asd/dfg",
    meta: { title: "综合", icon: "user" },
    children: [
      {
        path: "dfg",
        name: "dfg",
        component: "index",
        meta: { title: "测试", icon: "eleme" },
        redirect: "/asd/dfg/dfg",
        children: [
          {
            path: "dfg",
            name: "dfg",
            component: "index",
            meta: { title: "测试", icon: "eleme" }
          },
          {
            path: "dfga",
            name: "dfga",
            component: "index",
            meta: { title: "测试", icon: "eleme" }
          }
        ]
      },
      {
        path: "qw",
        name: "qw",
        component: "index",
        meta: { title: "数据", icon: "eleme" }
      }
    ]
  }
];
export default constent;
