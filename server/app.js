const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/posts', postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
