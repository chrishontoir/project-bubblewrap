const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const { createRefreshTokenForUser, getUserByEmail, increaseUserAttempts, resetUserAttempts } = require('../database');
const { encrypt, setRefreshCookies } = require('../helpers');

const auth = {
  post: async (ctx) => {
    const { username, password } = ctx.request.body;

    if (!username || !password)
      ctx.throw(400, 'Missing request parameters');

    const userData = await getUserByEmail(ctx, username);

    if (!userData) 
      ctx.throw(401, 'Unknown user');

    if (userData.status !== 'ACTIVE')
      ctx.throw(401, 'User account is not active');

    const match = await bcrypt.compare(password, userData?.password);

    if (match) {
      if (userData.attempts > 0)
        await resetUserAttempts(ctx, username);

      const refreshToken = uuidv4();

      await createRefreshTokenForUser(ctx, username, refreshToken);

      const token = await encrypt({ user: userData?.email });
      ctx.logger.tokenCreated(ctx, userData?.email);

      setRefreshCookies(ctx, username, refreshToken);

      ctx.body = { token, expiry: (60000 * 5) - 10000 };
    } else {
      const updatedAttempts = userData?.attempts + 1;

      await increaseUserAttempts(ctx, username, updatedAttempts);

      ctx.throw(401, 'Invalid user credentials');
    }
  }
};

module.exports = auth;
