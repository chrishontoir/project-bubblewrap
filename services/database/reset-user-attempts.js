const query = `
  UPDATE users 
  SET status = $1, attempts = $2 
  WHERE email = $3
;`;

const status = 'ACTIVE';
const attempts = 0;

const resetUserAttempts = (ctx, email) => {
  return ctx.db.query(query, [status, attempts, email])
    .catch(err => ctx.throw(502, { name: 'DatabaseError', message: err }));
};

module.exports = resetUserAttempts;
