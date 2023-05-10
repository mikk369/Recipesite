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
  // add liked post to database
  likedPost: (user_id, post_id) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'INSERT INTO liked_posts (user_id, post_id) VALUES (?, ?)',
          [user_id, post_id],
          (error, results) => {
            if (error) throw error;
            resolve(results);
          }
        );
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
  getPostById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query('SELECT * FROM posts WHERE id = ?', [id], (error, results) => {
          if (error) reject(error);
          resolve(results[0]);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
  createPost: (postData) => {
    const { title, ingredients, directions, country, description, image, author_id, username } =
      postData;
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO posts (
          title,
          ingredients,
          directions,
          country,
          description,
          image,
          author_id,
          username
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        title,
        ingredients,
        directions,
        country,
        description,
        image,
        author_id,
        username,
      ];
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const newPost = {
            title,
            ingredients,
            directions,
            country,
            description,
            image,
            author_id,
            username,
            id: results.insertId, // add id to the new post object
          };
          resolve(newPost);
        }
      });
    });
  },

  updatePost: (id, title, ingredients, directions, country, description, image) => {
    return new Promise((resolve, reject) => {
      try {
        pool.query(
          'UPDATE posts SET title = ?, ingredients = ?, directions = ?, country = ?, description = ?, image = ? WHERE id = ?',
          [title, ingredients, directions, country, description, image, id],
          (error, results) => {
            if (error) throw error;
            pool.query(`SELECT * FROM posts WHERE id = ${id}`, (error, results) => {
              if (error) throw error;
              resolve(results[0]);
            });
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
