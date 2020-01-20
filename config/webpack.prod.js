const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// const HtmlWebpackPulgin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const prodConfig = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        // 处理图片必须安装的loader！！！
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          // "file-loader",
          { // url-loader 功能类似于 file-loader，可以将 url 地址对应的文件，打包成 base64 的 DataURL，提高访问效率
            loader: "url-loader", // 注意不能和image-webpack-loader公同使用
            // 根据图片大小，把图片转换成 base64
            options: { limit: 10000 }
          },
          // {
          //   loader: "image-webpack-loader",
          //   options: {
          //     mozjpeg: { progressive: true, quality: 65 },
          //     optipng: { enabled: false },
          //     pngquant: { quality: "65-90", speed: 4 },
          //     gifsicle: { interlaced: false },
          //     webp: { quality: 75 }
          //   }
          // }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new OptimizeCssAssetsPlugin(),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPulgin({
    //   title: "leo study!",
    //   filename: "main.html",
    //   template: "./src/index.html",
    //   minify: {
    //     // collapseWhitespace: true,
    //     removeComments: true,
    //     removeAttributeQuotes: true
    //   }
    // })
  ]
};
module.exports = merge(common, prodConfig);
