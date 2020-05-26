export default {
  user: {
    component: () => import("@/views/authority/user"),
    introduce: "用户管理，新增用户、修改用户信息、分配用户权限等等"
  },
  route: {
    component: () => import("@/views/authority/route"),
    introduce: "当前系统所有路由表设置"
  },
  auth: {
    component: () => import("@/views/authority/auth"),
    introduce: "权限组设置"
  },
  authList: {
    component: () => import("@/views/authority/auth/list"),
    introduce: "权限组列表"
  },
  authAdd: {
    component: () => import("@/views/authority/auth/add"),
    introduce: "权限组新增"
  },
  authEdit: {
    component: () => import("@/views/authority/auth/edit"),
    introduce: "权限组修改"
  }
};
