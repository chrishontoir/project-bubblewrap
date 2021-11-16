const { Client } = require('pg');
const fs = require('fs');
const path = require('path')

const dbGateway = async (app) => {
  app.context.db = new Client({
    user: 'postgres',
    host: '35.242.170.83',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(path.join(__dirname, '../../ssl/pb-ca.crt')).toString(),
      cert: fs.readFileSync(path.join(__dirname, '../../ssl/postgres.crt')).toString(),
      key: fs.readFileSync(path.join(__dirname, '../../ssl/postgres.key')).toString()
    }
  })

  app.context.db.connect()
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('Connection to DB failed', err));

  
};

module.exports = dbGateway;
