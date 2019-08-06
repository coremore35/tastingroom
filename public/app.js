$(() => {
  const handleData = data => {
    const $description = $('<p>').text(data.description);
  };

  $.ajax({
    url: `https://www.boardgameatlas.com/api/search?name=${gameName}&client_id=9iIbuZSXSX`
  });
});
