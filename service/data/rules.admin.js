module.exports = [
  {
    path: "/admin",
    component: "common_main",
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
        component: "common_index",
        meta: { title: "超级1", icon: "eleme", introduce: "超级1页面" }
      },
      {
        path: "qw",
        name: "qw",
        component: "common_index",
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
          title: "黏着",
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
        meta: {
          title: "权限管理",
          icon: "set-up"
        }
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
