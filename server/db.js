const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'd116559.mysql.zonevs.eu',
  database: 'd116559sd490885',
  user: 'd116559sa443641',
  password: 'pikksalas6na',
  // port: '3307',
});

// Connect to DB
pool.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err);
  }
  console.log('Connected to the database!');
});

module.exports = pool;
