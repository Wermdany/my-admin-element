const Mock = require("mockjs");
const Random = Mock.Random;
module.exports = function(ctx) {
  ctx.body = {
    code: 0,
    errMsg: "",
    data: [
      {
        name: "超级管理员",
        userName: "admin",
        passWord: "123465",
        auth: "全部权限",
        time: Random.datetime()
      },
      {
        name: "管理员",
        userName: "edit",
        passWord: "123465",
        auth: "部分权限",
        time: Random.datetime()
      }
    ]
  };
};
