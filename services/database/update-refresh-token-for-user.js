const query = `
  UPDATE tokens 
  SET token = $1 
  WHERE email = $2 AND type = 'REFRESH'
;`;

const updateRefreshTokenForUser = (ctx, email, updatedRefreshToken) => {
  return ctx.db.query(query, [updatedRefreshToken, email])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = updateRefreshTokenForUser;
