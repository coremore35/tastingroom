const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgames');

// =====================================
//             Routes
// =====================================

//INDEX PAGE
router.get('/', (req, res) => {
  Boardgame.find({}, (err, allGames) => {
    // console.log({ games });
    // if (err) {
    //   console.log(err);
    // }
    res.render('index.ejs', {
      games: allGames
    });
  });
});

router.get('/boardgames/new', (req, res) => {
  res.render('new.ejs');
});

router.get('boardgames/:id', (req, res) => {
  const currentBoardgame = Boardgame[req.params.id];
  res.render('show.ejs', {
    boardgame: currentBoardgame
  });
});

// SEED ROUTE

const boardgameSeed = require('../models/seed.js');

router.get('/seed/boardgames', (req, res) => {
  Boardgame.insertMany(boardgameSeed, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.send(games);
    }
  });
});

module.exports = router;
