const tail = [
  // 在未登录的情况下，所有未匹配的页面都重定向到登陆页面
  {
    path: "*",
    redirect: "/login",
    hidden: true
  }
];
export default tail;
