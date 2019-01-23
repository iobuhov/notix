const webpack = require('webpack');
const merge = require('webpack-merge');
const { paths } = require('../config');
const common = require('./common');
const HtmlPlugin = require('html-webpack-plugin');
// const WebpackMonitor = require('webpack-monitor');
const { HotModuleReplacementPlugin,
        NamedModulesPlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

const HOST = process.env.IP || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const config = {
  target: 'web',
  devtool: 'eval-source-map',
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
      bootstrap: paths.bootstrap,
      common: paths.common,
      consts: paths.consts,
      helpers: paths.helpers,
      kanban: paths.kanban,
      lib: paths.lib,
      main: paths.main,
      sidebar: paths.sidebar,
      utils: paths.utils,
    },
  },
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    hotOnly: true,
    clientLogLevel: 'error',
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false,
      modules: false,
      moduleTrace: false,
    },
  },
  plugins: [
    new HtmlPlugin({ template: './app/index.html' }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    // new DefinePlugin({
    //   When: 'If',
    // }),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
//    new WebpackMonitor({
//      capture: true,
//      launch: true,
//    }),
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
