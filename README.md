# Vue 后台内容管理系统

> 本项目是对 [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/) 源码研究的作品，对其中部分组件进行了修改，功能完善度会持续更新。

## 文件目录

``` tree
├─api                接口
├─assets             静态资源
├─components         组件
│  ├─Breadcrumb
│  ├─Hamburger
│  ├─SizeSelect
│  └─User
├─layouts            布局文件
│  ├─components      布局组件
│  │  ├─AppMain
│  │  ├─Navbar
│  │  ├─Settings
│  │  ├─Sidebar
│  │  └─TagsView
│  └─main            布局组-main
├─router             路由
│  └─modules         路由模块
├─store              Vuex
│  └─modules         Vuex模块
├─styles             全局样式和覆盖样式
├─utils              工具函数
└─views              页面
    ├─index          主页
    └─redirect       全局重定向页面
```

## 这个系统的设计思路

> 主要是对自己实际项目的需求，进行思考和修改

### 系统整体

### 权限管理

### Vuex

### Vue-Router

## 改变部分

### 使用了按需引入

该项目相对 `vue-element-admin` 把所有组件全部引入的引入方式，改为了**按需引入**，同时保留了大部分全局配置，减少了打包后的文件体积大小。

### 使用了 less

我个人习惯使用 less ，使用 webpack 内置的[模块化系统](https://webpack.docschina.org/concepts/modules) 同样可以解决 less(variables)-to-js 的问题。

### 增加了全局的虚拟滚动条

参照了 `sidebar` 的滚动条解决方法， 同样使用了 `el-scrollbar` 组件。

### 优化了面包屑

>对面包屑组件进行了修改，主要有两个小优化

1. 当面包屑可以点击的时候，使用内置组件 `router-link` 渲染，可以让用户直接右击再打开一个窗口。  

2. 当子路由的父路由拥有默认 `redirect` 的时候，如果当前页面就是这个重定向指向的路径的时候，就不可以被点击。

### 侧边栏修改

> 主要是两个小修改

1. 使用了 `element-ui` 的内置 Icon，并且修改了相关的组件（后续会考虑把antd@4+的svg图标全部引入）。

2. 当侧边栏收缩的时候，如过子菜单被选择，那么父菜单也会被标识为选中，便于用户在侧边栏被收缩的情况下，快速从侧边栏定位自己选择的位置（多级嵌套，未实现）。
