const query = `
  SELECT * 
  FROM users 
  WHERE email = $1 
  LIMIT 1
;`;

const getUserByEmail = (ctx, email) => {
  return ctx.db.query(query, [email])
    .then(res => res.rows[0])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = getUserByEmail;
