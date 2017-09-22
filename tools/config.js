const path = require('path');
const root = path.resolve('..');
const join = path.join.bind(null, root);

module.exports = {
  paths: {
    root,
    app: join('app'),
    'app.components': join('app', 'components'),
    lib: join('lib'),
    'lib.components': join('lib', 'components'),
    dist: join('dist'),
    server: join('server'),
  },
};
