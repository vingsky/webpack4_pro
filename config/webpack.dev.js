const path = require("path");
const merge = require("webpack-merge");
const common = require('./webpack.common.js');

const devConfig = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist")
  },
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
  }
};
module.exports = merge(common, devConfig)
