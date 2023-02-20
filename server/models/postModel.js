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
      } catch (error) {
        console.log(error);
        reject(error);
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
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
  createPost: (
    title,
    ingredients,
    directions,
    country,
    description,
    image,
    author_id
  ) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'INSERT INTO posts (title,ingredients,directions,country,description,image,author_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            title,
            ingredients,
            directions,
            country,
            description,
            image,
            author_id,
          ],
          (error, results) => {
            if (error) reject(error);
            resolve({
              id: results.insertId,
              title: title,
              ingredients: ingredients,
              directions: directions,
              country: country,
              description: description,
              image: image,
              author_id: author_id,
            });
          }
        );
      } catch (error) {
        reject(error);
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
            pool.query(
              `SELECT * FROM posts WHERE id = ${id}`,
              (error, results) => {
                if (error) throw error;
                resolve(results[0]);
              }
            );
          }
        );
      } catch (error) {
        reject(error);
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
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
};

module.exports = Post;
