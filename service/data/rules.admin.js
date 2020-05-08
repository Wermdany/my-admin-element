module.exports = {
  path: "/admin",
  component: "main",
  redirect: "/admin/dfg",
  meta: { title: "超级管理员", icon: "user" },
  children: [
    {
      path: "dfg",
      name: "dfg",
      component: "index",
      meta: { title: "超级1", icon: "eleme", detail: "超级1页面" }
    },
    {
      path: "qw",
      name: "qw",
      component: "index",
      meta: {
        title: "超级2",
        icon: "eleme",
        detail: "超级2页面"
      }
    }
  ]
};
