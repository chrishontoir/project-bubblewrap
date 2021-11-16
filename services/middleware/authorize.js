const { decrypt } = require('../helpers');

const tokenInvalidIssuer = (iss) => iss !== 'project-bubblewrap-api';
const tokenInvalidAudience = (aud) => aud !== 'project-bubblewrap-api';
const tokenExpired = (exp) => exp < new Date().valueOf();
const tokenNoUser = (user) => !user;

const authorize = async (ctx, next) => {
  if (!ctx.headers.authorization) {
    ctx.throw(401, 'Authorization header missing');
  };

  await decrypt(ctx.headers.authorization)
    .then(claims => {
      if (
        tokenInvalidIssuer(claims.iss) ||
        tokenInvalidAudience(claims.aud) ||
        tokenExpired(claims.exp) ||
        tokenNoUser(claims.user)
      ) {
        ctx.throw(401, 'Authorization header contains invalid claims');
      }
      ctx.state = { user: claims.user };
    })
    .catch(err => {
      ctx.throw(401, 'Authorization header invalid');
    });

  await next();
};

module.exports = authorize;
