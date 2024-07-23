const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `
    INSERT INTO "favorites"
      ("name", "category_id", "gif_id", "gif_url", "gif_title")
      VALUES
      ($1, $2, $3, $4, $5);
  `;
  const queryValues = [
   newFavorite.name,
   newFavorite.category_id,
   newFavorite.gif_id,
   newFavorite.gif_url,
   newFavorite.gif_title
  ];
  pool.query(queryText, queryValues)
    .then((result) => { 
      res.sendStatus(201); 
      console.log(newFavorite);
    })
    .catch((err) => {
      console.log('Error in POST /api/plants', err);
      res.sendStatus(500);
    });});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
