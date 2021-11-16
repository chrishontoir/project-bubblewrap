const userInfo = {
  get: async (ctx) => {
    const { user } = ctx.state;

    if (!user) {
      ctx.throw(400, 'Invalid request parameters');
    }

    const query = `
      SELECT email, firstname, surname, admin
      FROM users
      WHERE email = $1
    `;
    const [data] = await ctx.db.query(query, [user])
      .then(res => res.rows)
      .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err.message }));

    if (data) {
      ctx.body = { ...data };
    } else {
      ctx.throw(404, 'User not found');
    }
  }
};

module.exports = userInfo;
