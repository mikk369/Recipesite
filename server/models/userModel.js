const pool = require('./../db.js');
const bcrypt = require('bcryptjs');

const User = {
  createUser: (username, email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        pool.query(
          'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
          [username, email, hashedPassword],
          (error, results) => {
            if (error) reject(error);
            resolve({
              username: username,
              email: email,
              password: hashedPassword,
            });
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },
  //   checks if username and email already exists
  checkUser: (username, email) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'SELECT * FROM users WHERE username = ? AND email = ?',
          [username, email],
          (error, results) => {
            if (error) return reject(error);
            if (results.length > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },

  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          "SELECT * FROM users WHERE email = ?",
          [email],
          (error, results) => {
            if (error) return reject(error);
            if (results.length > 0) {
              resolve(results[0]);
            } else {
              resolve(false);
            }
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = User;
