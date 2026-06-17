var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/movies', async function(req, res) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
  const data = await response.json();
  res.json({ movies: data.results });
});

module.exports = router;
