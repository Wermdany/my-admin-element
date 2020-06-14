const dashboard = [
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/console",
    component: "main",
    alwaysShow: true,
    meta: {
      icon: "s-data",
      title: "仪表盘"
    },
    children: [
      {
        path: "console",
        name: "dashboardConsole",
        component: "console",
        meta: {
          icon: "help",
          title: "主控台"
        }
      }
    ]
  }
];

export default dashboard;
