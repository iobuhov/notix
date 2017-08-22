const webpack = require('webpack');
const paths = require('./paths');

const { DefinePlugin, NoEmitOnErrorsPlugin } = webpack;
// const { UglifyJsPlugin } = webpack.optimize;

module.exports = {
  conf: {
    output: {
      path: paths.DIST,
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
    },
    plugins: [
      new NoEmitOnErrorsPlugin(),
      new DefinePlugin({
        RDE_COMPOSE: JSON.stringify('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'),
        PRE_ST: JSON.stringify('__PRELOADED_STATE__'),
      }),
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
