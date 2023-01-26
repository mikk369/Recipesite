const pool = require('./../db.js');

// create a model object with methods for interacting with the database
const Post = {
  getAllPosts: () => {
    return new Promise((resolve, reject) => {
      try {
        pool.query('SELECT * FROM posts', (error, results) => {
          if (error) throw error;
          resolve(results);
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
  getPostById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'SELECT * FROM posts WHERE id = ?',
          [id],
          (error, results) => {
            if (error) reject(error);
            resolve(results[0]);
          }
        );
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
  createPost: (title, ingredients, directions, country, description) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'INSERT INTO posts (title,ingredients,directions,country,description) VALUES (?, ?, ?, ?, ?)',
          [title, ingredients, directions, country, description],
          (error, results) => {
            if (error) reject(error);
            resolve({
              id: results.insertId,
              title: title,
              ingredients: ingredients,
              directions: directions,
              country: country,
              description: description,
            });
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },
  updatePost: (id, title, ingredients, directions, country, description) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'UPDATE posts SET title = ?, ingredients = ?, directions = ?, country = ?, description = ? WHERE id = ?',
          [title, ingredients, directions, country, description, id],
          (error, results) => {
            if (error) throw error;
            Post.getPostById(id)
              .then((post) => resolve(post))
              .catch((error) => reject(error));
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },
  deletePost: (id) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query('DELETE FROM posts WHERE id = ?', [id], (error, results) => {
          if (error) throw error;
          resolve();
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
};

module.exports = Post;
