const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPulgin({
      template: './src/index.html',
    }),
  ],
}