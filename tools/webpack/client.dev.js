const webpack = require('webpack');
const merge = require('webpack-merge');
const { paths } = require('../config');
const common = require('./common');
const { HotModuleReplacementPlugin,
        NamedModulesPlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

const HOST = process.env.IP || '0.0.0.0';
const PORT = process.env.PORT || 3001;

const config = {
  target: 'web',
  devtool: 'eval',
  entry: {
    app: [
      'react-hot-loader/patch',
      paths.app,
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    alias: {
      'app/components': paths['app.components'],
      'lib/components': paths['lib.components'],
    },
  },
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    hotOnly: true,
    noInfo: true,
    clientLogLevel: 'error',
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],
  output: {
    publicPath: '/',
  },
};

const strategy = { ...common.strategy };

module.exports = merge.strategy(strategy)(
  common.config,
  config
);