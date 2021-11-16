const query = `
  INSERT INTO tokens (type, email, token, expiry) 
  VALUES ($1, $2, $3, $4) 
  ON CONFLICT (email, type) 
  DO UPDATE SET token = $3, expiry = $4
;`;

const type = 'REFRESH';
const expiry = new Date(Date.now() + 60000 * 60);

const createRefreshTokenForUser = (ctx, email, refreshToken) => {
  return ctx.db.query(query, [type, email, refreshToken, expiry])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = createRefreshTokenForUser;
