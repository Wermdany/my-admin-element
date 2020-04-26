module.exports = function (ctx) {
  const body = ctx.request.body;
  let res = {
    code: 0,
    errMsg: "",
    data: {}
  };
  if (body.userName === "admin" && body.passWord == "123456") {
    res.data.name = "超级管理员";
    res.data.token = 111111;
    res.data.avatar =
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/40/h/40";
    res.data.introduction = "我是超级管理员";
    return res;
  } else if (body.userName === "edit" && body.passWord == "123456") {
    res.data.name = "管理员";
    res.data.token = 222222;
    res.data.avatar =
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/40/h/40";
    res.data.introduction = "我是管理员";
    return res;
  } else {
    res.code = 4001;
    res.errMsg = "账号或密码错误";
    return res;
  }
};
