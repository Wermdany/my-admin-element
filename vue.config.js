module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    before: require("./service/index.js")
  },
  configureWebpack: {
    devtool: "cheap-source-map"
    // devtool: "source-map" //断点调试
  }
};
