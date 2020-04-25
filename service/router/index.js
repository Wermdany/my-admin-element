const Router = require("koa-router");
const messageController = require("../controller/messageController");
const userLogin = require("../controller/user/userLogin");
const dataRouter = require("./data");

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
module.exports = router;
