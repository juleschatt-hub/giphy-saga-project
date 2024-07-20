require('dotenv').config();
const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

const REACT_APP_GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY; 

const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/api_key', (req, res) => {
  res.send(REACT_APP_GIPHY_KEY);
  // res.json({REACT_APP_GIPHY_KEY: REACT_APP_GIPHY_KEY})
});
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


