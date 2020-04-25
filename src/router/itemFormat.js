export default {
  //*页面路径
  path: "",
  //*应用组件或者布局组件，默认为主布局组件，主要是可能有不同的页面风格
  component: "Main",
  //是否在侧边栏显示
  hidden: false,
  //*重定向 为： noRedirect 不可点击 , 如果一个父路由有多个子路由，强烈建议此处指向默认的子路由
  redirect: "",
  //是否始终显示根路由，默认渲染的时候，如果一个父路由下只有一个子路由就会只渲染子路由，当这个为true的时候，会始终渲染父路由 + 子路由 的嵌套关系
  alwaysShow: true,
  //*路由的名字
  name: "",
  // *路由元数据
  meta: {
    // 在侧边栏和面包导航的页面名字
    title: "",
    // icon,使用 element内置font-icon，只需要填写名字，后续可能会拓展第三方或者svg-icon
    icon: "",
    // 是否缓存页面
    cache: true,
    // 如果设置为false，则不会在breadcrumb面包屑中显示
    breadcrumb: true,
    affix: false
  },
  // *
  children: []
};
