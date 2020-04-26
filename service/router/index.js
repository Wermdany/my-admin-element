const Router = require("koa-router");
const messageController = require("../controller/messageController");
const userLogin = require("../controller/user/userLogin");
const dataRouter = require("./data");
const route = require("../controller/user/router");
const router = new Router();
dataRouter(router);
router.get("/", async ctx => {
  ctx.body = "Hello World.";
});

router.get("/message", async ctx => {
  await messageController(ctx);
});

router.post("/login", async ctx => {
  ctx.body = userLogin(ctx);
});
router.post("/logout", async ctx => {
  ctx.body = {
    code: 0,
    errMsg: "",
    data: {}
  };
});
router.post("/router", async ctx => {
  await route(ctx);
});
module.exports = router;
