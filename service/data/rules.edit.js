module.exports = {
  path: "/edit",
  component: "common_main",
  redirect: "/edit/dfg",
  meta: { title: "管理员", icon: "user" },
  children: [
    {
      path: "dfg",
      name: "dfg",
      component: "common_index",
      meta: { title: "管理员1", icon: "eleme" }
    },
    {
      path: "qw",
      name: "qw",
      component: "common_index",
      meta: { title: "管理员2", icon: "eleme" }
    }
  ]
};
