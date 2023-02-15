const Koa = require("koa");
const router = require("./router/index");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
app.use(
  cors({
    origin: function() {
      return "*";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept", "auth-token"]
  })
);
app.use(router.routes());

app.listen(8000);

console.log("server is start at http://localhost:8000");

module.exports = () => app;
