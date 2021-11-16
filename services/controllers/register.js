const bcrypt = require('bcrypt');

const register = {
  post: async (ctx) => {
    const { username, password, firstname, surname } = ctx.request.body;

    if (!username || !password || !firstname || !surname) {
      ctx.throw(400, 'Missing request parameters');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = 'N';
    const status = 'ACTIVE';
    const attempts = 0;

    const query = `
      INSERT INTO users(email, password, firstname, surname, admin, status, attempts)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    ;`
    const rowCount = await ctx.db.query(query, [username, hashedPassword, firstname, surname, admin, status, attempts])
      .then(res => res.rowCount)
      .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err.message }));

    if (rowCount > 0) {
      ctx.body = {
        status: 200,
        message: 'Successfully registered'
      }
    } else {
      ctx.throw(500, 'Failed to register');
    }

  }
};

module.exports = register;
