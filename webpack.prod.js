const { resolve } = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    filename: 'bundle.[chunghash].js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
});
