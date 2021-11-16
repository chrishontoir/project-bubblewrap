const query = `
  DELETE FROM tokens 
  WHERE email = $1 AND type = 'REFRESH'
;`;

const deleteRefreshTokenForUser = (ctx, email) => {
  return ctx.db.query(query, [email])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = deleteRefreshTokenForUser;
