const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common.js");

// 读取 package.json
const packageJson = require("../package.json");

module.exports = merge(common, {
  mode: "production",
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    publicPath: "./",
    library: packageJson.name, // 使用 package.json 中的 name 字段
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this", // 兼容浏览器和 Node.js
    libraryExport: "default", // 导出默认内容
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
  plugins: [new CleanWebpackPlugin()],
});
