var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
      '/src/index': './src/index.js'
  },
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        include: path.join(__dirname,  'src')
      },{
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
