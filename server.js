//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const boardgameController = require('./controllers/boardgames');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/boardgames';

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo database');
});

app.use(boardgameController);
app.use('/boardgames', boardgameController);

//___________________
// Routes
//___________________
//localhost:3000
app.get('/', (req, res) => {
  res.send('app is running!');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
