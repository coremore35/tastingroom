const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgames');

// =====================================
//             Routes
// =====================================

//INDEX PAGE
router.get('/boardgames', (req, res) => {
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

// NEW PAGE
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

//SHOW PAGE
router.get('/:id', (req, res) => {
  Boardgame.findById(req.params.id, (err, currentGame) => {
    if (err) {
      console.log(err);
    }
    res.render('show.ejs', {
      game: currentGame
    });
  });
});

// CREATE (SERVER)
router.post('/boardgames', (req, res) => {
  if (req.body.wishList === 'on') {
    req.body.wishList = true;
  } else {
    req.body.wishList = false;
  }

  if (req.body.own === 'on') {
    req.body.own = true;
  } else {
    req.body.own = false;
  }

  Boardgame.create(req.body, (error, createdGame) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect('/boardgames');
    }
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
