const path = require('path');
const root = path.resolve(__dirname, '..');
const join = path.join.bind(null, root);

module.exports = {
  paths: {
    root,
    app: join('app'),
    lib: join('lib'),
    dist: join('dist'),
    server: join('server'),
    utils: join('utils'),
  },
};
