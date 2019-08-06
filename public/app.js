$(() => {
  console.log('jquery connected');
  let $gameNameAPI = $('.gameName').text();
  console.log($gameNameAPI);

  let endpoint = `https://www.boardgameatlas.com/api/search?name=${$gameNameAPI}&client_id=9iIbuZSXSX`;

  const handleData = data => {
    // console.log(data);

    const $description = $('<p>').addClass('gameDescription');
    $description.text(data.games[0].description_preview);

    const $addImg = $('<img>').addClass('gameImg');
    $addImg.attr('src', `${data.games[0].image_url}`);

    const $numOfPlayers = $('<h4>').addClass('numOfPlayers');

    $numOfPlayers.text(
      `# of Players: ${data.games[0].min_players} - ${
        data.games[0].max_players
      }`
    );

    const $playtime = $('<h4>').addClass('playtime');
    $playtime.text(
      `Playtime: ${data.games[0].min_playtime} - ${
        data.games[0].max_playtime
      } mins`
    );

    $('.gameStats').append($addImg);
    $('.gameStats').append($numOfPlayers);
    $('.gameStats').append($playtime);
    $('.gameStats').append($description);
  };

  $.ajax({
    url: endpoint
  }).then(handleData);
});
