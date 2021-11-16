const logout = {
  get: async (ctx) => {
    const user = ctx.cookies.get('user');
    const refreshToken = ctx.cookies.get('refreshToken');

    if (!user || !refreshToken) {
      ctx.throw(400, 'Missing request parameters');
    }

    const query = 'DELETE FROM tokens WHERE email = $1;'
    await ctx.db.query(query, [user])
      .then(res => res.rowCount)
      .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));

    ctx.cookies.set('refreshToken', '', { httpOnly: true, secure: false, expires: new Date() });
    ctx.cookies.set('user', '', { httpOnly: true, secure: false, expires: new Date() });

    ctx.body = { token: null, expiry: null };
  }
}

module.exports = logout;
