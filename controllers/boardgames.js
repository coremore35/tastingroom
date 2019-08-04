const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgames');

router.get('/', (req, res) => {
  res.render('show.ejs');
});

module.exports = router;
