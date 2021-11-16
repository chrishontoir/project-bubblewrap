const cors = require('@koa/cors');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const path = require('path');

const https = require('https');

const { dbGateway, errorHandler, logger, requestResponseLogger, setCorrelationId } = require('./middleware');
const router = require('./router');

const app = new Koa();

app.use(cors({
  origin: 'https://35.189.72.251:3000',
  credentials: true
}));

app.use(bodyParser(['json']));

dbGateway(app);
logger(app);

app.use(setCorrelationId);
app.use(requestResponseLogger);
app.use(errorHandler);

app.use(router.routes());
app.use(router.allowedMethods());

https.createServer({
  cert: fs.readFileSync(path.resolve(__dirname, '../ssl', 'postgres.crt')),
  key: fs.readFileSync(path.resolve(__dirname, '../ssl', 'postgres.key'))
}, app.callback()).listen(3001);
