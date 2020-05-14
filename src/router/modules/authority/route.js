const authority = [
  {
    path: "/authority",
    name: "authority",
    component: "main",
    alwaysShow: true,
    redirect: "/authority/user",
    meta: {
      introduce: "系统权限管理",
      icon: "s-tools",
      title: "权限管理"
    },
    children: [
      {
        path: "user",
        name: "authorityUser",
        component: "user",
        meta: {
          title: "用户管理",
          icon: "user-solid"
        }
      },
      {
        path: "auth",
        name: "authorityAuth",
        component: "auth",
        meta: {
          title: "权限管理",
          icon: "set-up"
        }
      },
      {
        path: "route",
        name: "authorityAuth",
        component: "route",
        meta: {
          title: "路由管理",
          icon: "tickets"
        }
      }
    ]
  }
];

export default authority;
