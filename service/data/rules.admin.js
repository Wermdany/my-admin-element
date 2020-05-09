module.exports = [
  {
    path: "/admin",
    component: "main",
    redirect: "/admin/dfg",
    meta: {
      title: "超级管理员",
      icon: "user",
      introduce: "管理员"
    },
    children: [
      {
        path: "dfg",
        name: "dfg",
        component: "index",
        meta: { title: "超级1", icon: "eleme", introduce: "超级1页面" }
      },
      {
        path: "qw",
        name: "qw",
        component: "index",
        meta: {
          title: "超级2",
          icon: "eleme",
          introduce: "超级2页面"
        }
      }
    ]
  },
  {
    path: "/components",
    name: "components",
    redirect: "/components/sticky",
    alwaysShow: true,
    component: "main",
    meta: {
      icon: "open",
      title: "内置组件",
      introduce: "系统内置组件"
    },
    children: [
      {
        path: "sticky",
        name: "sticky",
        component: "sticky",
        meta: {
          icon: "",
          title: "黏着",
          introduce: "页面滚动，固定到一定位置"
        }
      }
    ]
  }
];
