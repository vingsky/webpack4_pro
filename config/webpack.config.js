const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, '../dist'),
  }
}