$(() => {
  console.log('jquery connected');
  let $gameNameAPI = $('.gameName').text();
  console.log($gameNameAPI);

  let endpoint = `https://www.boardgameatlas.com/api/search?name=${$gameNameAPI}&client_id=9iIbuZSXSX`;

  const handleData = data => {
    // console.log(data);

    const $description = $('<p>');
    $description.text(data.games[0].description_preview);

    const $addImg = $('<img>').addClass('is-size-2 title has-text-centered');
    $addImg.attr('src', `${data.games[0].image_url}`);

    const $numOfPlayers = $('<h4>').addClass(
      'is-size-2 title has-text-centered'
    );

    $numOfPlayers.text(
      `min: ${data.games[0].min_players} - max: ${data.games[0].max_players}`
    );

    const $playtime = $('<h4>').addClass('is-size-2 title has-text-centered');
    $playtime.text(
      `${data.games[0].min_playtime} - ${data.games[0].max_playtime} mins`
    );

    $('.col1box1').append($addImg);
    $('.col2box2').append($numOfPlayers);
    $('.col2box3').append($playtime);
    $('.widebox').append($description);
  };

  $.ajax({
    url: endpoint
  }).then(handleData);
});
