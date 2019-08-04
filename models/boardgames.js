const mongoose = require('mongoose');

const boardgameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  own: Boolean,
  wishList: Boolean,
  myRating: Number,
  gamePlayNotes: String
});

const Boardgame = mongoose.model('Boardgame', boardgameSchema);

module.exports = Boardgame;
