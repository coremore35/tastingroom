# Project Name

> GameDen

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

The purpose of this app project is construct meaning of my learning of different languages through a viable web application. The application works to create a database of any games your own or have played. When adding a game into your database, it links up with the BoardGameAtlas API to pull information, such as, images, min/max players, playtime, game description. It also has CRUD functionality, as the user is able to add whether or not they own the game, have placed it on a wish list, their personal rating, and notes about game play.

## Screenshots

![Example layout](/images/screenshot1.png)
![Example keyword entry](/images/screenshot2.png)

## Technologies

- HTML5
- CSS3
- Javascript ES6
- JQuery 3.4.1
- Express
- MongoDB
- Mongoose
- Board Game Atlas (https://www.boardgameatlas.com/api/docs)

## Setup

## Code Examples

`
//SHOW PAGE
router.get('/:id', (req, res) => {
Boardgame.findById(req.params.id, (err, currentGame) => {
if (err) {
console.log(err);
}
console.log(currentGame);
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

// Using JQuery to add data to tiles

const handleData = data => {
// console.log(data);

    const $description = $('<p>');
    $description.text(data.games[0].description_preview);

    const $addImg = $('<img>').addClass('is-size-2 title has-text-centered');
    $addImg.attr('src', `${data.games[0].image_url}`);

    const $numOfPlayers = $('<h4>').addClass(
      'is-size-2 title has-text-centered'
    );

`

## Features

List of features ready and TODOs for future development

- Utilizes two APIs
- Responsive web-design
- Takes user input to display images/quotes

To-do list:

- I would like to clean up the functions so that they are not so lengthy. This will also help to more easily make needed changes in the future.

## Status

Project is: _finished_, but there is room for growth as I gain more skills that can be applied.

## Contact

Created by Corey Morrison (https://coremore35.github.io) corey.neil.morrison@gmail.com

- feel free to contact me!

```

```
