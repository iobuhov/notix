const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./common');
const AssetsPlugin = require('assets-webpack-plugin');

const { HotModuleReplacementPlugin,
        NamedModulesPlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;
const host = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 3001;

const mainEntry = [
  'react-hot-loader/patch',
  paths.CLIENT,
];

const vendorBundleEntries = [
  // 'babel-polyfill',
  // 'es6-promise',
  // 'history',
  // 'prop-types',
  'react',
  'react-dom',
  // 'react-redux',
  // 'redux',
  // 'redux-first-router',
  // 'redux-first-router-link',
  // 'whatwg-fetch',
];

const client = {
  target: 'web',
  devtool: 'eval',
  entry: {
    client: mainEntry,
    vendor: vendorBundleEntries,
  },
  resolve: {
    alias: {
      server: paths.SERVER,
    },
    modules: [paths.CLIENT],
  },
  devServer: {
    host,
    headers: {
      'Access-Control-Allow-Origin': '*', // enable CORS
    },
    port,
    historyApiFallback: true,
    hotOnly: true,
    noInfo: true,
    clientLogLevel: 'error',
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new AssetsPlugin({
      path: paths.DIST,
      filename: 'assets-paths.json',
    }),
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
  common.conf,
  client
);
