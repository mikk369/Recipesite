const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

// app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'https://recipe.themikk.ee/',
  credentials: true,
};
app.use(cors(corsOptions));

// routes
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
