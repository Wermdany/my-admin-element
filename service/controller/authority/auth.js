const admin = require("../../data/rules.admin");
const edit = require("../../data/rules.edit");
const Mock = require("mockjs");
module.exports = function(ctx) {
  let res = [
    {
      name: "全部权限",
      detailed: "全部权限详细介绍",
      route: admin,
      time: Mock.Random.datetime()
    },
    {
      name: "部分权限",
      detailed: "部分权限详细介绍",
      route: edit,
      time: Mock.Random.datetime()
    }
  ];
  ctx.body = {
    code: 0,
    errMsg: "",
    data: res
  };
};
