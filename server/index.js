import http from 'http';
import app from 'server/app';

const server = http.createServer(app);
let currentApp = app;

server.listen(3000);

console.log('Server listening on port:', 3000); // eslint-disable-line

if (module.hot) {
  module.hot.accept('server/app', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
