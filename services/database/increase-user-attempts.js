const query = `
  UPDATE users 
  SET status = $1, attempts = $2 
  WHERE email = $3
;`;

const increaseUserAttempts = (ctx, email, updatedAttempts) => {
  const updatedStatus = updatedAttempts >= 3 ? 'FROZEN' : 'ACTIVE';

  return ctx.db.query(query, [updatedStatus, updatedAttempts, email])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = increaseUserAttempts;
