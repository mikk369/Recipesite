const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
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
