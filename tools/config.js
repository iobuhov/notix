const path = require('path');
const root = path.resolve(__dirname, '..');
const join = path.join.bind(null, root);

module.exports = {
  paths: {
    app: join('app'),
    common: join('app', 'common'),
    dist: join('dist'),
    helpers: join('app', 'helpers'),
    kanban: join('app', 'kanban'),
    lib: join('lib'),
    root,
    server: join('server'),
    utils: join('utils'),
  },
};
