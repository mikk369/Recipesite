const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: 'http://localhost:5173/',
//   credentials: true,
// };
// app.use(cors(corsOptions));

// routes
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port: ${3000}`);
});
