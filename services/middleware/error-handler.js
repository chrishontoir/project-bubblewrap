const errorHandler = async (ctx, next) => {
  return next().catch(error => {
    const { statusCode, name, message, stack } = error;
    ctx.type = 'json';
    ctx.status = statusCode || 500;
    ctx.body = {
      status: ctx.status,
      name,
      message
    }
    ctx.logger.error(ctx, name, message, stack);
  })
};

module.exports = errorHandler;
