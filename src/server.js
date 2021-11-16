const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const fs = require('fs');
const path = require('path');
const https = require('https');

const app = new Koa();

app.use(serve(path.resolve(__dirname, '../build')));

https.createServer({
  cert: fs.readFileSync(path.resolve(__dirname, '../ssl', '35.189.72.251.crt')),
  key: fs.readFileSync(path.resolve(__dirname, '../ssl', '35.189.72.251.key'))
}, app.callback()).listen(3000);