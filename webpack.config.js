const path = require('path');

module.exports = {
  context: __dirname,
  entry: './entry.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
  },
  devtool: 'source-map'
};