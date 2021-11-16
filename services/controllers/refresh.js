const { v4: uuidv4 } = require('uuid');

const { deleteRefreshTokenForUser, getRefreshTokenForUser, updateRefreshTokenForUser } = require('../database');
const { encrypt, setRefreshCookies } = require('../helpers');

const refresh = {
  get: async (ctx) => {
    const user = ctx.cookies.get('user');
    const refreshToken = ctx.cookies.get('refreshToken');

    if (!user || !refreshToken)
      ctx.throw(400, 'Missing request parameters');

    const data = await getRefreshTokenForUser(ctx, user);

    if (new Date() > new Date(data?.expiry)) {
      await deleteRefreshTokenForUser(ctx, user);
      ctx.throw(401, 'Expired refresh token');
    }

    if (data?.token === refreshToken) {
      const updatedRefreshToken = uuidv4();
      await updateRefreshTokenForUser(ctx, user, updatedRefreshToken);

      const token = await encrypt({ user });
      ctx.logger.tokenCreated(ctx, user);

      setRefreshCookies(ctx, user, updatedRefreshToken);
      
      ctx.body = { token, expiry: (60000 * 5) - 10000 };
    } else {
      ctx.throw(401, 'Invalid refresh token');
    }
  }
}

module.exports = refresh;
