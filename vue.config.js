module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    before: require("./service/index.js")
  }
};
