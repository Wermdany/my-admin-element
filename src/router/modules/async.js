const async = {
  path: "/asd",
  component: "main",
  redirect: "/asd/dfg",
  meta: { title: "综合", icon: "user" },
  children: [
    {
      path: "dfg",
      name: "dfg",
      component: "index",
      meta: { title: "测试", icon: "eleme" },
      redirect: "/asd/dfg/dfg",
      children: [
        {
          path: "dfg",
          name: "dfge",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga",
          name: "dfga",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga1",
          name: "dfga1",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga2",
          name: "dfga3",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga4",
          name: "dfga4",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga5",
          name: "dfga5",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga6",
          name: "dfga6",
          component: "index",
          meta: { title: "测试", icon: "eleme" },
          children: [
            {
              path: "dfga711",
              name: "dfga711",
              component: "index",
              meta: { title: "测试", icon: "eleme" }
            },
            {
              path: "dfga7111",
              name: "dfga7112",
              component: "index",
              meta: { title: "测试", icon: "eleme" }
            }
          ]
        },
        {
          path: "dfga7",
          name: "dfga7",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga8",
          name: "dfga8",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga9",
          name: "dfga9",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        },
        {
          path: "dfga0",
          name: "dfga0",
          component: "index",
          meta: { title: "测试", icon: "eleme" }
        }
      ]
    },
    {
      path: "qw",
      name: "qw",
      component: "index",
      meta: { title: "数据", icon: "eleme" }
    }
  ]
};

export default async;
