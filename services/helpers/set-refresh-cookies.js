const setRefreshCookies = (ctx, email, refreshToken) => {
  ctx.cookies.set('user', email, { httpOnly: true, secure: true, sameSite: 'none' });
  ctx.cookies.set('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'none' });
};

module.exports = setRefreshCookies;
