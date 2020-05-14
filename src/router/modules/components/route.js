const components = [
  {
    path: "/components",
    name: "components",
    redirect: "/components/sticky",
    component: "main",
    meta: {
      icon: "open",
      title: "内置组件"
    },
    children: [
      {
        path: "sticky",
        name: "sticky",
        component: "sticky",
        meta: {
          icon: "",
          title: "黏着组件"
        }
      }
    ]
  }
];

export default components;
