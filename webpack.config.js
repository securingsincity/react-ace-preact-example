var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      alias: {
          'react': 'preact-compat',
          'react-dom': 'preact-compat',
          // Not necessary unless you consume a module using `createClass`
          'create-react-class': 'preact-compat/lib/create-react-class'
      }
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel-loader' }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: ['./public'],
  },
};
