module.exports = {
  path: "/edit",
  component: "main",
  redirect: "/edit/dfg",
  meta: { title: "管理员", icon: "user" },
  children: [
    {
      path: "dfg",
      name: "dfg",
      component: "index",
      meta: { title: "管理员1", icon: "eleme" }
    },
    {
      path: "qw",
      name: "qw",
      component: "index",
      meta: { title: "管理员2", icon: "eleme" }
    }
  ]
};
