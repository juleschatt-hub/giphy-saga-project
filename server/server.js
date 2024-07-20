require('dotenv').config();
const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

const GIPHY_API_KEY = process.env.GIPHY_API_KEY; 

const PORT = process.env.PORT || 5001;


app.get('/api_key', (req, res) => {
  res.send(GIPHY_API_KEY);
  res.json({GIPHY_API_KEY})
});

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`, `secret key for GIPHY is: ${GIPHY_API_KEY}`);
});
