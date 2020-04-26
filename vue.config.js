module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    before:
      process.env.ENV === "development" ? require("./service/index.js") : null
  },
  configureWebpack: {
    // devtool: "cheap-source-map"
    devtool: "source-map" //断点调试
  }
};
