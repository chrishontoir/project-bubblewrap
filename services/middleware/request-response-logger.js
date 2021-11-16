const requestResponseLogger = async (ctx, next) => {
  const start = new Date();
  ctx.logger.incomingRequest(ctx);
  await next();
  const end = new Date()
  ctx.logger.outgoingResponse(ctx, end - start);
};

module.exports = requestResponseLogger;
