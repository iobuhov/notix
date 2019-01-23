const path = require('path');
const root = path.resolve(__dirname, '..');
const join = path.join.bind(null, root);

module.exports = {
  paths: {
    app: join('app'),
    bootstrap: join('app', 'bootstrap'),
    common: join('app', 'common'),
    consts: join('app', 'consts'),
    dist: join('dist'),
    helpers: join('app', 'helpers'),
    kanban: join('app', 'kanban'),
    lib: join('lib'),
    main: join('app', 'main'),
    root,
    server: join('server'),
    sidebar: join('app', 'sidebar'),
    utils: join('utils'),
  },
};
