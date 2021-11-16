const query = `
  SELECT * 
  FROM tokens 
  WHERE email = $1 AND type = 'REFRESH'
  LIMIT 1
;`;

const getRefreshTokenForUser = (ctx, email) => {
  return ctx.db.query(query, [email])
    .then(res => res.rows[0])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = getRefreshTokenForUser;
