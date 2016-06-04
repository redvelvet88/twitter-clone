$(document).ready(function() {
  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function() {
  $('#tweet-content .tweet-compose').css('height', '5em');
  $('#tweet-controls').show();

  $('.tweet-compose').keyup(function() {
    var maxLength = 140;
    var textLength = $('.tweet-compose').val().length;
      $('#char-count').text(maxLength-textLength);

      if (textLength > 129) {
        $('#char-count').css('color', 'red')
      } else {
        $('#char-count').css('color', 'black')
      }

  });

  });
});
