const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const common = require('./common');
const StartServerPlugin = require('start-server-webpack-plugin');

const { NamedModulesPlugin,
        HotModuleReplacementPlugin } = webpack;

const entry = [
  'webpack/hot/poll?1000',
  paths.SERVER,
];

const server = {
  target: 'node',
  watch: true,
  entry,
  resolve: {
    alias: {
      server: paths.SERVER,
    },
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new StartServerPlugin(),
  ],
};

const strategy = { ...common.strategy };

module.exports = merge.strategy(strategy)(
  common.conf,
  server
);
