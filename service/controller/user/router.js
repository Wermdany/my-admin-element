const admin = require("../../data/rules.admin");
const edit = require("../../data/rules.edit");
module.exports = function (ctx) {
  const token = ctx.header["auth-token"];
  let res = {
    code: 0,
    errMsg: "",
    data: {}
  };
  if (token == 111111) {
    res.data = admin;
  } else if (token == 222222) {
    res.data = edit;
  } else {
    res.code = 4002;
    res.errMsg = "该用户尚未分配权限";
  }
  ctx.body = res;
};
