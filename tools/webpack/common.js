const webpack = require('webpack');
const { paths } = require('../config');
const { NoEmitOnErrorsPlugin } = webpack;

module.exports = {
  config: {
    output: {
      path: paths.dist,
      filename: '[name].bundle.js',
    },
    resolve: {
      modules: ['node_modules'],
    },
    plugins: [
      new NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
  strategy: {
    'resolve.modules': 'prepend',
  },
};
