module.exports = [
  {
    path: "/components",
    name: "components",
    redirect: "/components/sticky",
    alwaysShow: true,
    component: "common_main",
    meta: {
      icon: "open",
      title: "内置组件",
      introduce: "系统内置组件"
    },
    children: [
      {
        path: "sticky",
        name: "componentsSticky",
        component: "components_sticky",
        meta: {
          icon: "",
          title: "吸附组件",
          introduce: "页面滚动，固定到一定位置"
        }
      }
    ]
  },
  {
    path: "/form",
    name: "form",
    redirect: "/form/base-form",
    component: "common_main",
    meta: {
      icon: "document",
      title: "表单"
    },
    children: [
      {
        path: "base-form",
        name: "formBaseForm",
        component: "form_baseForm",
        meta: {
          icon: "",
          title: "基础表单"
        }
      },
      {
        path: "step-form",
        name: "formStepForm",
        component: "form_stepForm",
        meta: {
          icon: "",
          title: "分步表单",
          introduce:
            "将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
        }
      }
    ]
  },
  {
    path: "/authority",
    name: "authority",
    component: "common_main",
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
        component: "authority_user",
        meta: {
          title: "用户管理",
          icon: "user-solid"
        }
      },
      {
        path: "auth",
        name: "authorityAuth",
        component: "authority_auth",
        redirect: "/authority/auth/list",
        meta: {
          title: "权限管理",
          icon: "set-up"
        },
        children: [
          {
            path: "list",
            name: "authorityAuthList",
            component: "authority_authList",
            meta: {
              title: "权限列表",
              icon: "set-up",
              noCache: true
            }
          },
          {
            path: "add",
            name: "authorityAuthAdd",
            hidden: true,
            component: "authority_authAdd",
            meta: {
              title: "权限新增",
              icon: "set-up"
            }
          },
          {
            path: "edit/:id(\\d+)",
            name: "authorityAuthEdit",
            hidden: true,
            component: "authority_authEdit",
            meta: {
              title: "权限编辑",
              icon: "set-up"
            }
          }
        ]
      },
      {
        path: "route",
        name: "authorityRoute",
        component: "authority_route",
        meta: {
          title: "路由管理",
          icon: "tickets"
        }
      }
    ]
  },
  {
    path: "https://www.baidu.com/",
    meta: {
      title: "外部链接-百度",
      icon: "tickets",
      introduce: "外部链接-百度测试"
    }
  }
];
