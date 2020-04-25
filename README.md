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

#### 系统请求

>系统请求必须分为两层:
>网络请求状态码 ，这一层只作为网络层面的请求是否成功，其余请求均为 200  
>后台返回的状态码，取消请求或者对 axios 封装的状态吗应该于后台保持一致
>如果一个请求，发生了错误，如果影响到了自己业务逻辑以外的情况，应该放到全局处理，比如：网络故障、网络错误、Token过期。
>如果这个请求仅仅是在自己业务逻辑中产生的错误，就应该放到当前逻辑中处理。

```json
{
    "code":0,
    "errMsg":"",
    "data":{...}
}
```

### 权限管理

### Vuex

### Vue-Router

## 请求拦截和请求取消

请看：[简书](https://www.jianshu.com/p/88fbd1149fa1)

## 改变部分

### 使用了按需引入

该项目相对 `vue-element-admin` 把所有组件全部引入的引入方式，改为了**按需引入**，同时保留了大部分全局配置，减少了打包后的文件体积大小。

### 使用了 less

我个人习惯使用 less ，使用 webpack 内置的[模块化系统](https://webpack.docschina.org/concepts/modules) 同样可以解决 less(variables)-to-js 的问题。

### 增加了全局的虚拟滚动条

参照了 `sidebar` 的滚动条解决方法， 同样使用了 `el-scrollbar` 组件（可能会造成没必要的性能损耗）。

### 优化了面包屑

>对面包屑组件进行了修改，主要有两个小优化

1. 当面包屑可以点击的时候，使用内置组件 `router-link` 渲染，可以让用户直接右击再打开一个窗口。  

2. 当子路由的父路由拥有默认 `redirect` 的时候，如果当前页面就是这个重定向指向的路径的时候，就不可以被点击。

### 侧边栏修改

> 主要是两个小修改

1. 使用了 `element-ui` 的内置 Icon，并且修改了相关的组件（后续会考虑把antd@4+的svg图标全部引入）。

2. 当侧边栏收缩的时候，如过子菜单被选择，那么父菜单也会被标识为选中，便于用户在侧边栏被收缩的情况下，快速从侧边栏定位自己选择的位置。

## 登录之后的逻辑

1. 输入账号、密码后，登陆成功返回Token、和用户信息，是否保存到本地？
   + 保存得话，使用localStorage，保存到本地。
   + 不保存的话，保存到sessionStorage(刷新就消失)或保存至Vux刷新消失。
  
2. 使用Token去后台请求routes。
3. 把后台请求到route和本地的固定route合并，生成最终的route，挂载到Router。

## 页面刷新

> 页面刷新后，Vuex中的信息会消失。所以需要再次去请求，用户路由表信息不进行本地缓存。

1. 如果用户进行了保存本地，就拿Token，去再次请求，执行登陆逻辑 `2-3`。
2. 如果用户没有进行保存本地信息，就让用户再次登录。
