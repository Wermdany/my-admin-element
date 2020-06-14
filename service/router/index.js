const Router = require("koa-router");
const dataRouter = require("./data");
const router = new Router();
dataRouter(router);
router.get("/", async ctx => {
  ctx.body = "Hello World.";
});

router.get("/message", async ctx => {
  await require("../controller/messageController")(ctx);
});

router.post("/login", async ctx => {
  ctx.body = require("../controller/user/userLogin")(ctx);
});

router.post("/logout", async ctx => {
  ctx.body = {
    code: 0,
    errMsg: "",
    data: {}
  };
});

router.post("/router", async ctx => {
  await require("../controller/user/router")(ctx);
});

router.post("/auth", async ctx => {
  await require("../controller/authority/auth")(ctx);
});

router.post("/user", async ctx => {
  await require("../controller/authority/user")(ctx);
});

module.exports = router;
