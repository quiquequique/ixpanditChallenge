const express = require('express');
const router = express.Router();
const { searchPoke } = require('../controllers/pokeSearch.controller');
const { randomPoke } = require('../controllers/pokeRandom.controller');

/* GET users listing. */
router.get('/randomPoke', randomPoke);
router.get('/search', searchPoke);

module.exports = router;
