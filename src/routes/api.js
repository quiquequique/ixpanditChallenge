const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/randomPoke', (req, res) => {
  res.send('respond with 3 random pokes');
});
router.get('/search', (req, res) => {
  res.send('respond with 3 searched pokes');
});

module.exports = router;
