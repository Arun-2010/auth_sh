const express = require('express');
const authRoutes = require('./routes/auth.routes');
const app = express();
const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/post.route');
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);
module.exports = app;