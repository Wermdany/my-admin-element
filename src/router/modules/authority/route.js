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
        redirect: "/authority/auth/list",
        meta: {
          title: "权限管理",
          icon: "set-up"
        },
        children: [
          {
            path: "list",
            name: "authorityAuthList",
            component: "authList",
            meta: {
              title: "权限列表",
              icon: "set-up"
            }
          },
          {
            path: "add",
            name: "authorityAuthAdd",
            hidden: true,
            component: "authAdd",
            meta: {
              title: "权限新增",
              icon: "set-up"
            }
          },
          {
            path: "edit/:id(\\d+)",
            name: "authorityAuthEdit",
            hidden: true,
            component: "authEdit",
            meta: {
              title: "权限编辑",
              icon: "set-up"
            }
          }
        ]
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
