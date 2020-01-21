const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const devConfig = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: loader => [require("autoprefixer")()]
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true, // 为所有服务启用gzip压缩
    hot: true,
    // overlay: true, // 在浏览器中显示全屏覆盖
    open: true,
    publicPath: "/",
    host: "localhost",
    port: "1200",
    proxy: {
      // 设置代理
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
};
module.exports = merge(common, devConfig);
