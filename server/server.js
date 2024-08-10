require('dotenv').config();
const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const searchRouter = require('./routes/search.router');

// const REACT_APP_GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY; 

// const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key={REACT_APP_GIPHY_KEY}&q={searchQuery}&limit=10'

const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/gif', (req, res) => {
  // res.send(REACT_APP_GIPHY_KEY);
  // res.json({REACT_APP_GIPHY_KEY: REACT_APP_GIPHY_KEY})
});
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/search', searchRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
