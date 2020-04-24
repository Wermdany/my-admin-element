const Router = require("koa-router");
const messageController = require("../controller/messageController");
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
  ctx.body = {
    success: true,
    token: 123123123
  };
});
module.exports = router;
