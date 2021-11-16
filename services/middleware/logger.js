const log = (ctx, name, message, custom) => {
  const transform = (contents) => process.env.NODE_ENV === 'dev' ? JSON.parse(JSON.stringify(contents)) : JSON.stringify(contents);
  console.log(transform({ name, message, correlationid: ctx.headers.correlationid, timestamp: new Date(), path: ctx.path, ...custom }));
}

const logger = (app) => {
  app.context.logger = {
    incomingRequest: (ctx) => {
      log(ctx, 'Incoming request');
    },
    error: (ctx, name, message, stack) => {
      log(ctx, name, message, { stack });
    },
    tokenCreated: (ctx, user) => {
      log(ctx, 'Token created', undefined, { user });
    },
    outgoingResponse: (ctx, elapsed) => {
      log(ctx, 'Outgoing response', undefined, { status: ctx.status, elapsed });
    }
  }
}

module.exports = logger;
