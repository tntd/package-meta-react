const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // 开发模式
  entry: path.resolve(__dirname, "../example/index.tsx"), // 开发环境入口文件
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    publicPath: "/",
    library: "TntReactComponent",
    libraryTarget: "umd",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../example"),
    },
    hot: true, // 热更新
    open: true, // 自动打开浏览器
  },
});
