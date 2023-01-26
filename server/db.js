const mysql = require('mysql2');

// / Create a connection to the database
const pool = mysql.createPool({
  host: 'localhost',
  database: 'recipe',
  user: 'root',
  password: '',
  port: '3307',
});

// Connect to DB
pool.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err);
  }
  console.log('Connected to the database!');
});

module.exports = pool;
