const { v4: uuidv4 } = require('uuid');

const setCorrelationId = async (ctx, next) => {
  if (!ctx.headers['correlationid']) {
    ctx.headers['correlationid'] = uuidv4();
  }
  await next();
};

module.exports = setCorrelationId;
