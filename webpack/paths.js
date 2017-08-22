const { join, resolve } = require('path');

const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const CLIENT = join(ROOT, 'client');
const SERVER = join(ROOT, 'server');

module.exports = {
  ROOT,
  DIST,
  CLIENT,
  SERVER,
};
