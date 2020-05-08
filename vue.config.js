const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  // 最新的 fuse.js esm 使用了高级语法，需要再次babel转义
  transpileDependencies: ["fuse.js"],
  devServer: {
    before:
      process.env.ENV === "development" ? require("./service/index.js") : null
  },
  configureWebpack: {
    // devtool: "cheap-source-map"
    devtool: "source-map" //断点调试
  },
  chainWebpack(c) {
    c.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial"
        },
        elementUI: {
          name: "chunk-elementUI",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
        commons: {
          name: "chunk-commons",
          test: resolve("src/components"),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    });
  }
};
